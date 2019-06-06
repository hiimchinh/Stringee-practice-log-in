<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Header/>
    <b-container class="bv-example-row">
      <b-row >
        <b-col sm="6" offset="3">
          <LoginContent/>
        </b-col>
      </b-row>
    </b-container>
    <Footer/>
    <router-view/>
  </div>
</template>

<script>
  import Header from './components/Header';
  import Footer from './components/Footer';
  import LoginContent from './components/LoginContent';
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    LoginContent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
