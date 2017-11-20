<template>
    <el-upload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
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
           fileList: [{name: '1.jpg', url: 'http://pic.sogou.com/d?query=%CD%BC%C6%AC%B4%F3%C8%AB&st=255&mode=255&did=13#did12'}, {name: '2.jpg', url: 'http://pic.sogou.com/d?query=%CD%BC%C6%AC%B4%F3%C8%AB&st=255&mode=255&did=11#did10'}]
         };
       },
       methods: {
       send(){
           this.$axios({
                method:"get",
                url:"/iot/api/sjz/index",
                headers:{'token': 'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6OH0.YWmCSB5IzNWLrrxyiu6Xkqvn-CaLV1bBH2TaBd0fWRY'},
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
