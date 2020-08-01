import { get } from 'axios'
import store from '../store'
import { locales } from '../utils/regions'

const protocol = 'https://'
const host = '.api.blizzard.com/'

/**
 * Returns the specified account profile.
 * GET – /d3/profile/{account}
 * Los parámetros que hemos obtenido a través de la URL
 *  - @param region {String}
 *  - @param account {String}
 * @returns {Promise}
 */
function getApiAccount ({ region, account }) {
  // Recuerso de la API a la que queremos acceder
  const resource = `d3/profile/${account}`
  // Locate
  const locate = locales[region]
  // Access Token
  const accessToken = store.state.oauth.accessToken

  // API URL completa
  const API_URL = `${protocol}${region}${host}${resource}/?locate=${locate}&access_token=${accessToken}`

  return get(API_URL)
}

export { getApiAccount }
