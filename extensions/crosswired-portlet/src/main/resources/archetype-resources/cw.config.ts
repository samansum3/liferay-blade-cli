// @ts-ignore
import { getDevelopmentConfig, getProductionConfig, sourcePath } from "../cw-frontend/vite_config";
import { InputOption } from "rollup";
import { join, resolve } from "path";

const sourceDir = resolve(__dirname, sourcePath);

const input: InputOption = {
    main: join(sourceDir, 'index.html'),
}

const prodConfig = getProductionConfig({
  projectDir: __dirname,
  publishPath: '/o/${artifactId}',
  input,
});
const devConfig = getDevelopmentConfig({
  projectDir: __dirname,
  input,
});

export { prodConfig, devConfig }
