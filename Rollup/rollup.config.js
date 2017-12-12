import babel    from 'rollup-plugin-babel';
import uglify   from 'rollup-plugin-uglify';
import eslint   from 'rollup-plugin-eslint';
// import resolve  from 'rollup-plugin-node-resolve';
// import commonjs from 'rollup-plugin-commonjs';

let is_build = process.env.BUILD || false;

export default {
  // 입력
  input: 'src/main.js',
  // 출력
  output: {
    file: `dist/bundle${ is_build ? '.min' : '' }.js`,
    format: 'iife',
    sourcemap: is_build ? false : 'inline',
  },
  // 외부 모듈
  external: [
    'jquery'
  ],
  // 전역 모듈
  globals: {
    jquery: '$'
  },
  // 플러그인
  plugins: [
    // resolve({
    //   esnext: true,
    //   main: true,
    //   browser: true,
    // }),
    // commonjs(),
    eslint({
      include: './src/**'
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    (is_build && uglify())
  ]
};