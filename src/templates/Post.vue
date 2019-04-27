<template>
  <component :is="gridComponent" class="post">
    <article>
      <header>
        <h1>{{ $page.post.title }}</h1>

        <time :datetime="date.toISOString()" class="display">
          {{ shortDate }}
        </time>
      </header>

      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="body" v-html="$page.post.content"></div>
    </article>
  </component>
</template>

<script>
import { parseISO } from 'date-fns'

const shortDateFormat = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric'
})

export default {
  metaInfo() {
    return {
      script: [
        { src: 'https://platform.twitter.com/widgets.js', async: true }
      ],
      title: this.$page.post.title
    }
  },

  computed: {
    date() {
      return parseISO(this.$page.post.date)
    },

    shortDate() {
      return shortDateFormat.format(this.date)
    }
  }
}
</script>

<style scoped>
.body {
  max-width: 100%;
  text-align: left;
}

time {
  white-space: nowrap;
  color: var(--display-color);
}
</style>
