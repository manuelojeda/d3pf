<template>
  <div id="app">
    <LoadLayout v-if="isLoading">
      <BaseLoading/>
    </LoadLayout>

    <MainLayout v-else/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MainLayout, LoadLayout } from '@/layouts/'
import BaseLoading from '@/components/BaseLoading.vue'

export default Vue.extend({
  name: 'App',
  components: {
    MainLayout,
    LoadLayout,
    BaseLoading
  },
  computed: {
    isLoading () {
      return this.$store.state.loading.isLoading
    }
  }
})
</script>

<style lang="scss" scoped>
#app {
  padding: 60px 0;
  color: #ffffff; // Le ponemos un color de letra blanco para que resalte
  background-color: #15202b; // Le cambiamos el color de fondo por un azul marino oscuro
}
</style>
