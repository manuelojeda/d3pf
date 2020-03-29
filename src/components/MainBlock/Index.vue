<template>
  <div class="grid-container">
    <div class="grid-item item-left">
      <top-heroes
        v-if="hasHeroes"
        :heroes="topHeroes"
      />

      <heroes-list
        v-if="hasHeroesList"
        :heroes="heroesList"
      />

      <progress-list
        v-if="profileData !== null"
        :acts="profileData.progression"
      />
    </div>
    <div class="grid-item item-right">
      <PlayerStats :stats="statsData" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'
import HeroesList from './HeroesList/Index.vue'
import TopHeroes from './TopHeroes/Index.vue'
import ProgressList from './ProgressList/Index.vue'
import PlayerStats from './PlayerStats/Index.vue'

export default defineComponent({
  name: 'MainBlock',
  props: {
    profileData: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  components: {
    TopHeroes,
    HeroesList,
    ProgressList,
    PlayerStats
  },
  setup (props) {
    const hasHeroes = computed((): boolean => {
      return props.profileData.heroes.length > 0
    })
    const topHeroes = computed((): Array<any> => {
      return props.profileData.heroes.slice(0, 3)
    })
    const hasHeroesList = computed((): boolean => {
      return props.profileData.heroes.length > 3
    })
    const heroesList = computed((): Array<any> => {
      return props.profileData.heroes.slice(3, props.profileData.heroes.length)
    })
    const statsData = computed(() => {
      const { paragonLevel, kills, timePlayed } = props.profileData
      return { paragonLevel, kills, timePlayed }
    })

    return {
      hasHeroes,
      topHeroes,
      hasHeroesList,
      heroesList,
      statsData
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
    grid-gap 30px

    .grid-item
      &.item-left
        grid-column span 4

      &.item-right
        grid-column span 2
</style>
