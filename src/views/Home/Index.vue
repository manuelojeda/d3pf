<template>
  <div id="home">
    <home-title />
    <home-form />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import HomeForm from '@/views/Home/HomeForm.vue'
import HomeTitle from '@/views/Home/HomeTitle.vue'

export default defineComponent({
  name: 'Home',
  components: {
    HomeTitle,
    HomeForm
  }
})
</script>
