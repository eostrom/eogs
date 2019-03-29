<template>
  <component :is="gridComponent" class="post">
    <h1>{{ $page.post.title }}</h1>

    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="body" v-html="$page.post.content"></div>
  </component>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    content
    side
  }
}
</page-query>

<script>
import CodeGrid from '../layouts/CodeGrid'
import ArtsGrid from '../layouts/ArtsGrid'

export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    }
  },

  computed: {
    gridComponent() {
      return {
        code: CodeGrid,
        arts: ArtsGrid
      }[this.$page.post.side]
    }
  }
}
</script>

<style scoped>
.body {
  text-align: left;
}
</style>
