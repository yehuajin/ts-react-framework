import style from './index.module.scss';
import React, { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import reactImg from '@assets/svg/react.svg';

const Home: FC = () => {
  const navigate = useNavigate();
  const param = useParams();
  console.log(param);

  return (
    <div onClick={() => navigate('/icon-list')} className={`${style.color} center`}>
      home
      <ReactSVG src={reactImg}></ReactSVG>
    </div>
  );
};

export default Home;
