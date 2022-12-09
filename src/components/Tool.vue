/**
* @author ltj
* @since  2022/11/26 18:50
*/


<template>
  <div class="tool">
    <div class="body">
      <div class="list">

        <div v-for="tool in toolList" class="item" :class="{check:checkId===tool.id}" @click="changeTool(tool.id)">
          <p>App Name: {{ tool.name }}</p>
          <p>Source Code: {{ tool.link }}</p>
          <p>Current Used Version: {{ tool.version }}</p>
          <p>ELOC: {{ tool.ELOC }}</p>
          <p>Instruction: {{ tool.instruction }}</p>
          <p>Activity: {{ tool.activity }}</p>
        </div>
      </div>

      <div class="pageBox">
        <a-pagination v-model:current="toolPage" simple :total="totalPage" id="page"/>
      </div>
    </div>

    <div class="bottom">
      <a-button id="two" class="btn" @click="next">继续</a-button>
      <a-button id="one" class="btn" @click="back">返回</a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tool',
  emits: ['next', 'back', 'two'],
  data () {
    return {
      toolList: [],
      toolPage: 1,
      totalPage: 1,
      checkId: '',
    }
  },
  methods: {
    reset () {
      this.toolList = [
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
        this.$message.info('请选择需要使用的工具')
      } else {
        this.$emit('two', { toolId: this.checkId })
        this.$emit('next')
      }
    },
    back () {
      this.$emit('back')
    },
    changeTool (id) {
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
  height: 200px;
  width: 520px;
  float: left;
  margin-left: 100px;
  margin-top: 30px;
  border-radius: 20px;
  font-size: 15px;
  box-shadow: 1px 1px 5px #acacac;
  padding: 20px 0;
}

.check {
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
