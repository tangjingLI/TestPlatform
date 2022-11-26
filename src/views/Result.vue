/**
* @author ltj
* @since  2022/11/23 23:21
*/

<template>
  <div class="result">

    <div class="body">

    </div>

    <div class="bottom">
      <a-button class="btn" @click="">返回主页面</a-button>
      <a-button class="btn" @click="">下载log文件</a-button>
      <a-button class="btn" @click="">下载bug记录</a-button>
      <a-button class="btn" @click="">下载运行视频</a-button>

    </div>

  </div>
</template>

<script>
export default {
  name: 'Result'
}
</script>

<style scoped>

.body {
  height: 885px;
}

.bottom {
  height: 60px;
  /*border: #42b983 2px solid;*/
  background-color: #cbe7d9;
  padding-top: 10px;
}

.btn {
  background-color: white;
  color: #7d9787;
  border: 1px solid #7d9787;
  float: right;
  height: 40px;
  width: 150px;
  margin-right: 30px;
  font-weight: bold;
}

</style>
