// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import 'normalize.css'
import '~/assets/codearts.css'

import ArtsGrid from '~/layouts/ArtsGrid.vue'
import CodeGrid from "./layouts/CodeGrid"

export default function (Vue, {router, head, isClient}) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('ArtsGrid', ArtsGrid)
  Vue.component('CodeGrid', CodeGrid)

  const fonts = ['Noto Serif', 'Roboto Mono', 'Roboto']
  const fontQuery = fonts.join('|').replace(' ', '+')

  head.link.push({
    rel: 'stylesheet',
    href: `https://fonts.googleapis.com/css?family=${fontQuery}`
  })

  head.meta.push({
    key: 'og:image',
    name: 'og:image',
    content: '/images/masked-accordion.png'
  })
}
