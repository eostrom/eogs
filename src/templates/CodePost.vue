<page-query>
query Post ($path: String!) {
  post: codePost (path: $path) {
    title
    content
  }
}
</page-query>

<script>
import CodeGrid from '../layouts/CodeGrid'
import Post from './Post'

export default {
  extends: Post,

  computed: {
    gridComponent() {
      return CodeGrid
    }
  }
}
</script>
