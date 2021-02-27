import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Video from '@/views/DiscoverMusic/Video'
import Firend from '@/views/DiscoverMusic/Firend'
import Live from '@/views/DiscoverMusic/Live'
import PrivateFm from '@/views/DiscoverMusic/PrivateFm'
import Discover from '@/views/DiscoverMusic/Discover'
import Login from '@/components/common/Login'
import Songdetails from '@/views/Page/Songdetails'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/login'
},
{
  path: '/login',
  name: 'Login',
  component: Login
},
{
  path: '/home',
  name: 'Home',
  component: Home,
  redirect: '/discover',
  children: [
    {
      path: '/video',
      name: 'Video',
      component: Video
    },
    {
      path: '/discover',
      name: 'Discover',
      component: Discover
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
    },
    {
      path: '/songdetails/:id',
      name: 'Songdetails',
      component: Songdetails
    }
  ]
}
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
