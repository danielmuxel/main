<template>
  <div class="container mx-auto">
    <h1 class="text-4xl text-blue-800 font-bold mb-4">Hello world</h1>
    <p class="mb-4">{{ message }}</p>
    <Posts />
    <!-- <div>
      <h2>other posts</h2>
      {{ posts }}
    </div> -->
  </div>
</template>

<script>
import Posts from "../components/posts.vue";
// import { mapState } from "vuex";

export default {
  data() {
    return {
      message: "Hello Vue!",
    };
  },
  components: { Posts },
  // async fetch({ store, error }) {
  //   try {
  //     await store.dispatch("posts/getPosts");
  //   } catch (error) {
  //     error({
  //       message: "Could not fetch posts: " + error.message,
  //     });
  //   }
  // },
  // computed: {
  //   ...mapState({
  //     posts: (state) => state.posts.posts,
  //   }),
  // },
};
</script>
