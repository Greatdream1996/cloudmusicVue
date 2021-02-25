import Vue from 'vue'
import VueRouter from 'vue-router'
import Video from '@/views/DiscoverMusic/Video'
import Firend from '@/views/DiscoverMusic/Firend'
import Live from '@/views/DiscoverMusic/Live'
import PrivateFm from '@/views/DiscoverMusic/PrivateFm'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Video',
  component: Video
},
{
  path: '/video',
  name: 'Video',
  component: Video
},
{
  path: '/firend',
  name: 'Firend',
  component: Firend
},
{
  path: '/live',
  name: 'Live',
  component: Live
},
{
  path: '/privateFm',
  name: 'PrivateFm',
  component: PrivateFm
}
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
