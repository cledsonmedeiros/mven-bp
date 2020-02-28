import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      titulo: "Home"
    },
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
]

const router = new VueRouter({
  routes
})

router.beforeResolve((to, from, next) => {
  document.title = `${to.meta.titulo} - ${process.env.VUE_APP_NAME}`;
  next()
})

export default router
