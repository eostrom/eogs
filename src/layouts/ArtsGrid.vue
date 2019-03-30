<template lang="pug">
  .braingrid.arts
    g-link.brand(to='/')
      .monogram
        span.display.arts E
        span.display.code O

    arts-contents.contents-header.display

    .side.this-side.display.arts
      .hemisphere arts

    .main.arts
      slot

    .side.other-side.display.code
      .hemisphere
        g-link(to="/code/blog") code

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
    'othersidebar footer footer .';
}

.brand {
  position: relative;

  & .monogram {
    position: absolute;
    right: 0;
  }
}

.contents-header {
  text-align: left;
}

.side {
  & .hemisphere {
    font-size: var(--fs-6);
    position: absolute;
    transform: rotate(90deg);
    top: 4rem;
    right: 1rem;
  }
}

.side.other-side {
  & .hemisphere {
    top: 8.5rem;
    right: 0rem;
  }
}

.footer {
  text-align: left;
}
</style>
