import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/comics',
      name: 'Comics',
      // component: Comics
      // 用import寫法為非同步載入（webpack code spliting) 載入哪一頁才會把資源載進來
      component: () => import('@/pages/Comics')
    },
    {
      path: '/comics/:id',
      name: 'ComicDetail',
      component: () => import('@/pages/ComicDetail')
    },
    {
      path: '/comics/:id/chapter/:cid',
      name: 'ComicChapter',
      component: () => import('@/pages/ComicChapter')
    }
  ]
})
