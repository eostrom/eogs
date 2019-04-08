<template>
  <component :is="gridComponent" class="post">
    <h1>{{ $page.post.title }}</h1>

    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="body" v-html="$page.post.content"></div>
  </component>
</template>

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
  max-width: 100%;
  text-align: left;
}
</style>
