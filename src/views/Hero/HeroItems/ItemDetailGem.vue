<template>
  <img :src="gemUrl" :alt="gem.item.name" :title="gem.item.name">
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'
export default defineComponent({
  name: 'GemSlotItem',
  props: {
    gem: {
      required: true,
      type: Object
    }
  },
  setup (props) {
    const gemUrl = computed(() => {
      // Cambio de 'large' por 'small'
      const host = 'http://media.blizzard.com/d3/icons/items/small/'
      return `${host}${props.gem.item.icon}.png`
    })

    return {
      gemUrl
    }
  }
})
</script>
