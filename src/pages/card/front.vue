<template>
  <div class="card">
    <div class="main code display">
      <h1>Erik Ostrom</h1>
      <h2>web/maker</h2>
      <h3><a href="code@erikostrom.com">code@erikostrom.com</a></h3>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 3.66in;
  height: 2.16in;
  background: url('/images/card/template.jpg') var(--soft-blue) no-repeat
    center/contain;
  padding: 0.08in;
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
  background-color: inherit;
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

h3 {
  font-family: var(--code-body-font-family);
}

h1,
h2,
h3 {
  color: var(--bright-pink);
  font-weight: normal;
  padding: 0;
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
