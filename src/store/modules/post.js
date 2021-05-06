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
        const i = state.posts.map(post => post.id).indexOf(payload);
        state.posts.splice(i, 1);
    }

}
export const actions = {

    fetchPosts({ commit }) {
        PostService.getPosts().then(response =>
            commit("SET_POSTS", response.data));
    },

    createPost({ commit }, post) {
        return PostService.postPost(post).then(
            () => {
                console.log("added new post: ", post);
                commit("ADD_POST", post);
            }
        );
    },
    createPost2({ commit }, post) {
        return PostService.postPost(post).then(
            (response) => {
                console.log("New req data: ", response.data);
                console.log("added new post: ", post);
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
        return PostService.deletePostApi(id).then(
            response => {
                console.log("was the post deleted: ", response.data);
                commit("REMOVE_POST", id);
            }
        ).then(() => {
            console.log('hello')

        }


        )

    }
}

export const getters = {
    getPostById: state => id => {
        return state.posts.find(post => post.id === id);
    }
}
