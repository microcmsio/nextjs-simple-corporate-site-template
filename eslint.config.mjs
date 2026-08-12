import nextConfig from 'eslint-config-next/core-web-vitals';
import prettierConfig from 'eslint-config-prettier';

const eslintConfig = [...nextConfig, prettierConfig];

export default eslintConfig;
