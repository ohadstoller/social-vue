<template>
  <div>
    <h1>{{ user.user.name }}'s Wall</h1>
    <PostCard v-for="post in post.posts" :key="post.id" :post="post" />
    <BaseIcon />
  </div>
</template>

<script>
import PostCard from "@/components/PostCard.vue";
import BaseIcon from "@/components/BaseIcon";
import { mapState } from "vuex";
import PostService from "@/services/PostService";

export default {
  components: {
    BaseIcon,
    PostCard,
  },

  computed: mapState(["post", "user"]),

  created() {
    this.$store.dispatch("post/fetchPosts");

    PostService.getPosts2()
      .then((response) => {
        console.log("get request from spring server: ", response.data);
      })
      .catch((error) => {
        console.log("An error accured: ", error.response);
      });
  },
};
</script>
