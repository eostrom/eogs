<template>
  <code-grid display-only>
    <h1>words</h1>

    <BlogPostExcerpt
      v-for="{node: post} in $page.allCodePost.edges"
      :post="post"
      :key="post.id"
    />
  </code-grid>
</template>

<page-query>
query Posts {
  allCodePost (filter: {status: {ne: "draft"}}) {
    edges {
      node {
        title
        excerpt
        content
        date
        path
        id
      }
    }
  }
}
</page-query>
<script>
import BlogPostExcerpt from '~/components/BlogPostExcerpt'

export default {
  components: {
    BlogPostExcerpt
  },

  metaInfo: {
    title: 'code[words]'
  }
}
</script>
