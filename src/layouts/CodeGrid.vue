<template lang="pug">
  .braingrid
    g-link.brand(to='/')
      span.left E
      span.right O

    ul.contents-header
      li
        g-link(to='/code/work') work
      li
        g-link(to='/code/blog') blog
      li
        g-link(to='/code/links') links

    .side.code
      h3 code

    .main.code
      slot

    .side.other-side.arts
      h3
        g-link(to="/arts/links") arts

    .footer © 2019 Erik Ostrom
</template>

<style lang="scss" scoped>
@import '../assets/variables';

.braingrid {
  grid-template-areas:
    'brand header header othersidebar'
    'sidebar main main othersidebar'
    '. footer footer othersidebar';
}

.contents-header {
  text-align: right;
  color: $code-foreground;
  font: 14px $code-heading-font-family;
  line-height: 72px;
}

.side {
  color: $code-foreground;
  font-family: $code-heading-font-family;

  h3 {
    position: absolute;
    transform: rotate(270deg);
    top: 4rem;
    left: 0rem;
  }
}

.side.other-side {
  background: $arts-background;
  color: $arts-foreground;
  font-family: $arts-font-family;
  font-style: italic;

  h3 {
    top: 8.5rem;
    left: 1rem;
  }
}

.main {
  background: $code-background;
  color: $code-foreground;
  text-align: right;
  padding-left: 25%;
  font-family: $code-font-family;
  font-size: 28px;

  #{$headings} {
    font-family: $code-heading-font-family;
  }
}

.footer {
  text-align: right;
  background: $code-background;
}
</style>
