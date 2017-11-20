<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i> 列表</el-breadcrumb-item>
                <el-breadcrumb-item>我的图片列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="handle-box">

            <el-input v-model="select_word" placeholder="输入图片名称" class="handle-input mr10"></el-input>
            <el-button type="primary" icon="search" @click="getData()">搜索</el-button>
        </div>

        <el-table :data="tableData" border style="width: 100%" ref="multipleTable" >
            <el-table-column prop="mydtid" label="id" width="80">
            </el-table-column>
            <el-table-column prop="dtname" label="图片名称" width="150">
            </el-table-column>
            <el-table-column prop="notes" label="备注" >
            </el-table-column>
            <el-table-column label="操作" width="80">
                <template scope="scope">
                    <el-button size="small" type="danger"
                            @click="handleEdit(scope)">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination">
            <el-pagination
                    @current-change ="handleCurrentChange"
                    layout="prev, pager, next"
                    :total="total"
                    :page-size="5"
                    >
            </el-pagination>
        </div>
    </div>
</template>

<script>
import util from '../common/js/util'
    export default {
        data() {
            var validator1=(rule, value, callback) => {
                console.log(123);
                console.log(value);
                this.$http.get("/iot/mydevicetype/findbydtname" ,{
                    params:{
                        dtname:value,
                        username:localStorage.getItem("ms_username"),
                        },
                    }).then(
                            success =>{

                                if(success.data==true)
                                {
                                    return callback(new Error("名称已存在！"));
                                } else {
                                     callback();
                                }
                            },
                            error => {
                                console.log(error);
                                callback();
                            }
                );
            }
            return {
                tableData: [],
                select_word:"",
                 page:1,
                 total:0,
                 dialogFormVisible: false,
                 form2:{
                    region1:'',
                 },
                 form: {
                 form2:{
                    region1:'',
                 },
                    dtname: [{
                      dtid:'',
                      dtname:''
                    }],
                    state:0,
                    notes:''
                },
                rules:{
                    region1:[
                        {required: true, message: '请选择名称', trigger: 'blur'},
                        {validator: validator1, trigger: 'blur'}
                    ],
                },
                updatemydtid:'',
                formLabelWidth: '120px'
            }
        },
        created(){
             this.getData();
        },
        methods: {
            getData(){

                this.$http.get("/iot/mydevicetype/list" ,{
                    params:{
                        dtname:this.select_word,
                        page:this.page,
                        username:localStorage.getItem("ms_username"),
                        },
                    }).then(
                            success =>{
                                this.tableData=success.data;
                                for(let i=0;i<success.data.length;i++){
                                    this.tableData[i].createtime=util.formatDate.format(new Date(success.data[i].createtime), 'yyyy-MM-dd hh:mm:ss');
                                    if(success.data[i].state==1)
                                    {
                                        this.tableData[i].state="禁用";
                                    }
                                    else
                                    {
                                        this.tableData[i].state="可用";
                                    }
                                }
                                this.count();

                            },
                            error => {
                                console.log(error);
                            }
                        );

            },
             handleCurrentChange(val){
               this.page = val;
               this.getData();
            },
            resetForm(formName){
                this.$refs[formName].resetFields();
            },
            count(){
                this.$http.get("/iot/mydevicetype/count" ,{
                    params:{
                        dtname:this.select_word,
                        username:localStorage.getItem("ms_username"),
                        },
                    }).then(
                            success =>{
                            //console.log(111);
                            //console.log(success.data);
                            this.total=success.data;

                            },
                            error => {
                                console.log(error);
                            }
                        );
            },
            handleEdit(val){
                this.dialogFormVisible=true;
                this.$router.push({path: '/editmd', query: {mydtid: val.row}});
            },
        }
    }
</script>

<style scoped>
.handle-box{
    margin-bottom: 20px;
}
.handle-select{
    width: 120px;
}
.handle-input{
    width: 300px;
    display: inline-block;
}
</style>
