// 增加环境变量类型

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
  readonly VITE_BASE_NAME: string;
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}