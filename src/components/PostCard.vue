<template>


  <router-link class="post-link" :to="{name: 'post-show', params: {id: post.id}}">
    <div class="post-card -shadow">

      <h4 class="title"> {{ post.title }}</h4>
<!--      <div class="eyebrow"> Time {{ post.time }} | Date {{ post.date }}</div>-->
      <BaseIcon name="message-circle" width="14" height="14" />
<!--      <span>{{ post.comments.length ? post.comments.length : 0 }} comments</span>-->
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    post: Object
  }

};

</script>

<style scoped>
.post-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}

.post-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}

.post-card > .title {
  margin: 0;
}

.post-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>