<template>
     <el-button type="primary" @click="display('upload')">上传图片</el-button>
</template>
<script>
    export default {
       methods: {
           display(upload){
               console.log(sessionStorage.getItem('token'));
               var upload = sessionStorage.getItem('token');
           }
       }
    }
</script>
