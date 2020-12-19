<!--
 * @Descripttion: 
 * @version: 
 * @Author: zzp
 * @Date: 2020-12-16 10:02:21
 * @LastEditors: zzp
 * @LastEditTime: 2020-12-19 21:19:32
-->
<!-- 登录框 -->
<template>
  <v-app class="login-box">
    <div class="head-img">
      <v-avatar size="128" style="border:5px solid #70a1ff">
        <img src="../../assets/锅炉系统.png" alt="John" />
      </v-avatar>
    </div>
    <v-form ref="form" v-model="valid" lazy-validation class="login-input">
      <v-text-field v-model="user.username" :counter="10" :rules="nameRules" label="用户名" required></v-text-field>

      <v-text-field
        v-model="user.userpwd"
        label="密码"
        :rules="pwdRules"
        required
        :append-icon="showpwd ? 'mdi-eye' : 'mdi-eye-off'"
        :type="showpwd ? 'text' : 'password'"
        @click:append="showpwd = !showpwd"
      ></v-text-field>
      <div class="submit-box">
        <v-btn
          :disabled="loading"
          color="success"
          class="mr-4"
          @click="onLogin"
          large
          :loading="loading"
          width="120"
        >登录</v-btn>
        <v-btn color="error" class="mr-4" @click="reset" large width="120">重置</v-btn>
      </div>
    </v-form>
  </v-app>
</template>

<script>
import userapi from '@/api/user.js'
export default {
  name: 'LoginForm',
  data () {
    return {
      valid: true,
      loading: false,
      user: {
        username: '',
        userpwd: '',
      },
      nameRules: [
        v => !!v || '请填写用户名',
        v => (v && v.length <= 10) || '用户名不得大于10位',
      ],
      pwdRules: [
        v => !!v || '请填写密码'
      ],
      showpwd: false
    }
  },
  methods: {
    onLogin () {
      if (this.$refs.form.validate()) {
        const user = this.user
        // 进入等待状态
        this.loading = !this.loading

        userapi.login(user).then((res) => {
          if (res.status === 200) {
            let info = res.data
            if (info.status === -1) {
              this.$message.error(`${info.msg}`)
            } else if (info.status === 0) {
              this.$message.warning(`${info.msg}`)
            } else {
              this.$message.success(`${info.msg}`)
            }
            this.$refs.form.reset()
            this.$refs.form.resetValidation()
          }
          // 结束状态
          this.loading = !this.loading
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    reset () {
      this.$refs.form.reset()
      this.$refs.form.resetValidation()
    },
    open2 () {
      this.$message.error('错了哦，这是一条错误消息')
    }
  },
}

</script>
<style scoped>
.login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 400px;
  padding: 15px 15px 0;
  z-index: 2;
  border-radius: 8px;
  opacity: 0.9;
  overflow: hidden;
}
.submit-box {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
.head-img {
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
}
.login-input {
  width: 80%;
  margin-left: 50px;
}
</style>