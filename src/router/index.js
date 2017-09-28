import Vue from "vue";
import Router from "vue-router";
import tabList from "@/components/tabList";
import Heard from "@/components/heard";
import page1 from "@/components/page1";
import page2 from "@/components/page2";
import page3 from "@/components/page3";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: page1
    },
    {
      path: "/page1",
      component: page1
    },
    {
      path: "/page2",
      component: page2
    },
    {
      path: "/page3",
      component: page3
    }
  ]
});
