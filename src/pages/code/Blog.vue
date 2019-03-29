<template>
  <code-grid>
    <h1>blog</h1>

    <BlogPostExcerpt
      v-for="{ node: post } in $page.allPost.edges"
      :post="post"
      :key="post.id"
    />
  </code-grid>
</template>

<page-query>
query Posts {
  allPost (filter: {side: {eq: "code"}, status: {ne: "draft"}}) {
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
import BlogPostExcerpt from "~/components/BlogPostExcerpt";

export default {
  components: {
    BlogPostExcerpt
  }
}
</script>
