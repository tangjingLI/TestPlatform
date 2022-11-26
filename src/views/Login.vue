/**
* @author ltj
* @since  2022/11/20 22:51
*/

<template>
  <div>

    <p @click="go">hihihihihi</p>
  </div>

</template>

<script>
export default {
  name: 'Login',
  data () {
    return {}
  },
  methods: {
    go () {
      this.$router.push('/home')
    }
  }
}
</script>

<style scoped>

</style>
