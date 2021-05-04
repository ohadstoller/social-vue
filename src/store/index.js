import Vue from "vue";
import Vuex from "vuex";
import PostService from "@/services/PostService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: { id: "abc123", name: "Ohad" },
    feelings: [
      "Happy",
      "Sad",
      "Hopeful"
    ],
    posts: [],
    post: {}
  },
  mutations: {
    ADD_POST(state, post) {
      state.posts.push(post);
    },
    SET_POSTS(state, posts) {
      state.posts = posts;
    },
    SET_POST(state, post) {
      state.post = post
    },

  },
  actions: {

    fetchPosts({ commit }) {
      PostService.getPosts().then(response => commit("SET_POSTS", response.data));
    },

    createPost({ commit }, post) {
      return PostService.postPost(post).then(
        () => {
          console.log("added new post: ", post);
          commit("ADD_POST", post);
        }
      );
    },
    fetchPost({commit, getters}, id) {
      let post = getters.getPostById(id)
      if (post){
        commit('SET_POST', post)
      }
      else {
        PostService.getPost(id).then(response => {
          commit("SET_POST", response.data);
        });
      }
    }
  },
  getters: {
    getPostById: state => id => {
      return state.posts.find(post => post.id === id);
    }
  }
});
