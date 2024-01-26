// import { Button } from 'antd';
import React, { useState, useEffect } from 'react';
import iconList from '@assets/svg.json';

function Icon() {
  const [iconPath, setIconPath] = useState<Record<string, string>>({});
  const dynamicLoadComponent = async (path: string) => {
    const module = await import(/* @vite-ignore */ `../../assets/svg/${path}.svg`);
    setIconPath((val) => {
      // eslint-disable-next-line no-param-reassign
      val[path] = module.default;
      return { ...val };
    });
  };

  useEffect(() => {
    iconList.forEach((icon: string) => {
      dynamicLoadComponent(icon);
    });
  }, []);
  return (
    <div
      style={{
        background: `rgba(0,0,0, 0.2)`,
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <div>icon列表</div>
      <div
        style={{
          display: 'flex',
          width: '100%',
          flexWrap: 'wrap',
        }}
      >
        {iconList.map((icon: string) => {
          return (
            <span
              style={{
                marginRight: '5px',
              }}
              key={icon}
            >
              {icon}
              <br />
              <img src={iconPath[icon]} alt="" />
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Icon;
