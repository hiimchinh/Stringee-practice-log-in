<template>
  <div>
    <b-nav pills>
      <b-nav-item><router-link to="/">Home</router-link></b-nav-item>
      <b-nav-item><router-link to="login">Login</router-link></b-nav-item>
      <b-nav-item>Sign Up</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style scoped>

</style>
