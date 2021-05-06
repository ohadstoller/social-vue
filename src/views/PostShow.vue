<template>
  <div>
    <div class="post-card -shadow">
      <h3 class="title">{{ post.title }}</h3>
      <b class="title">Wrriten by {{ post.user.name }}</b> <span> </span>
      <BaseIcon name="message-circle" width="14" height="14" />
      <span>{{ post.comments ? post.comments.length : 0 }} comments</span>
      <div class="title">{{ post.content }}</div>

      <!-- <div class="eyebrow">Time {{ post.time }} | Date {{ post.date }}</div> -->
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  props: ["id"],

  created() {
    this.$store.dispatch("post/fetchPost", this.id);
  },
  computed: mapState({
    post: (state) => state.post.post,
  }),
  methods: mapActions("post", ["fetchPost"]),
};
</script>

<style scoped>
.location {
  margin-bottom: 0;
}

.location > .icon {
  margin-left: 10px;
}

.post-header > .title {
  margin: 0;
}

.list-group {
  margin: 0;
  padding: 0;
  list-style: none;
}

.list-group > .list-item {
  padding: 1em 0;
  border-bottom: solid 1px #e5e5e5;
}
</style>
