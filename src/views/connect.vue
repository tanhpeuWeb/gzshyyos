<template>
  <div class="about">
    <h1>connect Me</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import {apiLogin} from '@/request/api.js'

export default {
  name:"connect",
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
