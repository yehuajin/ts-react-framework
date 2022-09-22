import React, { FC, ReactNode } from 'react';
import style from './index.module.scss';

interface PropsObj {
  children?: ReactNode;
}
const Loading: FC<PropsObj> = () => {
  return <div className={style.loading}>数据加载中...</div>;
};

export default Loading;
