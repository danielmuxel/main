<template>
  <div>
    <h2 class="text-2xl">Posts should appear here</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div
        v-for="post in posts"
        :key="post.id"
        class="p-4 rounded bg-gray-200 border-2 border-gray-400"
      >
        <h3 class="text-xl font-bold">{{ post.title }}</h3>
        <p>{{ post.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import PostService from "~/services/PostService";

export default {
  // necessary to use with fetch and without store
  // data() {
  //   return {
  //     posts: [],
  //   };
  // },
  async fetch({ store, error }) {
    try {
      // works
      // response = PostService.getPosts()
      // this.posts = response.data
      await store.dispatch("posts/getPosts");
    } catch (error) {
      error({
        message: "Could not fetch posts: " + error.message,
      });
    }
  },
  computed: {
    ...mapState({
      posts: (state) => state.posts.posts,
    }),
  },
};
</script>

<style>
</style>