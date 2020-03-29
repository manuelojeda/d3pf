<template>
  <ul class="list-unstyled">
    <li v-for="attr in attributes" :key="attr.name" class="mb-1">
      <div class="d-flex justify-content-between">
        <div class="pl-2 text-capitalize name-text">{{ attr.name }}</div>
        <div class="px-2 text-monospace">{{ formatNumber(attr.val) }}</div>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { formatNumber } from '@/filters/numeral'

export default defineComponent({
  name: 'HeroAttributeList',
  props: {
    attributes: {
      type: Array,
      required: true
    }
  },
  setup () {
    return {
      formatNumber
    }
  }
})
</script>

<style lang="stylus" scoped>
ul
  li
    .name-text
      color #efb45d
      font-weight 600
</style>
