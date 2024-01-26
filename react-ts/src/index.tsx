import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '@pages/App';
import '@assets/css/common.scss';
import 'core-js';
// import env from '@config';
// console.log(env);
// import style from './index.module.scss';
import 'dayjs/locale/zh-cn';
import locale from 'antd/locale/zh_CN';
import { ConfigProvider, App as AntdApp } from 'antd';
import { StyleProvider, legacyLogicalPropertiesTransformer } from '@ant-design/cssinjs';
import { theme } from '@utils/theme';
import StaticFunction from '@components/StaticFunction';

const container: Element = document.getElementById('app') as Element;
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  // <React.StrictMode>
  <ConfigProvider theme={theme} locale={locale}>
    {/* 降级样式处理兼容低版本浏览器 */}
    <StyleProvider hashPriority="high" transformers={[legacyLogicalPropertiesTransformer]}>
      <AntdApp>
        <StaticFunction>
          <App />
        </StaticFunction>
      </AntdApp>
    </StyleProvider>
  </ConfigProvider>,
  // </React.StrictMode>,
);
