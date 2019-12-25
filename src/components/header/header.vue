<template>
  <div class="home">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <img class="logo" src="@/assets/logo.jpg" alt="logo" style="width:30px;height:30px" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/">在售药品<span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
              <router-link to="/connect">厂家联系录</router-link>
          </li>
        </ul>
        <li>登录</li>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {},
  data() {
    return {};
  },
  methods: {

  },
  created() {}
};
</script>

<style lang="less" scoped>
@media (min-width: 768px) and (max-width: 991.98px) {
  #nav-menu {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>