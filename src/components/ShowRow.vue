<template>
  <tr>
    <td v-html="show.when"></td>

    <td>
      <a :href="show.whereUrl" v-html="show.where"></a>
    </td>

    <td class="show-what" v-html="show.content"></td>
  </tr>
</template>

<script>
export default {
  name: 'ShowRow',

  props: {
    show: {
      type: Object,
      required: true
    }
  }
}
</script>
