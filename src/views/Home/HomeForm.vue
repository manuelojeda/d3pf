<template>
  <div class="row">
    <form @submit.prevent="searchBattleTag" class="col-12">
      <div class="form-group mb-5">
        <label for="">
          BattleTag:
        </label>
        <input
          v-focus
          v-model="battleTag"
          type="text"
          class="form-control"
          placeholder="Format: Nickname#117"
          required
        >
      </div>
      <div class="form-group mb-5">
        <label for="">
          Region:
        </label>
        <select v-model="region" class="form-control">
          <option
            v-for="(value, index) in EnumRegion"
            :value="value"
            :key="index"
          >
            {{value}}
          </option>
        </select>
      </div>
      <div class="form-group mb-5">
        <button type="submit" class="btn btn-primary float-right">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import { EnumRegion } from '@/interfaces/Region'

export default defineComponent({
  name: 'HomeForm',
  setup (props, context) {
    const battleTag = ref<string>('')
    const region = ref<EnumRegion>(EnumRegion.US)

    const searchBattleTag = (): void => {
      const route = `/region/${region.value}/profile/${battleTag.value}`
      context.root.$router.push(route)
    }

    return {
      battleTag,
      region,
      EnumRegion,
      searchBattleTag
    }
  }
})
</script>
