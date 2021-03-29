import apiUrl from '../apiConfig'
import axios from 'axios'

export const bathroomIndex = user => {
  return axios({
    url: apiUrl + '/bathroom/',
    method: 'GET',
    headers: {
      'Authorization': `Token ${user.token}`
    }
  })
}

export const bathroomCreate = (bathroom, user) => {
  return axios({
    url: apiUrl + '/loos/',
    method: 'POST',
    headers: {
      'Authorization': `Token ${user.token}`
    },
    data: { bathroom }
  })
}