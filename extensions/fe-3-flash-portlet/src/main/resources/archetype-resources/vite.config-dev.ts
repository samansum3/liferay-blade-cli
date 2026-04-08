// @ts-ignore
import { getDevelopmentConfig } from "../../cw-frontend/vite_config";
import { input } from './kh.config';
import { defineConfig } from 'vite';

const devConfig = getDevelopmentConfig({
  projectDir: __dirname,
  input,
});

export default defineConfig(devConfig)
