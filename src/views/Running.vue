/**
* @author ltj
* @since  2022/11/23 23:21
*/

<template>
  <div class="run">

    <div class="left">
      <div class="coverage">
        覆盖率
      </div>

      <div class="command">
        <p>(node:18780) UnhandledPromiseRejectionWarning: SyntaxError:
          C:\Users\94285\Desktop\TestPlatform\node_modules\.stats-serve.json: Unexpected token e in JSON at position
          30496799
          at JSON.parse ( )
          at C:\Program Files\nodejs\node_cache\node_modules\@vue\cli\node_modules\jsonfile\index.js:33:18
          at C:\Program Files\nodejs\node_cache\node_modules\@vue\cli\node_modules\graceful-fs\graceful-fs.js:123:16
          at FSReqCallback.readFileAfterClose [as oncomplete] (internal/fs/read_file_context.js:63:3)
          (Use `node --trace-warnings ...` to show where the warning was created)
          (node:18780) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by
          throwing inside of an async function without a catch block, or by rejecting a promise which was not handled
          with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag
          `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode).
          (rejection id: 1)
          (node:18780) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future,
          promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
          (node:18780) UnhandledPromiseRejectionWarning: SyntaxError:
          C:\Users\94285\Desktop\TestPlatform\node_modules\.stats-serve.json: Unexpected token e in JSON at position
          30496799

        </p>
      </div>
    </div>

    <div class="right">

      <div class="top">

        <a-popconfirm
          title="确定要取消测试吗?"
          ok-text="Yes"
          cancel-text="No"
          @confirm="cancel"
          @cancel=""
        >
          <a-button class="btn" @click="" danger>取消测试</a-button>

        </a-popconfirm>

        <div id="timeBar">
          <vue3-flip-countdown
            :labelColor="'#517661'"
            :deadlineDate="timer"
            :mainColor="'white'"
            :secondFlipColor="'white'"
            :countdownSize="'30px'"
            :mainFlipBackgroundColor="'#517661'"
            :secondFlipBackgroundColor="'#517661'"
            :showLabels="false"
            :showDays="false"
            @timeElapsed="timeOut"/>
        </div>
      </div>

      <div class="video">
        视频
      </div>

    </div>


  </div>
</template>


<script>
import bus from 'vue3-eventbus'

export default {
  name: 'Running',
  components: {},
  data () {
    return {
      allTime: 100,
      timer: ''
    }
  },
  methods: {
    timeOut () {
      this.$router.push('/home/result')
    },
    getTime () {
      this.timer = new Date()
      this.timer.setMinutes(this.timer.getMinutes() + this.allTime)
      console.log(this.timer)
    },
    cancel(){
      this.$router.push('/home/fun')
    }
  },
  created () {
    this.getTime()
  },
}
</script>

<style scoped>

.run {
  width: 100%;
  float: left;
}

.left {
  /*height: 100%;*/
  width: 70%;
  /*border: #42b983 2px solid;*/
  float: left;
  height: auto;
  margin-left: 5px;
}


.coverage {
  /*border: #42b983 2px solid;*/
  background-color: #8cb2d4;
  margin-bottom: 10px;
  height: 430px;
  width: 100%;
  float: left;
}

.command {
  /*border: #42b983 2px solid;*/
  height: 430px;
  float: left;
  width: 100%;
  background-color: #2d2d2d;
}

.command p {
  color: white;
  float: left;
  margin-left: 15px;
  margin-top: 10px;
}

.right {
  /*height: 100%;*/
  width: 29%;
  /*border: #42b983 2px solid;*/
  float: right;
  height: 100%;
  margin-right: 5px;
}

.top {
  border-bottom: #42b983 2px dashed;
  height: 10%;
  width: 100%;
  float: left;
  padding: 10px;
  margin-bottom: 20px;
}

.video {
  height: 780px;
  width: 100%;
  background-color: #7d9787;
  float: left;
}

.btn {
  float: right;
  /*height: 30px;*/
  /*width: 80px;*/
  /*font-size: 15px;*/
  font-weight: bold;
  margin-top: 10px;
  margin-right: 10px;
}

#timeBar {
  font-size: 20px;
  float: left;
  margin-top: 5px;
  /*margin-right: 10px;*/
}

.top h1 {
  margin-top: 5px;
  float: left;
  font-size: 15px;
  font-style: oblique;
  color: #7d9787;
  margin-left: 20px;
}

</style>
