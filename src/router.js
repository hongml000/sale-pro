
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: () => import('@/views/index.vue'),
      children: [
        {
          path: '/store',
          name: 'Store',
          component: () => import('@/views/store/index.vue')
        }
      ]
    }
  ]
});

