<template>
  <div class="card">
    <img src="/images/accordion.jpg" />
  </div>
</template>

<style scoped>
/* stylelint-disable font-family-no-missing-generic-family-keyword */

.card {
  width: 3.66in;
  height: 2.16in;
  background: url('/images/card/template.jpg') white no-repeat
    center/contain;
  padding: 0.08in;
  overflow: hidden;
}

img {
  width: 100%;
  filter: contrast(2%) grayscale(100%) brightness(200%);
  /*opacity: 0.05;*/
}
.main {
  /*background: transparent;*/
  width: 3.5in;
  height: 2in;
  opacity: 0.9;
  padding: 0.5em !important;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

h1::before,
h1::after {
  content: none;
}

h1 {
  /*font-size: 42px;*/
}

h2 {
  /*font-size: 26px;*/
  flex-grow: 1;
}

h1,
h2,
h3 {
  padding: 0;
}

h3 {
  font-family: "Roboto";
  font-style: normal;
}

@media print {

  .card {
    -webkit-print-color-adjust: exact;
    background-image: none;
  }

  @page {
    size: 3.66in 2.16in;
    margin: 0;
  }

}
</style>
