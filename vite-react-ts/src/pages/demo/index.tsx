import style from './index.module.scss';
import React, { FC } from 'react';
import { historyPush } from '@utils/index';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from 'antd';
import { ReactSVG } from 'react-svg';
import reactImg from '@assets/svg/react.svg';

const Home: FC = () => {
  const navigate = useNavigate();
  const param = useParams();
  console.log(param);

  return (
    <div className={`${style.color} center`}>
      home
      <Button type="primary" onClick={() => historyPush(navigate, '/icon-list')}>
        icon-list
      </Button>
      <ReactSVG src={reactImg}></ReactSVG>
    </div>
  );
};

export default Home;
