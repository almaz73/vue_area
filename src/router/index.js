import Vue from 'vue'
import Router from 'vue-router'
import MapCalls from '@/components/map/MapCalls'
import Second from '@/components/map/Second'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MapCalls',
      component: MapCalls
    },
    {
      path: '/Second',
      name: 'Second',
      component: Second
    }
  ]
})
