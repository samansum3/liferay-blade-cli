// @ts-ignore
import { sourcePath } from "../../cw-frontend/vite_config";
import { InputOption } from "rollup";
import { join, resolve } from "path";

const sourceDir = resolve(__dirname, sourcePath);

export const input: InputOption = {
  ${className}: join(sourceDir, 'portlets/index.html'),
};
