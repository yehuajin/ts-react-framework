## 使用技术
前端：React + react-router + axios + TypeScript + Recoil + Hooks + cssnext
后端：BFF Node Koa Serverless  函数计算  OSS

## scripts文件夹下的文件设置权限
chmod -R(递归处理) u(文件属主)+rx(增加读和可执行权限) ./scripts
https://www.cnblogs.com/Berryxiong/p/6193866.html

## cnpm 安装模块可以，但cnpm uninstall 卸载时就不行
这是由于npm和cnpm的全局模块地址不同造成的。
先获取npm全局模块地址 npm config get prefix
再设置cnpm全局模块地址 cnpm config set prefix <npm全局模块地址>

## icon图标使用react-svg，可以改变图标颜色
npm run build-icon
然后访问icon-list路由可以查看所有的svg图片
## 增加css模块化
.module.scss文件进行模块化处理
## 增加css变量,ant css全局变量修改
## 增加静态资源copy(静态资源放在assets文件中)

## 增加recoil做状态管理

## 启动项目
npm run dev


## 子应用跨域请求设置

 devServer: {
  headers: {
    'Access-Control-Allow-Origin': '*',
  }
},

除了前缀父应用的路由要和子应用的路由相同