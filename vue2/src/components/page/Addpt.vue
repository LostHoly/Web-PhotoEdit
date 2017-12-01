<template>
    <el-upload
      class="upload-demo"
      action="/iot/api/sjz/img"
      :headers="headers"
      :before-upload="beforeupload"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      multiple
      :limit="3"
      :on-exceed="handleExceed"
      :file-list="fileList">
      <el-button size="small" type="primary"  >上传</el-button>
    </el-upload>
</template>

<script>
    var token =  localStorage.getItem('token')
    export default {
       data() {
         return {
           headers: {token: token},
           fileList: [],
         };
       },
       methods: {

       beforeupload(file){
         var reader = new FileReader();
         let vueComp = this
         reader.readAsDataURL(file)
         reader.onload=function(e){
            var rd = e.target.result;
            var pos = rd.indexOf("4")+2;
            rd = rd.substring(pos,rd.length - pos);
            console.log(rd)
            vueComp.$axios({
                 method:"post",
                 url:"/iot/api/sjz/img",
                 headers:{'token': token},
                 data:{
                    imgName:file.name,
                    imgStr:rd
                 },

                 responseType:'json',
                  }).then(function(response){
                      console.log(response)
                  }).catch(function(error){
                      console.log(error)
                  })
        // this.$axios({
        //         method:"post",
        //         url:"/iot/api/sjz/img",
        //         headers:{'token': localStorage.getItem('token')},
        //         data:{
        //            imgName:file.name,
        //            imgStr:rd
        //         },
        //         responseType:'json',
        //    }).then(function(response){
        //        console.log(response)
        //    }).catch(function(error){
        //        console.log(error)
        //    })
           return false
         }
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
    },
    computed:{
      headers(){
         Authorizations:localStorage.getItem('token')
      }
    }
  }
</script>
