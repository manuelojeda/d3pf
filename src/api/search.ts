import axios from 'axios'
import store from '@/store'
import { locales } from '@/utils/regions'

const protocol = 'https://'
const host = '.api.blizzard.com/'

/**
 * Returns the specified account profile.
 * GET – /d3/profile/{account}
 * @param region {String}
 * @param account {String}
 * @returns {Promise}
 */
function getApiAccount (
  hash: string,
  { region, account }: { region:string, account: string }
) {
  const newHash = hash.replace('#', '-')
  const resource: string = `d3/profile/${account}${newHash}`

  const locale = locales[region.toLowerCase()]
  const accessToken = store.state.oauth.accessToken
  const API_URL: string = `${protocol}${region.toLowerCase()}${host}${resource}/?locale=${locale}&access_token=${accessToken}`

  return axios.get(API_URL)
}

function getApiHero ({ region, account, heroId }: { region: string, account: string, heroId: string }) {
  const resource = `d3/profile/${account}/hero/${heroId}`
  const locale: string = locales[region.toLowerCase()]
  const accessToken: string = store.state.oauth.accessToken
  const API_URL = `${protocol}${region.toLowerCase()}${host}${resource}/?locale=${locale}&access_token=${accessToken}`

  return axios.get(API_URL)
}

function getApiDetailedHeroItems ({ region, account, heroId }: { region: string, account: string, heroId: string }) {
  const resource = `d3/profile/${account}/hero/${heroId}/items`
  const locale: string = locales[region.toLowerCase()]
  const accessToken: string = store.state.oauth.accessToken
  const API_URL = `${protocol}${region.toLowerCase()}${host}${resource}/?locale=${locale}&access_token=${accessToken}`

  return axios.get(API_URL)
}

export {
  getApiHero,
  getApiDetailedHeroItems,
  getApiAccount
}
