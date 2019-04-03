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
        | Q and A:
        a(href="https://stackoverflow.com/users/2388479/erik-ostrom")
          | Stack Overflow
      li
        | Human contact:
        a(href="mailto:code@erikostrom.com") Email Me
</template>

<script>
export default {
  metaInfo: {
    title: 'code/links'
  }
}
</script>
