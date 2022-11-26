/**
* @author ltj
* @since  2022/11/23 23:21
*/

<template>
  <div class="run">

    <div class="left">
      <div class="top">
        倒计时 & 取消
      </div>

      <div class="coverage">
        覆盖率
      </div>

      <div class="command">
        命令行
      </div>
    </div>

    <div class="right">
      视频
    </div>


  </div>
</template>

<script>
export default {
  name: 'Running'
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
  height: 100%;
  margin-left: 5px;
}

.top {
  border: #42b983 2px solid;
  height: 10%;
}

.coverage {
  border: #42b983 2px solid;
  height: 45%;
}

.command {
  border: #42b983 2px solid;
  height: 45%;
}

.right {
  /*height: 100%;*/
  width: 29%;
  border: #42b983 2px solid;
  float: right;
  height: 100%;
  margin-right: 5px;
}


</style>
