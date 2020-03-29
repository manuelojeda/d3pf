<template>
  <div>
    <h1>Profile View</h1>
    <BaseLoading v-if="isLoading" />
    <template v-else-if="!isLoading && profileData !== null">
      <MainBlock
        :profile-data="profileData"
      />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import { getApiAccount } from '@/api/search'
import useSetError from '@/composables/useSetError'
import BaseLoading from '@/components/BaseLoading.vue'
import MainBlock from '@/components/MainBlock/Index.vue'

export default defineComponent({
  name: 'ProfileView',
  components: {
    BaseLoading,
    MainBlock
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

    fetchData()

    return {
      profileData,
      isLoading
    }
  }
})
</script>
