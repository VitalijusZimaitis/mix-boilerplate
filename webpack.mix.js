const mix = require('laravel-mix');

if (!mix.inProduction()) {
  mix.webpackConfig({
    devtool: 'source-map'
  })
    .sourceMaps()
}

mix
  .setPublicPath(`public`)
  .setResourceRoot('')
  .ts('./resources/scripts/app.ts', 'js')
  .sass('./resources/sass/app.scss', 'css')
  .options({
    postCss: [
      require('autoprefixer')({
        browsers: ['> 0%'],
        grid: true,
        cascade: false
      })
    ]
  });