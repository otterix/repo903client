<template>
  <div id="Takings">
    <SourceSelection v-on:sourceChanged="sourceChanged"></SourceSelection>
    <Takingslist v-bind:source="source"></Takingslist>
  </div>
</template>

<script>
import Takingslist from './Takingslist'
import SourceSelection from './SourceSelection'

export default {
  name: 'Takings',
  components: {
    Takingslist,
    SourceSelection
  },
  data () {
    return {
      source: ''
    }
  },
  methods: {
    sourceChanged: function (source) {
      this.source = source
    }
  }
}
</script>
<style>
</style>
