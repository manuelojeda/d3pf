<template>
  <div class="hero-name-level">
    <span> {{ classToName(hero.class) }}</span>
    <span></span>
    <span class="text-monospace font-weight-bold"> {{ hero.level }} </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import useHeroName from '@/composables/useHeroName'

export default defineComponent({
  name: 'HeroClassLevel',
  props: {
    hero: {
      required: true,
      type: Object
    }
  },
  setup () {
    return {
      ...useHeroName()
    }
  }
})
</script>
