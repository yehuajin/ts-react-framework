import style from './index.module.scss';
import React, { FC, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Counter from '../../svelte/Counter.svelte';
import { ReactSVG } from 'react-svg';
import reactImg from '@assets/svg/react.svg';

const Home: FC = () => {
  const navigate = useNavigate();
  const param = useParams();
  console.log(param);
  useEffect(() => {
    const a = '111111111';
    function fn() {
      console.log(a);
    }
    // eslint-disable-next-line no-new
    new Counter({ target: document.getElementById('counter'), props: { a, click: fn } });
  }, []);
  return (
    <>
      <div onClick={() => historyPush(navigate, '/icon-list')} className={`${style.color} center`}>
        home
        <ReactSVG src={reactImg}></ReactSVG>
      </div>
      <div id="counter" />
    </>
  );
};

export default Home;
