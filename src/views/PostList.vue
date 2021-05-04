<template>

  <div>
    <h1>The Wall</h1>
    <PostCard v-for="post in posts" :key="post.id" :post="post" />
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
    PostCard
  },

  computed: mapState(["posts"]),

  created() {
    this.$store.dispatch("fetchPosts");


    PostService.getPosts2().then(response => {
        console.log("get request from spring server: ", response.data);
      }
    ).catch(error => {
      console.log("An error accured: ", error.response);
    });
  }
};
</script>
