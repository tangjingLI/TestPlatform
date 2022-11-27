<template>
  <div class="home">
    <div class="top">
      <div id="label">
        <android-outlined id="icon"/>
        <p id="title">安卓测试平台</p>
      </div>
      <h1 id="user">欢迎用户123456</h1>
    </div>

    <router-view style="height:90%;padding: 0"></router-view>
  </div>
</template>

<script>
// import bus from 'vue3-eventbus'
import { AndroidOutlined } from '@ant-design/icons-vue'

export default {
  name: 'Home',
  data () {
    return {}
  },
  methods: {},
  components: {
    AndroidOutlined
  },
  mounted () {
    // bus.on('stepChange', e => {
    //   console.log('stepChange', e)
    //   this.percent = e.value
    // })
  }
}
</script>

<style scoped>
.top {
  padding: 0;
  height: 50px;
  background-color: #cbe7d9;
  /*border-bottom: #42b983 2px solid;*/
}

#label {
  float: left;
  margin-left: 15px;
  letter-spacing: 2px;
  /*font-weight: bold;*/
  font-size: 20px;
  margin-top: 10px;
  color: #517661;
  width: 300px;
}

#user {
  float: right;
  margin-right: 15px;
  letter-spacing: 2px;
  /*font-weight: bold;*/
  font-size: 15px;
  margin-top: 15px;
  color: #517661;
}

#icon {
  float: left;
  margin-right: 20px;
  color: #75ac8d;
  margin-top: 5px;

}

#title {
  float: left;
}

</style>
