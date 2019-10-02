<template lang="pug">
  .braingrid.code
    g-link.brand(to='/')
      .monogram
        span.display.arts E
        span.display.code O

    code-contents.contents-header.display

    g-link(to="/code/words/").side.this-side.display.code
      .side-label code

    .main.code(:class="{'display-only': displayOnly}")
      slot

    g-link(to="/arts/words/").side.other-side.display.arts
      .side-label arts

    .footer © 2019 Erik Ostrom
</template>

<script>
import CodeContents from '~/components/CodeContents'

export default {
  components: {
    CodeContents
  },

  props: {
    displayOnly: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.braingrid {
  grid-template-areas:
    'brand header header othersidebar'
    'sidebar main main othersidebar'
    'sidebar main main othersidebar'
    '. footer footer othersidebar';
}

.contents-header {
  flex-direction: row;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.side-label {
  transform: rotate(270deg);
  right: -0.9em;
}

.other-side .side-label {
  right: -0.7em;
}
</style>
