import style from './index.module.scss';
import React, { FC } from 'react';
import { historyPush } from '@/utils/index';
import { useNavigate, useParams } from 'react-router-dom';

const Home: FC = () => {
  const navigate = useNavigate();
  const param = useParams();
  console.log(param);

  return (
    <div onClick={() => historyPush(navigate, '/icon-list')} className={`${style.color} center`}>
      home
    </div>
  );
};

export default Home;
