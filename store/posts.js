import PostService from "~/services/PostService";

export const state = () => ({
  posts: [],
});

export const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts;
  },
};

export const actions = {
  async getPosts({ commit }) {
    const response = await PostService.getPosts();
    commit("SET_POSTS", response.data);
  },
};
