import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

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
      username: process.env.VUE_APP_CLIENT_ID,
      password: process.env.VUE_APP_CLIENT_SECRET
    }
  }

  return axios.post(API_URL, body, config)
}

export {
  getToken
}
