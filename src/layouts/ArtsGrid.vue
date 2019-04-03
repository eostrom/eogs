<template lang="pug">
  .braingrid.arts
    g-link.brand(to='/')
      .monogram
        span.display.arts E
        span.display.code O

    arts-contents.contents-header.display

    .side.this-side.display.arts
      .side-label arts

    .main.arts
      slot

    g-link(to="/code/words").side.other-side.display.code
      .side-label code

    .footer © 2019 Erik Ostrom
</template>

<script>
import ArtsContents from '~/components/ArtsContents'

export default {
  components: {
    ArtsContents
  }
}
</script>

<style scoped>
.braingrid {
  grid-template-areas:
    'othersidebar header header brand'
    'othersidebar main main sidebar'
    'othersidebar main main sidebar'
    'othersidebar footer footer .';
}

.brand {
  & .monogram {
    position: relative;
    margin: 0 -0.1em;
    right: 0.1em;
  }
}

.contents-header {
  flex-direction: row-reverse;
}

.side-label {
  transform: rotate(90deg);
  left: -0.7em;
}

.other-side .side-label {
  left: -0.9em;
}
</style>
