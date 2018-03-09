import Vue from 'vue'
import Router from 'vue-router'
import MapCalls from '@/components/map/MapCalls'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MapCalls',
      component: MapCalls
    }
  ]
})
