<template>
  <div>
    <h3 class="font-diablo">
      Attributes
    </h3>
    <hr class="bg-white">
    <div class="attributes">

      <div class="core">
        <HeroAttributeList :attributes="coreAttributes"/>
      </div>

      <hr>

      <div class="secondary">
        <HeroAttributeList :attributes="secondaryAttributes"/>
      </div>

    </div>

    <hr>

    <div class="resources">
      <HeroResources :resources="resources"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'
import HeroAttributeList from './HeroAttributeList.vue'
import HeroResources from './HeroResources.vue'

export default defineComponent({
  name: 'HeroAttributes',
  components: {
    HeroAttributeList,
    HeroResources
  },
  props: {
    attributes: {
      type: Object,
      required: true
    }
  },
  setup (props) {
    // Definimos:
    // Los atributos principales
    const coreAttributesList = ['strength', 'dexterity', 'vitality', 'intelligence']
    // Los atributos secundarios
    const secondaryAttributesList = ['damage', 'toughness', 'healing']
    // Los recursos
    const resourcesList = ['life', 'primaryResource', 'secondaryResource']

    const coreAttributes = computed(() => {
      return coreAttributesList.map(item => ({ name: item, val: props.attributes[item] }))
    })
    const secondaryAttributes = computed(() => {
      return secondaryAttributesList.map(item => ({ name: item, val: props.attributes[item] }))
    })
    const resources = computed(() => {
      const data = {
        classSlug: props.attributes.classSlug,
        resources: {}
      }

      resourcesList.forEach(item => {
        data.resources[item] = { name: item, val: props.attributes[item] }
      })

      return data
    })

    return {
      coreAttributes,
      secondaryAttributes,
      resources
    }
  }
})
</script>
