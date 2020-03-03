# error: Unexpected console statement (no-console) 解决办法
修改package.json中的eslintConfig:{} 中的 “rules”:{}，增加一行代码: "no-console":"off"

# 关于el-menu跳转路由问题
参考：https://www.cnblogs.com/luyuefeng/p/8031468.html