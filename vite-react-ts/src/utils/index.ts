/**
 * window.location跳转处理
 */
export function windowLocation(url: string): void {
  window.location.href = `${import.meta.env.VITE_BASE_NAME}${url}`;
}
