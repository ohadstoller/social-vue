import Vue from "vue";
import VueRouter from "vue-router";
import PostCreate from "../views/PostCreate.vue";
import PostList from "../views/PostList.vue";
import PostShow from "../views/PostShow.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "post-list",
    component: PostList,
  },
  {
    path: "/post/:id",
    name: "post-show",
    component: PostShow,
    props: true,
  },
  {
    path: "/post/create",
    name: "post-create",
    component: PostCreate,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
