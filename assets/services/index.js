import axios from 'axios'

export const API = 'https://jsonplaceholder.typicode.com'


export function getPosts () {
  return axios({
    url: `${API}/posts/`,
    method: 'GET'
  }).then (result => {
    return result.data
  })
}
export function getPost(id) {
  return axios({
    url: `${API}/posts/${id}`,
    method: 'GET'
  }).then (result => {
    return result.data
  })
}
export function getUserPosts (id) {
  return axios({
    url: `${API}/posts?userId=${id}`,
    method: 'GET'
  }).then (result => {
    return result.data
  })
}
export function getUsers () {
  return axios({
    url: `${API}/users/`,
    method: 'GET'
  }).then (result => {
    return result.data
  })
}
export function getComments (id) {
  return axios({
    url: `${API}/posts/${id}/comments`,
    method: 'GET'
  }).then (result => {
    return result.data
  })
}

