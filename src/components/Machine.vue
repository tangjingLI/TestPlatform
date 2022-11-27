/**
* @author ltj
* @since  2022/11/26 18:51
*/


<template>
  <div>
    <div class="body">
      machine
    </div>

    <div class="bottom">
      <a-button id="two" class="btn" @click="next">继续</a-button>
      <a-button id="one" class="btn" @click="back">返回</a-button>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Machine',
  emits: ['next', 'back', 'three'],
  data () {
    return {}
  },
  methods: {
    next () {
      this.$emit('three')
      this.$emit('next')
    },
    back () {
      this.$emit('back')
    }
  }
}
</script>

<style scoped>
.body {
  text-align: center;
  height: 450px;
  padding: 30px 0;
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
