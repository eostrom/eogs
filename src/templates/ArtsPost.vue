<page-query>
query Post ($path: String!) {
  post: artsPost (path: $path) {
    title
    content
  }
}
</page-query>

<script>
import ArtsGrid from '../layouts/ArtsGrid'
import Post from './Post'

export default {
  extends: Post,

  computed: {
    gridComponent() {
      return ArtsGrid
    }
  }
}
</script>
