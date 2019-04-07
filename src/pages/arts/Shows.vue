<template>
  <arts-grid>
    <h1>shows</h1>

    <table>
      <thead>
        <tr>
          <td colspan="3"><h2>coming up</h2></td>
        </tr>

        <tr>
          <th>when</th>
          <th>where</th>
          <th>what</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="show in shows" :key="show.path">
          <td>{{ show.when }}</td>

          <td>
            <a :href="show.whereUrl">{{ show.where }}</a>
          </td>

          <td class="show-what" v-html="show.content"></td>
        </tr>
      </tbody>

      <thead>
        <tr>
          <td colspan="3"><h2>gone down</h2></td>
        </tr>
        <tr>
          <th>when</th>
          <th>where</th>
          <th>what</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>March 28</td>

          <td><a href="http://honeympls.com/">Honey, Minneapolis</a></td>

          <td>
            Improv with
            <a href="https://www.facebook.com/imatrio/">I'm a trio.</a>
            at
            <a href="https://www.facebook.com/events/303882380295622/">
              Freshly Squeezed Improv.
            </a>
          </td>
        </tr>

        <tr>
          <td>March 23</td>

          <td>
            <a href="http://hugetheater.com/">HUGE Theater, Minneapolis</a>
          </td>

          <td>
            Accompanied <a href="http://stirfridaynight.org/">
              Stir Friday Night
            </a>
            and
            <a href="https://www.facebook.com/BlackMenBlackPlanet/">
              The Black Men from a Black Planet
            </a>
            at the
            <a href="https://blackandfunny.com">
              Black and Funny Improv Festival.
            </a>
          </td>
        </tr>

        <tr>
          <td>March 2</td>

          <td>
            <a href="http://hugetheater.com/">HUGE Theater, Minneapolis</a>
          </td>

          <td>
            Accompanied
            <a href="http://www.hugetheater.com/event/foul-play-an-improvised-agatha-christie/">
              Foul Play: Improvised Agatha Christie.
            </a>
            <i>(There's been a murder.)</i>
          </td>
        </tr>

        <tr>
          <td>Wednesdays in January and February</td>

          <td>
            <a href="http://hugetheater.com/">HUGE Theater, Minneapolis</a>
          </td>

          <td>
            Accompanied
            <a href="https://www.instagram.com/rebel_grrls/">
              Rebel Grrls
            </a> and also sometimes Kids at Camp, The Wünderkidz, and
            House Party.
          </td>
        </tr>
      </tbody>
    </table>
  </arts-grid>
</template>

<page-query>
query Shows {
  allShow  {
    edges {
      node {
        path
        when
        where
        whereUrl
        content
        lastDate
      }
    }
  }
}
</page-query>

<script>
export default {
  computed: {
    shows() {
      return this.$page.allShow.edges
        .map(edge => edge.node)
        .sort((a, b) => (a.path < b.path ? -1 : a.path > b.path ? 1 : 0))
    }
  },

  metaInfo: {
    title: 'arts[shows]'
  }
}
</script>

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
