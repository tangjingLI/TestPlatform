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
        <a-step title="其他配置"/>
      </a-steps>
    </div>

    <div class="body">
      <component :is="myList[percent]"
                 @back="back"
                 @cancel="cancel"
                 @one="handleOne"
                 @two="handleTwo"
                 @three="handleThree"
                 @four="handleFour"
                 @finish="finish"
                 @next="go">
      </component>
    </div>

  </div>
</template>

<script>
// import bus from 'vue3-eventbus'
import APK from '../components/APK'
import Time from '../components/Time'
import Machine from '../components/Machine'
import Tool from '../components/Tool'

export default {
  name: 'Choice',
  components: {
    APK,
    Time,
    Machine,
    Tool
  },
  data () {
    return {
      percent: 0,
      myList: ['APK', 'Tool', 'Machine', 'Time'],
      time: 30,

    }
  },
  methods: {
    go () {
      console.log('go')
      this.percent = this.percent + 1
    },
    finish () {
      // bus.emit('stepChange', { value: 1 })
      console.log('finish')
      this.$router.push('/home/running')
    },
    cancel () {
      console.log('cancel')
      this.$router.push('/home/fun')
    },
    back () {
      console.log('back')
      this.percent = this.percent - 1
    },
    handleOne (val) {

    },
    handleTwo (val) {

    },
    handleThree (val) {

    },
    handleFour (val) {
      console.log(val)
      this.time = val.time
    },
  }
}

</script>

<style scoped>
.choice {
  /*overflow-y: scroll;*/
  width: 100%;
}

.percent {
  /*border: solid 2px #8080de;*/
  height: 20%;
  padding: 20px 200px;
  border-bottom: #42b983 2px dashed;
}

#step {
  font-size: 20px;
  font-weight: bold;
}

.body {
  height: 50%;
  /*border: #42b983 2px solid;*/

  /*border-bottom: #42b983 2px solid;*/

}

</style>
