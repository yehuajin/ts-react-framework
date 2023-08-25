import http from '@/utils/http';

/**
 * TODO 记录日志
 * @param {*} params
 */
export const saveLog = (params: unknown): Promise<void> => {
  return http.request({
    method: 'post',
    url: ``,
    data: params,
  });
};
