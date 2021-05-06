import Vue from "vue";
import Vuex from "vuex";
// import PostService from "@/services/PostService";
import * as user from '@/store/modules/user.js'
import * as post from '@/store/modules/post.js'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    post
  },
  state: {
    feelings: [
      "HAPPY",
      "SAD",
      "MOTIVATED",
      "HOPEFUL",
      "EXCITED",
      "SICK"
    ],
  }
});
