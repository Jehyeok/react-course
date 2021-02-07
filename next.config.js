const withSass = require('@zeit/next-sass')
const withCss = require('@zeit/next-css')
const path = require('path')
const withTM = require('next-transpile-modules')([
  'query-string',
  'node-fetch',
  'ant-path-matcher',
])
const withFonts = require('next-fonts')

module.exports = withTM(
  withCss(
    withSass(
      withFonts({
        enableSvg: true,
        webpack(config, options) {
          config.module.rules.push({
            test: /\.graphql$/,
            exclude: /node_modules/,
            use: [
              options.defaultLoaders.babel,
              { loader: 'graphql-let/loader' },
            ],
          })

          config.module.rules.push({
            test: /\.graphqls$/,
            exclude: /node_modules/,
            loader: 'graphql-tag/loader',
          })

          config.resolve.alias['~'] = path.resolve(__dirname)

          return config
        },
        cssLoaderOptions: {
          url: false,
        },
      }),
    ),
  ),
)
