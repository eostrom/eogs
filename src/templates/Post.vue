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
    const image = this.$page.post.image
    const meta = []
    if (image) meta.push({key: 'og:image', name: 'og:image', content: image})
    meta.push({
      key: 'twitter:title',
      name: 'twitter:title',
      content: `${this.$page.post.title} - Erik Ostrom`,
    })

    return {
      script: [
        { src: 'https://platform.twitter.com/widgets.js', async: true }
      ],
      title: this.$page.post.title,
      meta
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
