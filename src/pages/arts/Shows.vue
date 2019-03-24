<template>
  <arts-grid>
    <h1>shows</h1>

    <table>
      <thead>
        <tr>
          <th>when</th>
          <th>where</th>
          <th>what</th>
          <!--          <th>who</th>-->
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>March 28</td>

          <td><a href="http://honeympls.com/">Honey, Minneapolis</a></td>

          <td>
            <a href="https://www.facebook.com/imatrio/">I'm a trio.</a>
            and three other groups at
            <a href="https://www.facebook.com/events/303882380295622/">
              Freshly Squeezed Improv.
            </a>
          </td>
        </tr>

        <tr>
          <td>Fridays in July and August</td>

          <td>
            <a href="http://hugetheater.com/">HUGE Theater, Minneapolis</a>
          </td>

          <td>
            Live guitar score for
            <a href="https://www.facebook.com/bummertown/">Bummertown,</a>
            the funniest sad improv in town.
          </td>
        </tr>
      </tbody>
    </table>
  </arts-grid>
</template>

<style scoped>
table {
  width: 100%;
}

th {
  color: var(--bright-blue);
  font-family: var(--arts-display-font-family);
  font-style: italic;
}

td,
th {
  padding: 0.5em 1em;
  vertical-align: top;
}

td:first-child,
th:first-child {
  padding-left: 0;
}

td:last-child,
th:last-child {
  padding-right: 0;
}
</style>
