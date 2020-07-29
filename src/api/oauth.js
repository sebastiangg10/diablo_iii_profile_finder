import { post } from 'axios'

// !🔥 Estos datos deberían ser privados
const clientId = 'a772ec6ae142484cbcfa66359d83f8ca'
const clientSecret = 'kTQrE2RsATSbp6b867fo5X7OnjY4xxwj'

// {"access_token":"US0ZulLMDjL47AkiAeiCzf54gDWrpTdFiN","token_type":"bearer","expires_in":86399}%

// API url para oauth
const region = 'eu'
const API_URL = `https://${region}.battle.net/oauth/token`

function getToken () {
  // Nuevo objeto de tipo 'FormData', que es un conjunto de pares clave/valor
  const body = new FormData()

  body.append('grant_type', 'client_credentials')

  const config = {
    headers: { 'Content-Type': 'multipart/form-data' },
    auth: {
      username: clientId,
      password: clientSecret
    }
  }

  return post(API_URL, body, config)
}

export { getToken }
