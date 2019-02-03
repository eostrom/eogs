<template lang="pug">
  .bicamera
    h1
      span.left Erik&nbsp;
      span.right Ostrom

    .main.code
      h2 code

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

    .main.arts
      h2 arts

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

    h6 © 2019 Erik Ostrom
</template>

<script>
export default {
 // ..
}
</script>

<style lang="scss">
$body-background: #000000;
$code-hue: 225;
$arts-hue: 300;
$code-background: hsl($code-hue, 100%, 50%);
$arts-background: hsl($arts-hue, 100%, 50%);
$code-foreground: $arts-background;
$arts-foreground: $code-background;
$link-color: hsl((($code-hue + $arts-hue) / 2 + 180) % 360, 100%, 50%);
// $link-color: hsla(0, 0, 100, 0.5);
$code-font-family: Inconsolata;
$code-heading-font-family: droid-sans-mono;
$arts-font-family: droid-serif;
$footer-font-family: droid-serif;

$headings: "h1, h2, h3, h4, h5, h6";

* {
  box-sizing: border-box;
}

html {
  background: $body-background;
  color: #333;
  width: 100%;
  height: 100%;
}

body {
  min-height: 100%;
}

.bicamera {
  height: 100vh;
  display: grid;
  grid-template: auto 1fr auto / auto 1fr 1fr auto;
  grid-template-areas:
    "header header header header"
    "leftbar left right rightbar"
    "footer footer footer footer";
  text-align: center;
}

h1 {
  grid-area: header;
  font-size: 76px;
  line-height: 88px;

  .left {
    color: $arts-foreground;
    font-family: $arts-font-family;
    font-style: italic;
  }

  .right {
    color: $code-foreground;
    font-family: $code-heading-font-family;
  }
}

h2 {
  font-size: 64px;
  line-height: 72px;
}

h6 {
  font-size: 24px;
  line-height: 30px;
  font-family: $footer-font-family;
}

#{$headings} {
  margin: 1rem 0;
}

.contents {
  list-style: none;
  padding: 0;
}

a {
  text-decoration: none;
}

.main {
  line-height: 28px;
  padding: 2rem;

  a {
    color: $link-color
  }
}

.main.code {
  grid-area: left;
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

.main.arts {
  grid-area: right;
  background: $arts-background;
  color: $arts-foreground;
  text-align: left;
  padding-right: 25%;
  font-family: $arts-font-family;
  font-style: italic;
  font-size: 27px;
}

.contents {
  margin-bottom: 3em;
}

h6 {
  grid-area: footer;
}
</style>
