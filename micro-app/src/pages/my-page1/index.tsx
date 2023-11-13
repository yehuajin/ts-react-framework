/** @jsxRuntime classic */
/** @jsx jsxCustomEvent */
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event';
import React from 'react';

export default function MyPage(): React.ReactElement {
  return (
    <div>
      <h1>子应用</h1>
      {/* // name(必传)：应用名称
      // url(必传)：应用地址，会被自动补全为http://localhost:3000/index.html
      // baseroute(可选)：基座应用分配给子应用的基础路由，就是上面的 `/my-page` */}
      <micro-app
        name="app1"
        url="http://localhost:8081"
        baseroute="/assets"
        onCreated={() => console.log('micro-app元素被创建')}
        onBeforemount={() => console.log('即将被渲染')}
        onMounted={() => console.log('已经渲染完成')}
        onUnmount={() => console.log('已经卸载')}
        onError={() => console.log('渲染出错')}
      ></micro-app>
    </div>
  );
}
