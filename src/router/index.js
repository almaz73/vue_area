import Vue from 'vue'
import Router from 'vue-router'
import Root from '@/components/map/Root'
import Second from '@/components/map/Second'
import Tables from '@/components/map/Tables'
import Forms from '@/components/map/Forms'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Root',
      component: Root
    },
    {
      path: '/Second',
      name: 'Second',
      component: Second
    },
    {
      path: '/Tables',
      name: 'Tables',
      component: Tables
    },
    {
      path: '/Forms',
      name: 'Forms',
      component: Forms
    }
  ]
})
