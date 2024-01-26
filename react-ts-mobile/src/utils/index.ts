import envConfig from '@config';

/**
 * window.location跳转处理
 */
export function windowLocation(url: string): void {
  window.location.href = `${envConfig.basename}${url}`;
}
