import PostService from '@/services/PostService.js'

export const namespaced = true;

export const state = {
    posts: [],
    post: {}
}

export const mutations = {
    ADD_POST(state, post) {
        state.posts.push(post);
    },
    SET_POSTS(state, posts) {
        state.posts = posts;
    },
    SET_POST(state, post) {
        state.post = post
    },
    REMOVE_POST: (state, payload) => {
        const index = state.posts.map(post => post.id).indexOf(payload);
        state.posts.splice(index, 1);
    }

}
export const actions = {

    fetchPosts({ commit }) {
        PostService.getPosts().then(response =>
            commit("SET_POSTS", response.data));
    },


    createPost({ commit }, post) {
        return PostService.postPost(post).then(
            (response) => {
                console.log("New req data: ", response.data);
                commit("ADD_POST", post);
            }
        );
    },
    fetchPost({ commit, getters }, id) {
        let post = getters.getPostById(id)
        if (post) {
            commit('SET_POST', post)
        }
        else {
            PostService.getPost(id).then(response => {
                commit("SET_POST", response.data);
            });
        }
    },
    deletePost({ commit }, id) {
        return PostService.deletePostRequest(id).then(
            response => {
                console.log("was the post deleted: ", response.data);
                commit("REMOVE_POST", id);
            }
        )
    }
}

export const getters = {
    getPostById: state => id => {
        return state.posts.find(post => post.id === id);
    }
}
