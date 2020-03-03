# 安装node.js npm

# 使用创建vue项目
vue create project-name

# 创建路由
安装： npm install --save vue-router
```js
// /src/router.js

import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: () => import('@/views/index.vue'),
      // 如果是在子组件里的router-view，要写在相关父组件下面
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



// src/main.js
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')


// 创建对应组件
// src/views/index.vue
<template>
 <div>
   hello world
 </div>
</template>

<script>
export default {
 name: "HomePage",
 components:{},
 data() {
   return {

   }
 }
}
</script>

// 访问http://localhost:8080/
会显示hello world
```

# 引入element-ui
安装： npm i element-ui -S
```js
// src/main.js
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

```

# 全局样式引入
安装：
npm install stylus stylus-loader --save-dev
vscode: 安装插件stylus

```css
/* src/styles/common.css */
* {
  margin: 0;
  padding: 0;
}

/* 覆盖element样式 */
// 左边栏宽度
$aside-width = 150px;

/* 侧边栏样式 */
.el-aside {
  width: $aside-width !important;
  position: fixed;
  margin-top: 60px;
  font-size: 16px;
  .left-aside {
    height: inherit;
    .el-menu {
      .el-menu-item {
        text-align: left;
      }
    }
  }
}

 /* 新建，src/styles/index.styl */
@import './element-ui-reset.styl'
@import 'common.styl'

```
```js
// src/main.js
import './styles/index.styl';
```


