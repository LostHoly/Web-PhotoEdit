<template>
  <el-button size="small" type="primary"  @click=send()>上传</el-button>
</template>

<script>
    var token =  localStorage.getItem('token')
    export default {
       methods: {
       send(){
         console.log(this.$axios)
         console.log(this)
         console.log(token)
            this.$axios({
                 method:"post",
                 url:"/iot/api/sjz/img",
                 headers:{'token': token},
                 responseType:'json',
                  }).then(function(response){
                      console.log(response)
                  }).catch(function(error){
                      console.log(error)
                  })
           return false
         }
       }
     }
</script>
