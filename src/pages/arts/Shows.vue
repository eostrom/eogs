<template>
  <arts-grid>
    <h1>shows</h1>

    <table class="show-table">
      <thead>
        <tr>
          <td colspan="3"><h2>coming up</h2></td>
        </tr>

        <tr>
          <th><h3>when</h3></th>
          <th><h3>where</h3></th>
          <th><h3>what</h3></th>
        </tr>
      </thead>

      <tbody>
        <show-row
          v-for="show in futureShows"
          :key="show.path"
          class="show-row"
          :show="show"
        />
      </tbody>

      <thead>
        <tr>
          <td colspan="3"><h2>gone down</h2></td>
        </tr>

        <tr>
          <th><h3>when</h3></th>
          <th><h3>where</h3></th>
          <th><h3>what</h3></th>
        </tr>
      </thead>

      <tbody>
        <show-row
          v-for="show in pastShows"
          :key="show.path"
          class="show-row"
          :show="show"
        />
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
import {isAfter, startOfDay, toDate} from 'date-fns'
import {filter, pluck, prop, reject, reverse, sortBy} from 'ramda'
import ShowRow from '@/components/ShowRow'

const today = startOfDay(new Date())
const sortByPath = sortBy(prop('path'))
const isFuture = show => isAfter(toDate(Date.parse(show.lastDate)), today)

export default {
  components: {ShowRow},

  computed: {
    shows() {
      return pluck('node')(this.$page.allShow.edges)
    },

    futureShows() {
      return sortByPath(filter(isFuture, this.shows))
    },

    pastShows() {
      return reverse(sortByPath(reject(isFuture, this.shows)))
    }
  },

  metaInfo: {
    title: 'arts[shows]'
  }
}
</script>

<style>
.show-table {
  width: 100%;
}

.show-table td,
.show-table th {
  padding: 0.5em 1em;
  vertical-align: top;
}

.show-table td:first-child,
.show-table th:first-child {
  padding-left: 0;
}

.show-table td:last-child,
.show-table th:last-child {
  padding-right: 0;
}

.show-table h3 {
  padding: 0;
}
</style>
