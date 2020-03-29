<template>
  <div class="hero-view">
    <base-loading v-if="isLoadingHero" />
    <template v-else>
      <HeroDetailHeader v-if="hero" :detail="detailHeader" />
    </template>

    <b-row>
      <b-col md="12" lg="8" order-lg="2">
        <base-loading v-if="isLoadingItems" />
        <HeroItems v-if="items" :items="items"/>
      </b-col>

      <b-col md="12" lg="4" order-lg="1">
        <template v-if="hero">
          <HeroAttributes :attributes="detailStats"/>
          <HeroSkills :skills="hero.skills"/>
        </template>
      </b-col>

    </b-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from '@vue/composition-api'
import BaseLoading from '@/components/BaseLoading.vue'
import HeroDetailHeader from './HeroDetailHeader.vue'
import HeroAttributes from './HeroAttributes/Index.vue'
import HeroSkills from './HeroSkills/Index.vue'
import HeroItems from './HeroItems/Index.vue'
import { getApiHero, getApiDetailedHeroItems } from '@/api/search'

export default defineComponent({
  name: 'HeroView',
  components: {
    BaseLoading,
    HeroDetailHeader,
    HeroAttributes,
    HeroSkills,
    HeroItems
  },
  setup (props, context) {
    const isLoadingHero = ref<boolean>(false)
    const isLoadingItems = ref<boolean>(false)
    const hero = ref<any>(null)
    const items = ref<any>(null)

    const detailHeader = computed(() => {
      const {
        name,
        // valor: alias
        class: classSlug,
        gender,
        level,
        hardcore,
        seasonal,
        paragonLevel,
        alive,
        seasonCreated
      } = hero.value

      return {
        name,
        classSlug,
        gender,
        level,
        hardcore,
        seasonal,
        paragonLevel,
        alive,
        seasonCreated
      }
    })

    const detailStats = computed(() => {
      return { ...hero.value.stats, classSlug: hero.value.class }
    })

    function fetchHeroData () {
      const { region, battleTag: account, heroId } = context.root.$route.params
      isLoadingHero.value = true
      getApiHero({ region, account, heroId })
        .then(({ data }) => {
          hero.value = data
        })
        .catch()
        .finally(() => {
          isLoadingHero.value = false
        })
    }

    function fetchHeroItemsData () {
      const { region, battleTag: account, heroId } = context.root.$route.params
      isLoadingItems.value = true
      getApiDetailedHeroItems({ region, account, heroId })
        .then(({ data }) => {
          items.value = data
        })
        .catch()
        .finally(() => {
          isLoadingItems.value = false
        })
    }

    fetchHeroData()
    fetchHeroItemsData()

    return {
      isLoadingHero,
      isLoadingItems,
      hero,
      items,
      detailHeader,
      detailStats
    }
  }
})
</script>
