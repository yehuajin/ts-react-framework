/**
 * 获取带basename的url
 */
export function getBaseUrl(url: string): string {
  return `${import.meta.env.VITE_BASE_NAME}${url}`;
}
