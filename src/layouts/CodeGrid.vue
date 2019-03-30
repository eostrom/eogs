<template lang="pug">
  .braingrid.code
    g-link.brand(to='/')
      .monogram
        span.display.arts E
        span.display.code O

    code-contents.contents-header.display

    .side.this-side.display.code
      .hemisphere code

    .main.code
      slot

    .side.other-side.display.arts
      .hemisphere
        g-link(to="/arts/blog") arts

    .footer © 2019 Erik Ostrom
</template>

<script>
import CodeContents from '~/components/CodeContents'

export default {
  components: {
    CodeContents
  }
}
</script>

<style scoped>
.braingrid {
  grid-template-areas:
    'brand header header othersidebar'
    'sidebar main main othersidebar'
    '. footer footer othersidebar';
}

.contents-header {
  text-align: right;
}

.side {
  & .hemisphere {
    font-size: var(--fs-6);
    position: absolute;
    transform: rotate(270deg);
    top: 4rem;
    left: 0rem;
  }
}

.side.other-side {
  & .hemisphere {
    top: 8.5rem;
    left: 1rem;
  }
}

.footer {
  text-align: right;
}
</style>
