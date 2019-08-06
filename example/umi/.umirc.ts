import { IConfig } from 'umi-types';

const main = '#222629';
const main_dark = '#191C1E';
const main_light = '#2E3338';
const text = '#ddd';
const text_light = '#fff';
const text_dark = '#222';
const text_disabled = '#999';

const primary = '#26547C';
const info = '#FFD166';
const success = '#06D6A0';
const error = '#EF476F';
const warn = '#E55934';

// ref: https://umijs.org/config/
const config: IConfig = {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: false,
      dynamicImport: false,
      title: 'umi',
      dll: false,

      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
  theme: '../../dark.js'
}

export default config;
