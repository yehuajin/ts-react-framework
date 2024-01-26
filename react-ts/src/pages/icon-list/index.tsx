// import { Button } from 'antd';
import React, { useState, useEffect, FC } from 'react';
import iconFile from '@assets/svg.json';
import base64 from 'base-64';
import utf8 from 'utf8';

const Icon: FC = () => {
  const [iconList, setIconList] = useState<string[]>([]);
  const [iconPath, setIconPath] = useState<Record<string, string>>({});
  const dynamicLoadComponent = async (path: string) => {
    const module = await import(`../../assets/svg/${path}.svg`);
    console.log(module, 1111);
    setIconPath((val) => {
      // eslint-disable-next-line no-param-reassign
      val[path] = module.default;
      return { ...val };
    });
  };

  useEffect(() => {
    let icons = base64.decode(iconFile.replace('data:application/json;base64,', ''));
    icons = utf8.decode(icons);
    const list: string[] = JSON.parse(icons.replace(';', ''));
    setIconList(list);
    list.forEach((icon: string) => {
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
};

export default Icon;
