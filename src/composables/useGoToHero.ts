import Vue from 'vue'
import CompositionApi, { SetupContext } from '@vue/composition-api'

Vue.use(CompositionApi)

function useGoToHero (props, context: SetupContext) {
  function goToHero (heroId: string): void {
    const hash = context.root.$route.hash.replace('#', '-')
    const { region, battleTag } = context.root.$route.params

    context.root.$router.push(
      {
        name: 'Hero',
        params: {
          region,
          battleTag: `${battleTag}${hash}`,
          heroId
        }
      }
    )
  }

  return {
    goToHero
  }
}

export default useGoToHero
