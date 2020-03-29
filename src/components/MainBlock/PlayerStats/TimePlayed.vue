<template>
  <div class="time-played mt-3">
    <hr class="bg-white mt-5">
    <h2 class="font-diablo my-4">Time Played</h2>
    <div class="bg-dark p-3">
      <div v-for="hero in timePlayed" :key="hero.classSlug">
        <TimePlayedHero :hero-time="hero"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import TimePlayedHero from './TimePlayedHero.vue'

export default defineComponent({
  name: 'TimePlayed',
  props: {
    timePlayed: {
      required: true,
      type: Array
    }
  },
  components: {
    TimePlayedHero
  }
})
</script>
