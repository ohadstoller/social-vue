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
      <h3>Where is your post?</h3>
      <div class="field">
        <label>Location</label>
        <input
          v-model="post.location"
          type="text"
          placeholder="Add a location"
        />
      </div>
      <h3>When is your post?</h3>
      <div class="field">
        <label>Date</label>
        <!--        <datepicker v-model="post.date" placeholder="Select a date"/>-->
      </div>
      <div class="field">
        <label>Select a time</label>
        <select v-model="post.time">
          <option v-for="time in times" :key="time">{{ time }}</option>
        </select>
      </div>
      <input type="submit" class="button -fill-gradient" value="Submit" />
    </form>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    const times = [];
    for (let i = 1; i <= 24; i++) {
      times.push(i + ":00");
    }
    return {
      post: this.createFreshPostObject(),
      times,
      feelings: this.$store.state.feelings,
      // feelings: ["Happy", "Sad", "Hopeful"]
    };
  },
  methods: {
    createPost() {
      this.$store
        .dispatch("createPost", this.post)
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
        // feeling: "",
        user: user,
        title: "",
        content: "",
        // location: "",
        // date: "",
        // time: "",
        // attendees: []
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
