/**
* @author ltj
* @since  2022/11/26 18:31
*/


<template>
  <div>
    <div class="body">
      <div class="item">
        <h1 style="margin-bottom: 30px">选择测试运行时间（分钟）</h1>
        <a-slider :min="0" :max="120" :value="time" @change="handleChange"/>
      </div>

      <div class="item">
        <h1>选择统计覆盖率的方式</h1>
      </div>

      <div class="item">
        <h1>选择bug的过滤粒度</h1>
      </div>

    </div>

    <div class="bottom">
      <a-button id="two" class="btn" @click="next">完成</a-button>
      <a-button id="one" class="btn" @click="back">返回</a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Time',
  emits: ['four', 'finish', 'back'],
  data () {
    return {
      time: 30,
    }
  },
  methods: {
    handleChange (value) {
      this.time = value
    },
    next () {
      this.$emit('four', { time: this.time })
      this.$emit('finish')
    },
    back () {
      this.time = 30
      this.$emit('back')
    }
  }
}
</script>

<style scoped>

.body {
  text-align: center;
  height: 750px;
  padding: 10px 0;
}

.item {
  width: 70%;
  margin: 0 auto;
  padding: 20px;
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
