// lazy和Suspense不支持服务端渲染需要使用@loadable/component
// import loadable from '@loadable/component'
// https://blog.csdn.net/u010821983/article/details/121283039
import React, { FC, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, RouteProps } from 'react-router-dom';
import Loading from '@components/loading';
import NotFound from '@components/not-found';
import envConfig from '@config';

const Home = React.lazy(() => import('@pages/demo'));
const IconList = React.lazy(() => import('@pages/icon-list'));

const routeList: RouteProps[] = [
  {
    path: '/demo/:id',
    element: <Home></Home>,
  },
  {
    path: '/icon-list',
    element: <IconList></IconList>,
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
