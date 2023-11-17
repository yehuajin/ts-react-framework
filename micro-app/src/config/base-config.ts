export default {
  /**
   * 需要同步更改:
   * template/prod.html和template/prod.html中favicon.ico路径
   * config/webpack.production.js:{output: {publicPath}}
   * config/webpack.development.js:{devServer: {contentBase}}
   */
  basename: '/assets',
  // 接口url前缀，src/utils/http.ts文件需要
  baseURL: '/',
};
