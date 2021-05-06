<template>
  <div>
    <form @submit.prevent="createPost">
      <label>Select a feeling</label>
      <select v-model="post.feeling">
        <option v-for="feeling in feelings" :key="feeling">
          {{ feeling }}
        </option>
      </select>
      <!-- <h3>Name & describe your post</h3>
      <div class="field">
        <label>Title</label>
        <input
          v-model="post.content"
          type="text"
          placeholder="Add an post title"
        />
      </div> -->
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
      console.log("dispatching a post, ", this.post);
      this.$store
        .dispatch("post/createPost", this.post)
        .then(() => {
          this.$router.push({
            name: "post-show",
            params: {
              id: this.$store.state.post.post.id,
            },
          });

          this.post = this.createFreshPostObject();
        })
        .catch((error) => {
          console.log("An error happened while creating a new post ", error);
        });
    },

    createFreshPostObject() {
      const user = this.$store.state.user.user;

      return {
        feeling: "",
        name: user.name,
        email: user.name,
        dateTime: Date(Date.now()).toString(),
        content: "",
        comments: [
          { commentContent: "comment content", commentAuthor: "Ohad" },
          { commentContent: "comment content 2", commentAuthor: "Rami" },
        ],
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
