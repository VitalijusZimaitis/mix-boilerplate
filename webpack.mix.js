const mix = require('laravel-mix');
require('dotenv').config();

if (!mix.inProduction()) {
  mix.webpackConfig({
    devtool: 'source-map'
  })
    .sourceMaps()
}

mix
  .setPublicPath(`${process.env.COMPILED_ASSETS_FOLDER}`)
  .ts('./resources/scripts/app.ts', 'js')
  .sass('./resources/sass/app.scss', 'css')
  .setResourceRoot(`${process.env.APP_URL}/${process.env.COMPILED_ASSETS_FOLDER}/`)
  .options({
    postCss: [
      require('autoprefixer')({
        browsers: ['> 0%'],
        grid: true,
        cascade: false
      })
    ]
  });