<!--
 * @Descripttion: 
 * @version: 
 * @Author: zzp
 * @Date: 2020-12-16 09:32:28
 * @LastEditors: zzp
 * @LastEditTime: 2020-12-19 21:31:43
-->
<!--  -->
<template>
  <div id="main">
    <div class="title">
      <img src="../../../public/img/heading.png" alt />
    </div>
    <loginForm></loginForm>
  </div>
</template>

<script>
import loginForm from '@/components/loginForm'
export default {
  name: 'Login',
  components: {
    loginForm
  },
  mounted: function () {

  },
  data () {
    return {
    }
  },
  methods: {

  },
  computed: {

  }
}

</script>
<style scoped>
#main {
  position: relative;
  height: 100%;
  width: 100%;
  /* overflow: hidden; */
  background: url('../../../public/img/login_bg.jpg') no-repeat;
  background-size: cover;
}
.title {
  display: flex;
  justify-content: center;
  padding-top: 100px;
}
</style>