import axios from "axios";


const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: "application/json",
    'Content-Type': 'application/json'
  }
})

const apiClient2 = axios.create({
  baseURL: 'http://localhost:8081/api/v1',
  withCredentials: false,
  headers: {
    Accept: "application/json",
    'Content-Type': 'application/json'
  }
})

export default {
  getPosts() {
    return apiClient.get('/posts')
  },
  getPosts2() {
    return apiClient2.get('/posts')
  },
  getPost(id) {
    return apiClient.get('/posts/' + id)
  },
  postPost(post) {
    return apiClient.post('/posts', post)
  },

  postPost2(post) {
    return apiClient2.post('/posts', post)
  }




}