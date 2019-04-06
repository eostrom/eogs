// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const shiki = require('shiki')
const theme = shiki.loadTheme('./config/Night Owl-color-theme.json')

module.exports = {
  siteName: 'Erik Ostrom',

  transformers: {
    remark: {
      plugins: [['gridsome-plugin-remark-shiki', {theme, skipInline: true}]],

      grayMatter: {
        excerpt: true,
        excerpt_separator: '<!-- READMORE -->'
      }
    }
  },

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Post',
        route: ':side/words/:slug'
      }
    }
  ],

  chainWebpack: config => {
    config.module
      .rule('pug')
      .test(/\.pug$/)
      .use('pug-plain-loader')
      .loader('pug-plain-loader')
  },

  css: {
    loaderOptions: {
      postcss: {
        plugins: [require('postcss-nesting')]
      }
    }
  }
}
