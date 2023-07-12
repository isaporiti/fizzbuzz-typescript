const { build } = require('esbuild');

build({
  entryPoints: ['./src/index.ts'],
  outbase: './src',
  outdir: './dist' ,
  platform: 'node',
  bundle: true,
  minify: true
})