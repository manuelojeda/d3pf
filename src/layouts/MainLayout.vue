<template>
  <div class="container">
    <header-bar />
    <router-view />
    <footer-bar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import HeaderBar from '@/components/HeaderBar/Index.vue'
import FooterBar from '@/components/Footer/Index.vue'

export default defineComponent({
  name: 'MainLayout',
  components: {
    HeaderBar,
    FooterBar
  }
})
</script>
