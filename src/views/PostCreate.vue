<template>
  <div>
    <form @submit.prevent="createPost">
      <label>Select a feeling</label>
      <select v-model="post.feeling">
        <option v-for="feeling in feelings" :key="feeling">
          {{ feeling }}
        </option>
      </select>
      <h3>Name & describe your post</h3>
      <div class="field">
        <label>Title</label>
        <input
          v-model="post.title"
          type="text"
          placeholder="Add an post title"
        />
      </div>
      <div class="field">
        <label>Description</label>
        <input v-model="post.content" type="text" placeholder="Add a content" />
      </div>
      <input type="submit" class="button -fill-gradient" value="Submit" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: this.createFreshPostObject(),
      feelings: this.$store.state.feelings,
    };
  },
  methods: {
    createPost() {
      this.$store
        .dispatch("post/createPost", this.post)
        .then(() => {
          this.$router.push({
            name: "post-show",
            params: {
              id: this.post.id,
            },
          });
          this.post = this.createFreshPostObject();
        })
        .catch(() => {
          console.log("An error happened while creating a new post ");
        });
    },

    createFreshPostObject() {
      const user = this.$store.state.user.user;
      const id = Math.floor(Math.random() * 10000000);
      return {
        id: id,
        feeling: "",
        user: user,
        title: "",
        content: "",
      };
    },
  },
};
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
</style>
