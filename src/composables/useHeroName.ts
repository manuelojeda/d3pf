import Vue from 'vue'
import CompositionApi from '@vue/composition-api'
import classes from '@/utils/heroClassess'

Vue.use(CompositionApi)

function useHeroName () {
  const classToName = (classSlug: string) => {
    return classes[classSlug]
  }

  return {
    classToName
  }
}

export default useHeroName
