/**
* @author ltj
* @since  2022/11/26 16:25
*/

<template>
  <div class="apk">
    <div class="body">
      <div class="list">
        <div v-for="apk in apkList" class="item" :class="{check:checkId===apk.id}" @click="changeApk(apk.id)">
          <p><b>App Name: </b>{{ apk.name }}</p>
          <p><b>Source Code: </b>{{ apk.link }}</p>
          <p><b>Current Used Version: </b>{{ apk.version }}</p>
          <p><b>ELOC: </b>{{ apk.ELOC }}</p>
          <p><b>Instruction: </b>{{ apk.instruction }}</p>
          <p><b>Activity: </b>{{ apk.activity }}</p>
        </div>
      </div>

      <div class="pageBox">
        <a-pagination v-model:current="apkPage" simple :total="totalPage" id="page"/>
      </div>
    </div>

    <div class="bottom">
      <a-button id="two" class="btn" @click="next">继续</a-button>
      <a-button id="one" class="btn" @click="cancel">取消</a-button>
    </div>
  </div>
</template>

<script>
// import { notification } from 'ant-design-vue'

export default {
  name: 'APK',
  emits: ['next', 'one', 'cancel'],
  data () {
    return {
      apkList: [],
      apkPage: 1,
      totalPage: 1,
      checkId: '',
    }
  },
  methods: {
    reset () {
      this.apkList = [
        {
          id: 1,
          name: 'tool1',
          link: 'https://github.com/signalapp/Signal-Android',
          version: '6.3.3',
          ELOC: '174574',
          activity: '904470',
          instruction: '84'
        },
        {
          id: 2,
          name: 'tool1',
          link: 'https://github.com/signalapp/Signal-Android',
          version: '6.3.3',
          ELOC: '174574',
          activity: '904470',
          instruction: '84'
        },
        {
          id: 3,
          name: 'tool1',
          link: 'https://github.com/signalapp/Signal-Android',
          version: '6.3.3',
          ELOC: '174574',
          activity: '904470',
          instruction: '84'
        },
        {
          id: 4,
          name: 'tool1',
          link: 'https://github.com/signalapp/Signal-Android',
          version: '6.3.3',
          ELOC: '174574',
          activity: '904470',
          instruction: '84'
        },
        {
          id: 5,
          name: 'tool1',
          link: 'https://github.com/signalapp/Signal-Android',
          version: '6.3.3',
          ELOC: '174574',
          activity: '904470',
          instruction: '84'
        },

        {
          id: 6,
          name: 'tool1',
          link: 'https://github.com/signalapp/Signal-Android',
          version: '6.3.3',
          ELOC: '174574',
          activity: '904470',
          instruction: '84'
        },
        {
          id: 7,
          name: 'tool1',
          link: 'https://github.com/signalapp/Signal-Android',
          version: '6.3.3',
          ELOC: '174574',
          activity: '904470',
          instruction: '84'
        },
        {
          id: 8,
          name: 'tool1',
          link: 'https://github.com/signalapp/Signal-Android',
          version: '6.3.3',
          ELOC: '174574',
          activity: '904470',
          instruction: '84'
        },
        {
          id: 9,
          name: 'tool1',
          link: 'https://github.com/signalapp/Signal-Android',
          version: '6.3.3',
          ELOC: '174574',
          activity: '904470',
          instruction: '84'
        },
      ]
    },
    next () {
      if (this.checkId === '') {
        this.$message.info('请选择需要测试的APP');
      } else {
        this.$emit('one', { apkId: this.checkId })
        this.$emit('next')
      }
    },
    cancel () {
      this.$emit('cancel')
    },
    changeApk (id) {
      this.checkId = id
    },

  },
  mounted () {
    this.reset()
  }
}
</script>

<style scoped>
.body {
  text-align: center;
  height: 750px;
  /*padding: 30px 0;*/
}

.list {
  /*border: #fa641e 2px solid;*/
  height: 700px;
}

.item {
  background-color: #cbe7d9;
  color: #5d8d71;
  border: 2px solid #8cb49c;
  /*color: #668fc2;*/
  /*border: 2px solid #93b6e2;*/
  height: 200px;
  width: 520px;
  float: left;
  margin-left: 100px;
  margin-top: 30px;
  border-radius: 20px;
  font-size: 17px;
  box-shadow: 1px 1px 5px #acacac;
  padding: 20px 0;
}

.check {
  /*background-color: #93b6e2;*/
  /*color: white;*/
  /*border: none;*/
  background-color: #aeccf1;
  color: #5c84b4;
  border: 2px solid #5c84b4;
}

.item p {
  /*margin-top: 10px;*/
  float: left;
  margin-left: 30px;
}

.pageBox {
  height: 50px;
  /*border: #5b6eea 2px solid;*/
}

#page {
  float: right;
  margin-right: 120px;
  margin-top: 10px;
}

h1 {
  font-size: 20px;
  color: #517661;
}

.bottom {
  height: 60px;
  /*border: #42b983 2px solid;*/
  background-color: #cbe7d9;
  padding-top: 10px;
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
