import React, { FC } from 'react';
import RoutesConfig from '@/routes/index';
// import { RecoilRoot } from 'recoil';

const App: FC<Record<string, never>> = () => {
  // 静态变量__MODE__，环境变量import.meta.env.VITE_BASE_API
  if (__MODE__) {
    console.log(111, import.meta.env.VITE_BASE_API);
  }
  return (
    // <RecoilRoot>
    <RoutesConfig />
    // </RecoilRoot>
  );
};

export default App;
