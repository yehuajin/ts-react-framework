import React, { ReactElement, ReactNode } from 'react';
import { App } from 'antd';
import type { MessageInstance } from 'antd/es/message/interface';
import type { ModalStaticFunctions } from 'antd/es/modal/confirm';
import type { NotificationInstance } from 'antd/es/notification/interface';

/* eslint-disable */
let message: MessageInstance;
let notification: NotificationInstance;
let modal: Omit<ModalStaticFunctions, 'warn'>;
interface PropsObj {
  children?: ReactNode;
}
export default (props: PropsObj): ReactElement | null => {
  const staticFunction = App.useApp();
  console.log(staticFunction);
  message = staticFunction.message;
  modal = staticFunction.modal;
  notification = staticFunction.notification;
  return <>{props.children}</>;
};

export { message, notification, modal };
