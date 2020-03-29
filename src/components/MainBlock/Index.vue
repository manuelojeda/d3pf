<template>
  <div class="grid-container">
    <div class="grid-item item-left">
      <top-heroes
        v-if="hasHeroes"
        :heroes="topHeroes"
      />
    </div>
    <div class="grid-item item-right">
      <h1>Derecha</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'
import TopHeroes from './TopHeroes/Index.vue'

export default defineComponent({
  name: 'MainBlock',
  props: {
    profileData: {
      type: Object,
      required: true
    }
  },
  components: {
    TopHeroes
  },
  setup (props) {
    const hasHeroes = computed((): boolean => {
      return props.profileData.heroes.length > 0
    })
    const topHeroes = computed((): Array<any> => {
      return props.profileData.heroes.slice(0, 3)
    })

    return {
      hasHeroes,
      topHeroes
    }
  }
})
</script>

<style lang="stylus" scoped>
.grid-container
  display grid
  grid-template-columns 1fr

  .grid-item
    &.item-left
      grid-column span 1

    &.item-right
      grid-column span 1

@media (min-width: 992px)
  .grid-container
    display grid
    grid-template-columns repeat(6, 1fr)

    .grid-item
      &.item-left
        grid-column span 4

      &.item-right
        grid-column span 2
</style>
