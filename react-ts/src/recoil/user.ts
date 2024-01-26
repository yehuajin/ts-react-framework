import { atom } from 'recoil';

// 解决头部显示问题
const userInfo = atom<any>({
  key: 'userInfo', // unique ID (with respect to other atoms/selectors)
  default: {} as any, // default value (aka initial value)
});

export { userInfo };
