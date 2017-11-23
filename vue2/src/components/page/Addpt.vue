<template>
    <el-upload
      class="upload-demo"
      action="/api/sjz"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      multiple
      :limit="3"
      :on-exceed="handleExceed"
      :file-list="fileList">
      <el-button size="small" type="primary">上传</el-button>
    </el-upload>
</template>
<script>
    export default {
       data() {
         return {
           fileList: []
         };
       },
       methods: {
       send(){
           this.$axios({
                method:"get",
                url:"/api/sjz/index",
                headers:{'token': localStorage.getItem('token')},
                responseType:'json',
           }).then(function(response){
               console.log(response)
           }).catch(function(error){
               console.log(error)
           })
       },
       handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      }
    }
  }
</script>
