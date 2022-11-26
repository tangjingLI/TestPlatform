/**
* @author ltj
* @since  2022/11/23 23:21
*/

<template>
  <div class="choice">

    <div class="percent">
      <a-steps :current=percent id="step">
        <a-step title="选择APK"/>
        <a-step title="选择工具"/>
        <a-step title="选择虚拟机"/>
        <a-step title="运行时间"/>
      </a-steps>
    </div>
  </div>

  <div class="body">
    <up-square-outlined/>
  </div>

  <div class="bottom">
    <a-button id="two" class="btn" @click="">继续</a-button>
    <a-button id="one" class="btn" @click="back">取消</a-button>
  </div>


</template>

<script>
// import bus from 'vue3-eventbus'
// import APK from '../components/APK'

export default {
  name: 'Choice',
  data () {
    return {
      percent: 0
    }
  },
  methods: {
    next () {
      // bus.emit('stepChange', { value: 1 })
      this.$router.push('/home/running')
    },
    back(){
      this.$router.push('/home')
    }
  }
}

</script>

<style scoped>
.choice {
  border-bottom: #42b983 2px dashed;
  /*overflow-y: scroll;*/
  width: 100%;
}

.percent {
  /*border: solid 2px #8080de;*/
  height: 100px;
  padding-top: 30px;
  padding-left: 200px;
  padding-right: 200px;
}

#step {
  font-size: 20px;
  font-weight: bold;
}

.body {
  height: 760px;
  /*border-bottom: #42b983 2px solid;*/

}

.bottom {
  height: 80px;
  border: #42b983 2px solid;
  padding-top: 20px;
}

.btn {
  float: right;
  height: 40px;
  width: 90px;
  margin-right: 30px;
  font-weight: bold;
}

#one {
  background-color: white;
  color: #67b3f6;
  border: 1px solid #67b3f6;
}

#two {
  background-color: #67b3f6;
  color: white;
  border: 1px solid #67b3f6;
}

</style>
