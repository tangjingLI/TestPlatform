/**
* @author ltj
* @since  2022/11/26 17:22
*/


<template>
  <div class="fun">

    <div class="btn">
      <a-button id="one" @click="toUpload">上传文件</a-button>
      <a-button id="two" @click="toTest">测试文件</a-button>
    </div>


  </div>
</template>

<script>
export default {
  name: 'fun',
  data () {
    return {}
  },
  methods: {
    toTest () {
      this.$router.push('/home/choice')
    },
    toUpload () {

    }
  }
}
</script>

<style scoped>

.path {
  text-align: center;
}

.btn {
  padding-top: 200px;
}

#one {
  height: 200px;
  width: 400px;
  background-color: #67b3f6;
  color: white;
  border: 1px solid #67b3f6;
  border-radius: 70px;
  margin-right: 100px;
  font-size: 30px;
  box-shadow: 2px 2px 10px #939393;
}

#two {
  height: 200px;
  width: 400px;
  background-color: #75d0a9;
  color: white;
  border: 1px solid #75d0a9;
  border-radius: 70px;
  margin-left: 100px;
  font-size: 30px;
  box-shadow: 2px 2px 10px #939393;
}

</style>
