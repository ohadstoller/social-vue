<template>
  <div>
    <form @submit.prevent="createNewUser">
      <h3>Hey {{ user }}, whould you like to change your alias?</h3>
      <div class="field">
        <label>Type below:</label>
        <input
          v-model="newUser"
          type="text"
          placeholder="Claim your user name"
        />
      </div>
      <input type="submit" class="button -fill-gradient" value="Submit" />
    </form>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      user: this.$store.state.user.user.name,
      newUser: "",
    };
  },
  methods: {
    createNewUser() {
      if (!this.newUser) {
        console.log("You must pick a name first");
      } else {
        this.$store.dispatch("user/createUser", this.newUser);

        this.user = this.newUser;
      }
    },
  },
};
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
</style>
