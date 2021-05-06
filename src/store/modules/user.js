export const namespaced = true;

export const state = {
    user: { id: "abc123", name: "Ohad" },
}


export const mutations = {

    ADD_USER(state, user) {
        state.user.name = user
    },
}

export const actions = {

    createUser({ commit }, user) {
        console.log("added new user: ", user);
        commit("ADD_USER", user);

    },

}