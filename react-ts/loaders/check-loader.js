
const chalk = require('chalk');

module.exports = function (content, map) {
  const reg = /import {(.*?)(message|modal|notification){1}(.*?)} from 'antd'/;
  // console.log(content, 'loader-content', map, 'loader-map');
  if (reg.test(content)) {
    console.log(chalk.red.bold(`${map.sources[0]} antd中导入message|modal|notification会存在兼容性问题`));
  }
  return content;
}
