import Vue from 'vue'
import Router from 'vue-router'
import Snake from '@/components/Snake'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'snake',
      component: Snake
    }
  ]
})
