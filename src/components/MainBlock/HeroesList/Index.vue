<template>
  <div>
    <h2 class="my-4 font-diablo">Heroes List</h2>
    <b-table
      dark
      :fields="fields"
      :items="heroes"
      hover
      small
      striped
      stacked="sm"
    >
      <template v-slot:cell(name)="data">
        <HeroIco :hero="data.item"/>
      </template>
      <template v-slot:cell(class)="data">
        <HeroClassLevel :hero="{ class: data.item.class, level: data.item.level}"/>
      </template>
      <template v-slot:cell(kills)="data">
        {{ formatNumber(data.item.kills.elites) }}
      </template>
    </b-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
// eslint-disable-next-line no-unused-vars
import { BvTableField } from 'bootstrap-vue'
import HeroIco from './HeroIco.vue'
import HeroClassLevel from './HeroClassLevel.vue'
import { formatNumber } from '@/filters/numeral'

export default defineComponent({
  name: 'HeroesList',
  props: {
    heroes: {
      required: true,
      type: Array
    }
  },
  components: {
    HeroIco,
    HeroClassLevel
  },
  setup (props, context) {
    const fields = ref<Array<BvTableField>>([
      {
        key: 'name',
        label: 'Name'
      },
      {
        key: 'class',
        label: 'Class',
        sortable: true
      },
      {
        key: 'kills',
        label: 'Elite Kills',
        sortable: true
      }
    ])

    return {
      fields,
      formatNumber
    }
  }
})
</script>
