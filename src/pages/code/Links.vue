<template lang="pug">
  code-grid
    h1 links

    ul.link-list.display
      li
        | Mostly open source:
        a(href="https://github.com/eostrom") GitHub
      li
        | Curriculum vitae:
        a(href="https://linkedin.com/in/eostrom") LinkedIn
      li
        | Brief remarks:
        a(href="https://twitter.com/erikostrom")
          | Twitter
      li
        | Human contact:
        a(href="mailto:code@erikostrom.com") Email Me
</template>

<script>
export default {
  metaInfo: {
    title: 'code[links]'
  }
}
</script>
