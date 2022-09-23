import { defineConfig } from "vite"; // 为了获取类型提示
import react from "@vitejs/plugin-react";
import path from "path";
import legacy from "@vitejs/plugin-legacy";
// import vitePluginImp from 'vite-plugin-imp'
import lessToJs from 'less-vars-to-js';
import eslintPlugin from 'vite-plugin-eslint';
import fs from 'fs';
import { join } from 'path';
// import {visualizer} from 'rollup-plugin-visualizer';

const themeVariables = lessToJs(fs.readFileSync(join(__dirname, './src/assets/css/theme.less'), 'utf8'));

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const baseConfig = {
    base: "/assets/",
    plugins: [
      react({
        babel: {
          babelrc: true,
        }
      }),
      eslintPlugin({
        lintOnStart: true,
        include: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx', './src/**/*.vue', './src/**/*.svelte'],
      }),
      legacy({
        targets: ['defaults', 'not IE 11'],
        // targets: ["ie >= 11"],
        // additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
      }),
      // vitePluginImp({
      //   libList: [
      //     {
      //       libName: "antd",
      //       style: (name: string) => `antd/es/${name}/style`,
      //     },
      //   ],
      // })
      // visualizer(),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@assets": path.resolve(__dirname, "./src/assets"),
        "@pages": path.resolve(__dirname, "./src/pages"),
        "@utils": path.resolve(__dirname, "./src/utils"),
        "@components": path.resolve(__dirname, "./src/components"),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./src/assets/css/variable.scss";`,
        },
        less:{
          javascriptEnabled: true,  //注意，这一句是在less对象中，写在外边不起作用
          modifyVars: themeVariables,
        }
      },
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'], // 默认值
    define: {
      __MODE__: true, // 打包可以被静态替换的变量, 需要在global.d.ts中声明
    },
  };
  if (command === 'serve') {
    return {
      ...baseConfig,
      optimizeDeps: {
        // 设置为 true 强制使依赖预构建
        // force: true,
      },
      server: {
        // 是否自动打开浏览器
        open: true,
        // 服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
        host: '0.0.0.0',
        // 服务器端口号
        port: 8082,
        // 设为 true ,若端口已被占用则会直接退出，而不是尝试下一个可用端口
        strictPort: false,
        // 为开发服务器配置 CORS
        cors: true,
        // 代理
        proxy: {
          '/api':
            {
              target: 'http://xxx.xxx.xx',
              changeOrigin: true,
              // rewrite:
              //   (path) => path.replace(/^/api/, '')
            }
        }
        ,
      }
    }
  } else {
    // command === 'build'
    return {
      ...baseConfig,
      build: {
        // sourcemap: true,
        // manifest: true,
        rollupOptions: {
          output: {
            manualChunks: {
              react: ['react', 'react-dom', 'react-router-dom'],
              antd: ['antd'],
            },
          },
        },
        chunkSizeWarningLimit: 500,
      },
    }
  }
});
