<template>
  <div>
    <div class="post-card -shadow">
      <h4 class="title">{{ post.content }}</h4>
      Written by {{ post.name }} | Feeling {{ post.feeling.toLowerCase() }}
      <br />
      <BaseIcon name="message-circle" width="14" height="14" />
      <span>{{ post.comments ? post.comments.length : 0 }} comments</span>
      <br />
      <span class="dateTime">{{ post.dateTime.slice(0, 28) }}</span>
      <div>
        <div>
          <br />
          <button class="button" v-on:click="deletePost()">Delete</button>
        </div>
      </div>
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
  methods: {
    async deletePost() {
      await this.$store.dispatch("post/deletePost", this.id);
      await this.$router.push({ name: "post-list" });
    },

    ...mapActions("post", ["fetchPost"]),
  },
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

.dateTime {
  font-size: 12px;
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
