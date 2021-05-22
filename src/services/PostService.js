import axios from "axios";


const apiClient = axios.create({
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

  postPost(post) {
    return apiClient.post('/posts', post)
  },
  deletePostRequest(id) {
    return apiClient.delete(`/posts/${id}`)
  }




}