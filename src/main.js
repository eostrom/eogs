// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import 'normalize.css'
import '~/assets/codearts.css'

import ArtsGrid from '~/layouts/ArtsGrid.vue'
import CodeGrid from './layouts/CodeGrid'

export default function(Vue, {head}) {
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
    key: 'twitter:card',
    name: 'twitter:card',
    content: 'summary'
  })

  head.meta.push({
    key: 'twitter:site',
    name: 'twitter:site',
    content: '@erikostrom'
  })

  head.meta.push({
    key: 'twitter:title',
    name: 'twitter:title',
    content: 'code|arts - Erik Ostrom'
  })

  head.meta.push({
    key: 'og:image',
    name: 'og:image',
    content: 'https://www.erikostrom.com/images/masked-accordion.png'
  })
}
