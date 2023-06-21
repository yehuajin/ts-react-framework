const chalk = require("chalk");
class CheckPlugin {
  constructor() {
    console.log(chalk.red.bold(`check-plugin`));
  }

  apply (compiler, options) {
    compiler.hooks.run.tap('CheckPlugin', (compiler) => {
      console.log(chalk.red.bold(`check-plugin`));
      console.log(chalk.red.bold(JSON.stringify(Object.keys(compiler))));
    });
    // compiler.hooks.emit.tap('CheckPlugin', (compilation) => {
    //   const extensions = ['jsx', 'js', 'ts', 'tsx'];
    //   // console.log(chalk.red.bold(JSON.stringify(Object.keys(compilation))));
    //   compilation.hooks.buildModule.tap(
    //     'CheckPlugin',
    //     (module) => {
    //       console.log(chalk.red.bold(JSON.stringify(Object.keys(module))));
    //     }
    //   );
    //   const assets = Object.keys(compilation.assets).filter((assetPath) => {
    //     const splitted = assetPath.split('.');
    //     const extension = splitted[splitted.length - 1];
    //     return extensions.includes(extension) && !assetPath.includes('node_modules');
    //   });
    //   let a = false;
    //   assets.forEach((asset) => {
    //     const source = compilation.assets[asset].source();
    //     if (!a) {
    //       // console.log(chalk.red.bold(`CheckPlugin`));
    //       // console.log(chalk.red.bold(source));
    //       a = true;
    //     }
    //     const reg = /import {(.*?)(message|modal|notification){1}(.*?)} from 'antd'/;
    //     if (reg.test(source)) {
    //       console.log(chalk.red.bold(`${asset} 从antd中导入message|modal|notification会存在兼容性问题`));
    //     }
    //     compilation.assets[asset] = {
    //       source () {
    //         return source;
    //       },
    //       size () {
    //         return source.length
    //       }
    //     }
    //   });
    // });
  }
}

module.exports = CheckPlugin;
