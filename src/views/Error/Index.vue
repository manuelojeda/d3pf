<template>
  <div class="error-page m-5">
    <hr class="my-5">
    <div v-if="err">
      <h1 class="my-5">Error <span v-if="err.status">{{ err.status }}</span></h1>
      <div v-if="err.routeParams">
        <h2>Query Params:</h2>
        <ul class="list-unstyled">
          <li v-for="(val, key) in err.routeParams" :key="key">
            👉 {{ key.toUpperCase() }}: <span class="lead text-muted">{{ val }}</span>
          </li>
        </ul>

        <hr class="my-5">
      </div>

      <div v-if="err.data">
        <p class="display-4">
          <small>😐</small> {{ err.data.reason || err.message }}
        </p>
      </div>
      <div v-else>
        😐 {{ err.message }}
      </div>

    </div>
    <div v-else>
      <h1 class="my-5">Error Page</h1>
      <p class="lead">Are you lost? 🤔</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'
import useSetError from '@/composables/useSetError'

export default defineComponent({
  name: 'ErrorView',
  setup (props, context) {
    const err = computed(() => {
      return context.root.$store.state.error.error
    })

    function prepareLeave () {
      useSetError(props, context).setError(null)
    }

    return {
      err,
      prepareLeave
    }
  },
  beforeRouteLeave (to, from: any, next) {
    // prepareLeave()
    from.matched[0].instances.default.prepareLeave()
    next()
  }
})
</script>
