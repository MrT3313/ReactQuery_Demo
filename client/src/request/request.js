// imports
import axios from 'axios'

// base url
const url = process.env.REACT_APP_DATABASE_URL

// request
const request = method => async(endpoint, body) => {
  console.log('THE URL', url)
  console.log('THE ENDPOINT', endpoint)
  console.log('THE BODY', body)

  // set headers
  const headers = {
    "Content-Type": "application/json"
  }

  // send request
  return axios
    .get(`${url}/${endpoint}`, { method, body, headers })
    .then(res => res.data)
    
}

export const get = request('GET')
export const post = request('POST')
export const put = request('PUT')
export const del = request('DELETE')