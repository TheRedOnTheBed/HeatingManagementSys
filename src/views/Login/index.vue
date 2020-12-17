<!--
 * @Descripttion: 
 * @version: 
 * @Author: zzp
 * @Date: 2020-12-16 09:32:28
 * @LastEditors: zzp
 * @LastEditTime: 2020-12-17 01:20:32
-->
<!--  -->
<template>
  <div id="main">
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
  height: 792px;
  width: 1536px;
  /* overflow: hidden; */
  background: url('../../../public/img/glzlxt.png') no-repeat;
  background-size: 100% 100%;
  background-position: top center;
}
</style>