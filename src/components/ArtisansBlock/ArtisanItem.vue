<template>
  <div class="artisan-item d-flex bg-dark p-3 mb-2 rounded">
    <div class="icon d-flex justify-content-center align-items-center rounded-circle mr-2">
      <!-- <span class="display-4">{{ artisan.emoji }}</span> -->
      <font-awesome-icon :icon="artisan.icon" class="fa-2x" :style="{color: artisan.color}"/>
    </div>
    <div class="content">
      <h5 class="font-weight-bold text-capitalize">
        {{ artisan.name }}
      </h5>

      <p
        v-if="artisan.normal.level"
        class="m-0 font-weight-normal"
      >
        Level {{ artisan.normal.level }} (normal)
      </p>

      <p v-if="artisan.hardcore.level" class="mb-0 font-weight-normal text-muted">
        Level {{ artisan.hardcore.level }}
        <span class="text-danger">(hardcore)</span>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'ArtisanItem',
  props: {
    artisan: {
      required: true,
      type: Object
    }
  }
})
</script>

<style lang="stylus" scoped>
.artisan-item
  .icon
    width 80px
    height 80px
    background-color #404850
</style>
