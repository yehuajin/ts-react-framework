import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '@pages/App';
// icon字体样式
import 'core-js';
import 'dayjs/locale/zh-cn';
import locale from 'antd-mobile/es/locales/zh-CN';
import { ConfigProvider } from 'antd-mobile';
import 'antd-mobile/es/global';
import '@assets/css/theme.css';
import '@assets/css/common.scss';

const container: Element = document.getElementById('app') as Element;
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  // <React.StrictMode>
  <ConfigProvider locale={locale}>
    <App />
  </ConfigProvider>,
  // </React.StrictMode>,
);
