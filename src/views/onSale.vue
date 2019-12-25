<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import {apiLogin} from '@/request/api.js'

export default {
  data(){
    return {

    }
  },
  methods:{
    
  },
  created(){
        apiLogin({'username':'twj','passworld':123}).then((res)=>{console.log(res)}).catch((err)=>{
            if(err != ''){
              alert(2)
            }
        })
  }
}
</script>
