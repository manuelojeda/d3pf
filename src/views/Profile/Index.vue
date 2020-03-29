<template>
  <div>
    <h2 class="my-4 font-diablo">
      {{
        profileData.battleTag
      }}
    </h2>
    <BaseLoading v-if="isLoading" />
    <template v-else-if="!isLoading && profileData !== null">
      <MainBlock
        :profile-data="profileData"
      />
      <ArtisansBlock
        :artisans-data="artisansData"
      />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from '@vue/composition-api'
import { getApiAccount } from '@/api/search'
import useSetError from '@/composables/useSetError'
import BaseLoading from '@/components/BaseLoading.vue'
import MainBlock from '@/components/MainBlock/Index.vue'
import ArtisansBlock from '@/components/ArtisansBlock/Index.vue'

export default defineComponent({
  name: 'ProfileView',
  components: {
    BaseLoading,
    MainBlock,
    ArtisansBlock
  },
  setup (props, context) {
    const profileData = ref<any>(null)
    const isLoading = ref<boolean>(true)

    const fetchData = async (): Promise<any> => {
      const hash = context.root.$route.hash
      const { region, battleTag: account } = context.root.$route.params
      getApiAccount(hash, { region, account })
        .then(({ data }) => {
          profileData.value = data
        })
        .catch((err) => {
          profileData.value = null

          const errObj = {
            routeParams: context.root.$route.params,
            message: err.message
          } as any

          if (err.response) {
            errObj.data = err.response.data
            errObj.status = err.response.status
          }

          useSetError(props, context).setError(errObj)

          context.root.$router.push({ name: 'Error' })
        })
        .finally(() => {
          isLoading.value = false
        })
    }

    const artisansData = computed(() => {
      return {
        blacksmith: profileData.value.blacksmith,
        blacksmithHardcore: profileData.value.blacksmithHardcore,
        jeweler: profileData.value.jeweler,
        jewelerHardcore: profileData.value.jewelerHardcore,
        mystic: profileData.value.mystic,
        mysticHardcore: profileData.value.mysticHardcore
      }
    })

    fetchData()

    return {
      profileData,
      artisansData,
      isLoading
    }
  }
})
</script>
