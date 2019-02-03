<template lang="pug">
  .codegrid
    g-link.brand(to='/')
      span.left E
      span.right O

    ul.contents
      li
        g-link(to='/code/work') work
      li
        g-link(to='/code/blog') blog
      li
        g-link(to='/code/links') links

    .side.code
      h3 code

    .main.code
      h1 links

      ul.links
        li
          | Mostly open source:
          a(href="https://github.com/eostrom") GitHub
        li
          | Curriculum vitae:
          a(href="https://linkedin.com/in/eostrom") LinkedIn
        li
          | Q and A:
          a(href="https://stackoverflow.com/users/2388479/erik-ostrom")
            | Stack Overflow
        li
          | Human contact:
          a(href="mailto:code@erikostrom.com") Email Me

    .side.other-side.arts
      h3
        g-link(to="/arts/links") arts

    .footer
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
  font-size: 16px;
}

body {
  min-height: 100%;
}

.codegrid {
  height: 100vh;
  display: grid;
  grid-template: auto 1fr auto / 5rem 1fr 1fr 5rem;
  grid-template-areas:
    "leftbrand header header rightbar"
    "leftbar main main rightbar"
    ". footer footer rightbar";
  text-align: center;
}

.brand {
  grid-area: leftbrand;
  font-size: 48px;
  line-height: 72px;
  padding: 0 0.25rem;
  text-align: center;

  &:hover {
    text-decoration: none;
  }

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

h3 {
  font-size: 56px;
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
  grid-area: header;
  text-align: right;
  list-style: none;
  padding: 0 1rem;
  margin: 0;
  color: $code-foreground;
  font:  14px $code-heading-font-family;
  line-height: 72px;

  li {
    display: inline-block;
    padding: 0 1rem;
  }

  a:link, a:visited {
    color: $link-color;
  }
}

a {
  text-decoration: none;
  &:hover { text-decoration: underline; }
}

.side {
  grid-area: leftbar;
  position: relative;
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
  grid-area: rightbar;
  background: $arts-background;
  color: $arts-foreground;
  filter: blur(2px) contrast(80%);
  font-family: $arts-font-family;
  font-style: italic;
  overflow-x: hidden;

  h3 {
    top: 8.5rem;
    left: 1rem;
    filter: blur(2px) contrast(80%);
    a:link, a:visited {
      color: inherit;
    }
  }
}

.main {
  line-height: 28px;
  padding: 2rem;

  a {
    color: $link-color
  }
}

.main.code {
  grid-area: main;
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

.links {
  list-style: none;
  padding: 0;
  line-height: 40px;
}

.footer {
  grid-area: footer;
  text-align: left;
  padding: 0 2rem;
  background: $code-background;
  color: hsla(0, 0, 100, 0.2);
}
</style>
