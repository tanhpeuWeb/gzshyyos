<template>
  <div id="app">
    <Header v-if="$route.meta.keepAlive" />
      <router-view style="min-height:600px"></router-view>
    <Footer style="width:100%;position:fixed;bottom:0;left:1%;display:flex;justify-content:center;padding-top:10px;z-index:9999" />
  </div>
</template>


<script>
import Header from '@/components/header/header'
import Footer from '@/components/footer/footers'
export default {
  name:"shos",
  components:{
      Header,
      Footer
  },
  data(){
    return {

    }
  },

}
</script>



<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
li {
  list-style: none;
}
</style>
