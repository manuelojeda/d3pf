import Vue from 'vue'
import CompositionApi, { SetupContext } from '@vue/composition-api'
Vue.use(CompositionApi)

function useSetError (props, context: SetupContext) {
  const setError = (params) => {
    context.root.$store.commit('error/SET_ERROR', params)
  }

  return {
    setError
  }
}

export default useSetError
