<template>
  <div class="multi-stats pl-lg-4">
    <hr class="bg-white mt-5 d-lg-none">
    <h2 class="font-diablo my-4">Stats</h2>
    <div class="stats d-flex flex-column bg-dark p-3">
      <SingleStat
        class="mb-3"
        ico-name="skull"
        ico-color="#9E9E9E"
        :info="{value: stats.kills.monsters, text:'Lifetime Kills'}" />

      <SingleStat
        class="mb-3"
        ico-name="crown"
        ico-color="#ffc107"
        :info="{value: stats.kills.elites, text:'Elite Kills'}"/>

      <SingleStat
        ico-name="dungeon"
        ico-color="#795548"
        :info="{value: stats.paragonLevel, text:'Paragon Level'}"/>
    </div>

    <TimePlayed :timePlayed="timePlayed"/>

  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'
import useHeroName from '@/composables/useHeroName'
import SingleStat from './SingleStat.vue'
import TimePlayed from './TimePlayed.vue'
import { HeroData } from '@/utils/typeValidation'

export default defineComponent({
  name: 'PlayerStats',
  components: {
    TimePlayed,
    SingleStat
  },
  props: {
    stats: {
      required: true,
      type: Object
    }
  },
  setup (props) {
    const timePlayed = computed(() => {
      return Object.keys(props.stats.timePlayed)
        .sort()
        .map(hero => {
          return new HeroData(
            useHeroName().classToName(hero),
            props.stats.timePlayed[hero],
            hero
          )
        })
    })
    return {
      timePlayed,
      ...useHeroName()
    }
  }
})
</script>
