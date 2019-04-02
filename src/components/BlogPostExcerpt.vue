<template>
  <article>
    <h2>
      <time :datetime="date.toISOString()">
        {{ shortDate }}
      </time>
      <g-link :to="post.path">{{ post.title }}</g-link>
    </h2>
  </article>
</template>

<script>
import { parseISO } from 'date-fns'

const shortDateFormat = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric'
})

export default {
  name: 'BlogPostExcerpt',

  props: {
    post: {
      type: Object,
      required: true
    }
  },

  computed: {
    date() {
      return parseISO(this.post.date)
    },

    shortDate() {
      return shortDateFormat.format(this.date)
    },

    excerpt() {
      return (
        this.post.excerpt || this.post.content.split('<!-- READMORE -->', 1)[0]
      )
    }
  }
}
</script>

<style scoped>
h2 {
  font-size: var(--fs-2);
  line-height: var(--fs-2);
}

time {
  white-space: nowrap;
}
</style>
