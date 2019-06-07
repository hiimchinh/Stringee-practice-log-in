import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LoginContent from "../components/LoginContent";
import Home from "../components/Home";


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
        component: HelloWorld
    },
    {
      path: '/login',
      component: LoginContent
    },
    {
      path: '/home',
      component: Home
    }

  ],
  mode: 'history'
})
