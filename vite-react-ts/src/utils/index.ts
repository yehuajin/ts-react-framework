import { NavigateFunction } from 'react-router-dom';

/**
 * 对url进行拼接
 * @param {*} url
 * @returns
 */
export function handleUrl(url: string): string {
  return url;
}
/**
 * 获取带basename的url
 */
export function getBaseUrl(url: string): string {
  return `${import.meta.env.VITE_BASE_NAME}${handleUrl(url)}`;
}

/**
 * window.location跳转处理
 */
export function windowLocation(url: string): void {
  window.location.href = `${getBaseUrl(url)}`;
}

/**
 * 打开窗口
 */
export function windowOpen(url: string, blank = '_blank'): void {
  window.open(`${getBaseUrl(url)}`, blank);
}

/**
 *
 * @param {*} url // 跳转路由
 */
export function historyPush(navigate: NavigateFunction, url: string): void {
  navigate(handleUrl(url));
}

/**
 *
 * @param {*} url // 跳转路由
 */
export function linkUrl(url: string): string {
  return handleUrl(url);
}
