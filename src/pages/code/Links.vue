<template lang="pug">
  code-grid
    h1 links

    ul.links
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
 // ..
}
</script>

<style lang="scss">
.links {
  list-style: none;
  padding: 0;
  line-height: 40px;
}
</style>
