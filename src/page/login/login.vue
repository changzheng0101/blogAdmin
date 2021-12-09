<template>
  <!--  显示内容-->
  <div>
    <div class="login-header-box">
      <div class="admin-login-header-center">
        博客系统 | 登录
      </div>
    </div>
    <div class="login-content-box">
      <el-row>
        <el-col :span="20" style="margin-top: 30px">
          <el-form label-position="right" label-width="150px" :model="user">
            <el-form-item label="用户名" required>
              <el-input v-model="user.userName" placeholder="用户名/邮箱地址"></el-input>
            </el-form-item>
            <el-form-item label="密码" required>
              <el-input v-model="user.password" type="password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item label="验证码" required>
              <el-input v-model="loginInfo.verifyCode"  class="captcha-code-input-box" placeholder="请输入验证码"></el-input>
              <img :src="captchaPath" @click="updateVerifyCode" class="captcha-code">
              <a>看不清楚,换一张</a>
            </el-form-item>

            <el-form-item class="login-button">
              <el-button type="primary" @click="doLogin" size="small"> 登 录
              </el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        userName: '',
        password: '',
      },
      loginInfo: {
        verifyCode: '',
      },
      captchaPath: '../assets/login.png'
    }
  },
  methods: {
    doLogin() {

    },
    updateVerifyCode() {

    }
  },
  mounted() {
    this.updateVerifyCode();
  }
}
</script>

<style>
.login-header-box {
  margin-bottom: 20px;
}


.admin-login-header-center {
  background: dodgerblue;
  color: white;
  line-height: 46px;
  font-weight: 500;
  font-size: 22px;
  text-align: center;
}


.login-content-box {
  border-radius: 4px;
  width: 40%;
  margin: 0 auto;
  background: white;
  box-shadow: 0 1px 10px #afafaf;
}

.captcha-code{
  margin-top: 20px;
  cursor: pointer;
  margin-left: 10px;
  border: solid 1px #E6E6E6;
  width: 100px;
  padding-left: 10px;
  padding-right: 10px;
  height: 40px;
}

.login-button{
  margin-top: -20px;
}

</style>