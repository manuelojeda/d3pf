import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const clientId: string = 'acd39013a6ec46cd85bf036d9bd462e6'
const clientSecret: string = 'lfCwqXcQo8ceI83MFFEqbGtb90ErjrVM'

const region = 'us'
const API_URL = `https://${region}.battle.net/oauth/token`

function getToken (): Promise<AxiosResponse> {
  const body: FormData = new FormData()
  body.append('grant_type', 'client_credentials')
  const config: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    auth: {
      username: clientId as string,
      password: clientSecret as string
    }
  }

  return axios.post(API_URL, body, config)
}

export {
  getToken
}
