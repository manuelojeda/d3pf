<template>
  <div class="hero-ico d-flex align-items-center">
    <span class="hero-image border" :class="heroClassImg" @click="goToHero(hero.id)" />
    <span class="hero-name ml-2 font-weight-bold" :class="{'text-danger': hero.hardcore}">
      {{ hero.name }}
    </span>
    <img
      v-if="hero.seasonal"
      src="@/assets/img/leaf.png"
      width="12px" class="ml-2"
      alt="seasonal_leaf"
      @click="goToHero(hero.id)"
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'
import useGoToHero from '@/composables/useGoToHero'

export default defineComponent({
  name: 'HeroIco',
  props: {
    hero: {
      required: true,
      type: Object
    }
  },
  setup (props, context) {
    const heroClassImg = computed(() => {
      const gender = props.hero.gender === 1 ? 'female' : 'male'
      const hardcore = props.hero.hardcore ? 'border-danger' : ''
      return `hero-${props.hero.classSlug} ${gender} ${hardcore}`
    })

    return {
      heroClassImg,
      ...useGoToHero(props, context)
    }
  }
})
</script>

<style lang="stylus">
  .hero-ico
    vertical-align middle

    .hero-image
      width 30px
      height 26px
      display inline-block
      background-size 210%
      cursor pointer

    .hero-name
      height 24px
      display inline-block
</style>
