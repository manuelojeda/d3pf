<template>
  <div class="skills-wrapper mt-5">
    <h3 class="font-diablo">
      Skills
    </h3>
    <hr class="bg-white">
    <!-- <ActiveSkills :skills="skills.active"/>
    <hr>
    <PassiveSkills :skills="skills.passive"/> -->
    <b-nav pills small>
      <b-nav-item :active="!isPassiveSkillsActive" @click="changeComponent('ActiveSkills')">Active</b-nav-item>
      <b-nav-item :active="isPassiveSkillsActive" @click="changeComponent('PassiveSkills')">Passive</b-nav-item>
    </b-nav>

    <keep-alive>
      <component :is="activeComponent" :skills="componentProps"/>
    </keep-alive>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from '@vue/composition-api'

export default defineComponent({
  name: 'HeroSkills',
  components: {
    ActiveSkills: () => import(/* webpackChunkName: "ActiveSkills" */'./ActiveSkills.vue'),
    PassiveSkills: () => import(/* webpackChunkName: "PassiveSkills" */'./PassiveSkills.vue')
  },
  props: {
    skills: {
      required: true,
      type: Object
    }
  },
  setup (props) {
    const activeComponent = ref<string>('ActiveSkills')
    const componentProps = computed(() => {
      return activeComponent.value === 'ActiveSkills' ? props.skills.active : props.skills.passive
    })
    const isPassiveSkillsActive = computed(() => {
      return activeComponent.value === 'PassiveSkills'
    })

    function changeComponent (component) {
      activeComponent.value = component
    }

    return {
      activeComponent,
      componentProps,
      isPassiveSkillsActive,
      changeComponent
    }
  }
})
</script>
