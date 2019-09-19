<template>
  <div class="card">
    <div class="main arts display">
      <h1>Erik Ostrom</h1>
      <h2>music/etc</h2>
      <h3><a href="arts@erikostrom.com">arts@erikostrom.com</a></h3>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 3.66in;
  height: 2.16in;
  background: url('/images/card/template.jpg') var(--bright-pink) no-repeat
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
  font-family: var(--code-body-font-family);
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
