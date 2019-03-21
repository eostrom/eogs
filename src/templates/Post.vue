<template>
  <code-grid class="post">
    <h1>{{ $page.post.title }}</h1>

    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="body" v-html="$page.post.content"></div>
  </code-grid>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    content
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    }
  }
}
</script>

<style scoped>
.body {
  text-align: left;
}
</style>
