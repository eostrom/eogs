<template lang="pug">
  .braingrid
    g-link.brand(to='/')
      .monogram
        span.left E
        span.right O

    ul.contents-header
      li
        g-link(to='/arts/work') work
      li
        g-link(to='/arts/blog') blog
      li
        g-link(to='/arts/links') links
      li
        g-link(to='/arts/links') shows

    .side.this-side.arts
      .hemisphere arts

    .main.arts
      slot

    .side.other-side.code
      .hemisphere
        g-link(to="/code/links") code

    .footer © 2019 Erik Ostrom
</template>

<style lang="scss" scoped>
@import '../assets/variables';

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
  color: $arts-foreground;
  font: 14px $arts-heading-font-family;
  font: var(--fs-0) $arts-heading-font-family;
  line-height: var(--fs-7);
  font-style: italic;
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

.side.this-side {
  color: $arts-foreground;
  font-family: $arts-heading-font-family;
  font-style: italic;
}

.side.other-side {
  background: $code-background;
  color: $code-foreground;
  font-family: $code-font-family;

  .hemisphere {
    top: 8.5rem;
    right: 0rem;
  }
}

.main {
  background: $arts-background;
  color: $arts-foreground;
  text-align: left;
  padding-right: 25%;
  font-family: $arts-font-family;
  font-style: italic;
}

.footer {
  text-align: left;
  background: $arts-background;
}
</style>
