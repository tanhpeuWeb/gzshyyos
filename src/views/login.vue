<template>
  <div>
    <ul class="nav">
      <li class="nav-item item1st">
        <a class="nav-link active" href="#">
          <img src="@/assets/logo.jpg" style="width:60px;height:60px" alt="logo" />
        </a>
      </li>
      <li class="nav-item" style="position:relative;top:9px;">
        <h5 style="color:#0f542c">贵州山海医药有限公司</h5>
        <div style="color:#000;font-size:15px">欢迎登录</div>
      </li>
    </ul>
    <div class="row" style="height:700px;">
      <div class="loginInput col-lg-3  col-sm-6">
        <el-container>
          <el-form :model="login" ref="login" label-width="100px" class="demo-dynamic">
            <el-form-item
              prop="username"   
              label="账号"
              :rules="[
      { required: true, message: '请输入账号', trigger: 'blur' },
      { min:3, message: '不小于3个字符', trigger: 'blur,change' }
    ]"
            >
              <el-input v-model="login.username" autocomplete="off" clearable></el-input>
            </el-form-item>
            <el-form-item
              prop="password"
              label="密码"
              :rules="[
      { required: true, message: '请输入密码', trigger: 'blur' },
      { min: 3, message: '不小于3个字符', trigger: 'blur,change' }
    ]"
            >
              <el-input
                v-model="login.password"
                type="password"
                autocomplete="off"
                @keyup.enter.native="submitForm('login',$event)"
                clearable
              >
                <i
                  slot="suffix"
                  class="el-icon-view"
                  style="cursor: pointer"
                  @click="change_pass_status($event)"
                ></i>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                type="primary"
                @click="submitForm('login',$event)"
                style="width:100%"
              >提交</el-button>
            </el-form-item>
          </el-form>
        </el-container>
      </div>
    </div>
  </div>
</template>
<script>
//由于未全局挂载JQ所以只要用到就需要引入
import {apiLogin} from '@/request/api'
export default {
  data() {
    return {
      login: {
        domains: [
          {
            value: ""
          }
        ],
        password: "",
        auto: ""
      },
      plain: ""
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
           apiLogin()
        } else {
            alert(2)
          return false;
        }
      });
    },
    //登录成功操作
    after_login(data) {
      if (data.islogin == 1) {
        if (data.next !== "/") {
          window.location = data.next;
        } else {
          window.localStorage.setItem("token", JSON.stringify(data.token));
          window.localStorage.setItem("userInfo", JSON.stringify(data));
          //将后端传回token存入vuex
          this.$store.commit("setToken", data.token);
          this.$notify({
            type: "success",
            message: `欢迎您，${data.name}!`,
            duration: 3000
          });
          this.$router.replace({ path: "/index" });
        }
      } else if (data.islogin == -1) {
        this.$message({
          type: "error",
          message: "账号或密码错误"
        });
      }
    },
    //自动登录选项
    checkAuth() {
      let auto = JSON.parse(window.localStorage.getItem("userInfo"));
      if (auto) {
        this.$http
          .get("/api/login/in", { params: { auth: auto.auth } })
          .then(res => {
            if (res.islogin == 1) {
              this.$router.replace({ path: "/index" });
            }
          });
      }
    },
    //个人信息栏的动画效果
    change_pass_status(event) {
      let target_dom = document.getElementsByClassName("el-input__inner")[1];
      if (target_dom.type == "password") {
        target_dom.type = "text";
        event.target.className = "el-icon-sunrise";
      } else {
        target_dom.type = "password";
        event.target.className = "el-icon-view";
      }
    }
  },
  created: function() {
    //检查是否有自动登陆码
    this.checkAuth();
  }
};
</script>
<style scoped lang="less">
.row {
  display: felx;
  align-items: center;
  justify-content: center;
  background-image: url('../assets/login.jpg');
  background-repeat: no-repeat;
  background-size:100% 100%;
}

.loginInput {
    background-color: #fff;
    padding-top: 80px;
    padding-bottom:50px;
    border-radius: 10px;
}
</style>