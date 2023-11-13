import microApp from '@micro-zoe/micro-app';
// lazy和Suspense不支持服务端渲染需要使用@loadable/component
// import loadable from '@loadable/component'
// https://blog.csdn.net/u010821983/article/details/121283039
import React, { FC, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, RouteProps } from 'react-router-dom';
import Loading from '@/components/loading';
import NotFound from '@/components/not-found';
import envConfig from '@config';

const Home = React.lazy(() => import('@/pages/demo'));
const MyPage1 = React.lazy(() => import('@/pages/my-page1'));

microApp.start({
  lifeCycles: {
    created() {
      console.log('created');
    },
    beforemount() {
      console.log('beforemount');
    },
    mounted() {
      console.log('mounted');
    },
    unmount() {
      console.log('unmount');
    },
    error() {
      console.log('error');
    },
  },
});

const routeList: RouteProps[] = [
  {
    path: '/demo/1',
    element: <MyPage1></MyPage1>,
  },
  {
    path: '/demo/:id',
    element: <Home></Home>,
  },
];

const RouteFc: FC = () => {
  return (
    <Router basename={envConfig.basename}>
      <Suspense fallback={<Loading />}>
        <Routes>
          {routeList.map((route) => {
            const { path, element } = route;
            return <Route key={`${path}`} path={`${path}`} element={element} />;
          })}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default RouteFc;
