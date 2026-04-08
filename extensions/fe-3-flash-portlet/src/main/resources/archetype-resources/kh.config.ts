// @ts-ignore
import { getDevelopmentConfig, getProductionConfig, sourcePath } from "../cw-frontend/vite_config";
// @ts-ignore
import { version } from "./package.json"
import { InputOption } from "rollup";
import { join, resolve } from "path";

const sourceDir = resolve(__dirname, sourcePath);

const input: InputOption = {
  ${className}: join(sourceDir, 'portlets/index.html'),
}

const prodConfig = getProductionConfig({
  projectDir: __dirname,
  publishPath: '/o/${artifactId}',
  input,
  version,
});
const devConfig = getDevelopmentConfig({
  projectDir: __dirname,
  input,
});

export { prodConfig, devConfig }
