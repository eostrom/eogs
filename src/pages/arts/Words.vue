<template>
  <arts-grid>
    <h1>words</h1>

    <BlogPostExcerpt
      v-for="{ node: post } in $page.allArtsPost.edges"
      :post="post"
      :key="post.id"
    />
  </arts-grid>
</template>

<page-query>
query Posts {
  allArtsPost (filter: {status: {ne: "draft"}}) {
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
    title: 'arts[words]'
  }
}
</script>
