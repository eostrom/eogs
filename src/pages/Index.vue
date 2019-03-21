<template lang="pug">
  .braingrid
    .brand
      span.display.arts Erik&nbsp;
      span.display.code Ostrom

    .main.code.display
      h1 code

      p.
        I'm a freelance web developer, architect, and designer.
        I love to create robust, modern, humane software experiences.

      code-contents.contents

    .main.arts.display
      h1 arts

      p.
        I'm a composer, improviser, singer, player, and theater maker.
        I love to create playful, moving, immersive artistic experiences.

      arts-contents.contents

    .footer © 2019 Erik Ostrom
</template>

<script>
import CodeContents from '~/components/CodeContents'
import ArtsContents from '~/components/ArtsContents'

export default {
  components: {
    ArtsContents, CodeContents
  }
}
</script>

<style lang="scss" scoped>
.braingrid {
  grid-template-areas:
    'header header header header'
    'left left right right'
    'footer footer footer footer';
}

.brand {
  grid-area: header;
}

.contents {
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    padding: 0;
  }
}

.main.code {
  grid-area: left;
  text-align: right;
  padding-left: 25%;
}

.main.arts {
  grid-area: right;
  text-align: left;
  padding-right: 25%;
  letter-spacing: 0.05em;
}

.footer {
  text-align: center;
}
</style>
