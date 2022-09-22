import { defineConfig } from "vite"; // 为了获取类型提示
import react from "@vitejs/plugin-react";
import path from "path";
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  console.log(command, mode);
  const baseConfig = {
    base: "./",
    plugins: [
      react(),
      legacy({
        targets: ['defaults', 'not IE 11'],
        // targets: ["ie >= 11"],
        // additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./src/styles/variables.scss";`,
        },
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
      server: {
        // 是否自动打开浏览器
        open: true,
        // 服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
        host: '0.0.0.0',
        // 服务器端口号
        port: 8081,
        // 设为 true ,若端口已被占用则会直接退出，而不是尝试下一个可用端口
        strictPort: false,
        // 为开发服务器配置 CORS
        cors: true,
        // 设置为 true 强制使依赖预构建
        force: true,
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
              react: ['react', 'react-dom', 'react-router-dom', 'react-router'],
              antd: ['antd'],
            },
          },
        },
        chunkSizeWarningLimit: 500,
      },
    }
  }
});
