<template lang="pug">
  .braingrid
    .brand
      span.display.arts Erik&nbsp;
      span.display.code Ostrom

    .main.code.display
      h1 code

      p.
        I'm a freelance web developer, architect, and designer.
        I love to create robust, modern, humane software experiences.

      code-contents.contents

    .main.arts.display
      h1 arts

      p.
        I'm a composer, improviser, singer, player, and theater maker.
        I love to create playful, moving, immersive artistic experiences.

      arts-contents.contents

    .footer © 2019 Erik Ostrom
</template>

<script>
import CodeContents from '~/components/CodeContents'
import ArtsContents from '~/components/ArtsContents'

export default {
  components: {
    ArtsContents,
    CodeContents
  },

  metaInfo: {
    title: 'code|arts',
    meta: [
      {
        key: 'description',
        name: 'description',
        content:
          'Composer, web developer, improviser, software engineer, and so on, you know, one of those.'
      }
    ]
  }
}
</script>

<style scoped>
h1::before,
h1::after {
  content: '';
}

.braingrid {
  grid-template-areas:
    'header header header header'
    'code code arts arts'
    'code code arts arts'
    'footer footer footer footer';
}

.brand {
  grid-area: header;
}

.contents {
  list-style: none;
  padding: 0;
  margin: 0;

  & li {
    padding: 0;
  }
}

.main.code {
  grid-area: code;
  text-align: right;
  padding-left: 25%;
}

.main.arts {
  grid-area: arts;
  padding-right: 25%;
}

.footer {
  text-align: center;
}

@media (max-width: 480px) {
  .braingrid {
    grid-template-areas:
      'header header header header'
      'code code code code'
      'arts arts arts arts'
      'footer footer footer footer';
  }

  .main.code {
    padding-left: 12.5%;
  }

  .main.arts {
    padding-right: 12.5%;
  }
}
</style>
