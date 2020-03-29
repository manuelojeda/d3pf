<template>
  <div class="d-flex align-items-center mb-3">
    <div class="mr-2">
      <span class="slot" :class="slotClass"/>
      <img :src="skillUrl" :alt="skill.name">
    </div>

    <div>
      <p class="skill-name m-0" :title="skill.description">
        {{ skill.name }}
      </p>
      <small v-if="rune" class="rune-name text-muted" :title="rune.description">
        {{ rune.name }}
      </small>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'

export default defineComponent({
  name: 'ActiveSkill',
  props: {
    skill: {
      required: true,
      type: Object
    },
    rune: {
      required: false,
      type: Object
    },
    slotNum: {
      required: true,
      type: Number || String
    }
  },
  setup (props) {
    const skillUrl = computed(() => {
      // Posibles tamaños (px)
      const sizes = [21, 42, 64]
      // API URL para imágenes
      const host = `http://media.blizzard.com/d3/icons/skills/${sizes[1]}/`
      // Ejemplo:
      // http://media.blizzard.com/d3/icons/skills/42/p6_necro_bonespikes.png
      return `${host}${props.skill.icon}.png`
    })

    const slotClass = computed(() => {
      return `slot-${props.slotNum}`
    })

    return {
      skillUrl,
      slotClass
    }
  }
})
</script>

<style lang="stylus" scoped>

</style>
