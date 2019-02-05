<template lang="pug">
  .braingrid
    g-link.brand(to='/')
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

    .side.arts
      h3 arts

    .main.arts
      slot

    .side.other-side.code
      h3
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

.contents-header {
  text-align: left;
  color: $arts-foreground;
  font: 14px $arts-heading-font-family;
  font-style: italic;
  line-height: 72px;
}

.side {
  color: $arts-foreground;
  font-family: $arts-heading-font-family;

  h3 {
    position: absolute;
    transform: rotate(90deg);
    top: 4rem;
    right: 1rem;
  }
}

.side.other-side {
  background: $code-background;
  color: $code-foreground;
  font-family: $code-font-family;

  h3 {
    top: 8.5rem;
    right: 1rem;
  }
}

.main {
  background: $arts-background;
  color: $arts-foreground;
  text-align: left;
  padding-right: 25%;
  font-family: $arts-font-family;
  font-style: italic;
  font-size: 27px;
}

.footer {
  text-align: left;
  background: $arts-background;
}
</style>
