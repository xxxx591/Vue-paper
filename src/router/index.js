import Vue from "vue";
import Router from "vue-router";
import tabList from "@/components/tabList";
import handInPapers from "@/components/handInPapers";
import submitPaper from "@/components/submitPaper";
import viewReport from "@/components/viewReport";
import newLibrary from "@/components/newLibrary";
import manageLibaray from "@/components/manageLibaray";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: handInPapers
    },
    {
      path: "/handInPapers",
      component: handInPapers
    },
    {
      path: "/submitPaper",
      component: submitPaper
    },
    {
      path: "/viewReport",
      component: viewReport
    },
    {
      path: "/newLibrary",
      component: newLibrary
    },
    {
      path: "/manageLibaray",
      component: manageLibaray
    }
  ]
});
