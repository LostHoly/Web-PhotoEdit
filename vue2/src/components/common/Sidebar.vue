<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index">
                        <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index">
                        <i :class="item.icon"></i>{{ item.title }}
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {
                        icon: 'el-icon-setting',
                        index: 'readme',
                        title: '简介'
                    },
                    {
                        index:'5',
                        title:'图片表',
                        subs:[
                            {
                                index:'dtlist',
                                title:'列表'
                            },
                            {
                                index:'adddt',
                                title:'添加图片'
                            }
                        ]
                    },
                    {
                        index:'6',
                        title:'上传图片',
                        subs:[
                            {
                                index:'addpt',
                                title:'添加'
                            },
                            {
                                index:'edit',
                                title:'编辑'
                            }
                        ]
                    },
                    {
                        index:'8',
                        title:'我的图片',
                        subs:[
                            {
                                index:'mdlist',
                                title:'列表'
                            }
                        ]
                    },
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 250px;
        left: 0;
        top: 70px;
        bottom:0;
        background: #2E363F;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
