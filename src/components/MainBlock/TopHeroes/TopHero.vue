<template>
  <div class="hero-portrait-wrapper mb-5 mb-sm-0">
    <div class="bg-secondary d-flex justify-content-center p-3 p-sm-0">
      <div :class="heroClass" class="hero-image" @click="goToHero(hero.id)"></div>
    </div>
    <div class="p-2 bg-dark">
      <h5 class="text-truncate m-0 text-center title-name font-diablo" :class="{'bg-danger': hero.hardcore}">
        {{ hero.name }}
        <img v-if="hero.seasonal" src="@/assets/img/leaf.png" width="12px" @click="goToHero(hero.id)">
      </h5>
      <div class="d-flex justify-content-between border-top border-secondary pt-2 align-items-center mt-2">
        <small class="elite-kills">
          <span class="text-monospace">{{ formatNumber(hero.kills.elites) }}</span>
          Elite kills
        </small>
        <small class="level-circle" :class="{'text-danger': hero.dead}"> {{ hero.level }} </small>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'
import { formatNumber } from '@/filters/numeral'
import useGoToHero from '@/composables/useGoToHero'

export default defineComponent({
  name: 'TopHero',
  props: {
    hero: {
      type: Object,
      required: true
    }
  },
  setup (props, context) {
    const heroClass = computed((): string => {
      const gender = props.hero.gender === 0 ? 'male' : 'female'
      return `hero-${props.hero.classSlug} ${gender}`
    })

    return {
      heroClass,
      formatNumber,
      ...useGoToHero(props, context)
    }
  }
})
</script>

<style lang="stylus" scoped>
.hero-portrait-wrapper
  .title-name
    color white
    font-weight 900

  .level-circle
    width 26px
    height 26px
    padding 4px
    font-weight bold
    text-align center
    border-radius 13px
    background-color #15202b
    box-shadow 0 0 0 2px #6c757d

.hero-image
  cursor pointer
</style>
