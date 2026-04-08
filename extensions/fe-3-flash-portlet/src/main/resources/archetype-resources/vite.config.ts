// @ts-ignore
import { input } from './kh.config';
// @ts-ignore
import { getProductionConfig } from "../../cw-frontend/vite_config";
// @ts-ignore
import { version } from "./package.json"
import { defineConfig, UserConfig } from 'vite'

const prodConfig = getProductionConfig({
  projectDir: __dirname,
  publishPath: '/o/${artifactId}',
  input,
  version,
});

export default defineConfig(prodConfig as UserConfig);
