<template>
  <div class="loading-wrapper text-center py-5">
    <div class="spinner-wrapper w-100">
      <b-spinner
        class="spinner"
        label="Loading"
        :type="type"
        :variant="variant"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'BaseLoading',
  props: {
    variant: {
      required: false,
      type: String as () => string,
      default: 'info',
      validator: (value) => {
        return [
          'primary',
          'secondary',
          'danger',
          'warning',
          'success',
          'info',
          'light',
          'dark'
        ].indexOf(value) !== -1
      }
    },
    type: {
      required: false,
      type: String,
      default: 'border',
      validator: (value) => {
        return ['border', 'grow'].indexOf(value) !== -1
      }
    }
  }
})
</script>

<style lang="scss"  scoped>
.spinner-wrapper {
  .spinner {
    width: 4rem;
    height: 4rem;
  }
}
</style>
