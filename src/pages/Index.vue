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

      ul.contents
        li
          g-link(to='/code/work') work
        li
          g-link(to='/code/blog') blog
        li
          g-link(to='/code/links') links

    .main.arts.display
      h1 arts

      p.
        I'm a composer, improviser, singer, player, and theater maker.
        I love to create playful, moving, immersive artistic experiences.

      ul.contents
        li
          g-link(to='/arts/work') work
        li
          g-link(to='/arts/blog') blog
        li
          g-link(to='/arts/links') links
        li
          g-link(to='/arts/shows') shows

    .footer © 2019 Erik Ostrom
</template>

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
