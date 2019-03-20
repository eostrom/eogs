<template lang="pug">
  .braingrid.arts
    g-link.brand(to='/')
      .monogram
        span.display.arts E
        span.display.code O

    ul.contents-header.display
      li
        g-link(to='/arts/work') work
      li
        g-link(to='/arts/blog') blog
      li
        g-link(to='/arts/links') links
      li
        g-link(to='/arts/links') shows

    .side.this-side.display.arts
      .hemisphere arts

    .main.arts
      slot

    .side.other-side.display.code
      .hemisphere
        g-link(to="/code/links") code

    .footer © 2019 Erik Ostrom
</template>

<style lang="scss" scoped>
.braingrid {
  grid-template-areas:
    'othersidebar header header brand'
    'othersidebar main main sidebar'
    'othersidebar footer footer .';
}

.brand {
  position: relative;

  .monogram {
    position: absolute;
    right: 0;
  }
}

.contents-header {
  text-align: left;
}

.side {
  .hemisphere {
    font-size: var(--fs-6);
    position: absolute;
    transform: rotate(90deg);
    top: 4rem;
    right: 1rem;
  }
}

.side.other-side {
  .hemisphere {
    top: 8.5rem;
    right: 0rem;
  }
}

.main {
  text-align: left;
  padding-right: 25%;
}

.footer {
  text-align: left;
}
</style>
