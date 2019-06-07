<template>
  <div>
    <h1>Welcome {{msg}}</h1>
    <router-link to="/"></router-link>
  </div>

</template>

<script>
    export default {
      props: {
        email:String
        },
      name: "Home",
    }

</script>

<style scoped>

</style>
