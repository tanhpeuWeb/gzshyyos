<template>
  <div class="notFound">
    <div class="card" style="border:none;margin-top:200px">
      <div class="card-body">
        <h5 class="card-title">页面走丢啦！</h5>
        <p class="card-text">
          <small class="text-muted">您可以选择返回
              <router-link to="/onsale">首页</router-link>
          </small>
        </p>
      </div>
      <img src="@/assets/404.jpg" class="card-img-top" alt="a"  style="width:20%;margin-left:40%"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "notFound",
  components: {},
  data() {
    return {};
  },
  methods: {},
  created() {}
};
</script>

<style lang="less" scoped>
</style>