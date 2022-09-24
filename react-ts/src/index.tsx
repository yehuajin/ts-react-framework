import React from 'react';
import { createRoot } from 'react-dom/client';
import '@assets/css/common.scss';
// import bg from '@assets/images/no-img.png';
// icon字体样式
import '@assets/font/icon-fonts/icon.css';
import App from '@pages/App';
import 'core-js';
// import env from '@config';
// console.log(env);
// import style from './index.module.scss';

const container: Element = document.getElementById('app') as Element;
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
