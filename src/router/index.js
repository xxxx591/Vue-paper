import Vue from "vue";
import Router from "vue-router";
import tabList from "@/components/tabList";
<<<<<<< Updated upstream
import handInPapers from "@/components/handInPapers";
import submitPaper from "@/components/submitPaper";
import viewReport from "@/components/viewReport";
import newLibrary from "@/components/newLibrary";
import manageLibaray from "@/components/manageLibaray";
=======
import Heard from "@/components/heard";
import page1 from "@/components/page1";
import page2 from "@/components/page2";
import page3 from "@/components/page3";
>>>>>>> Stashed changes

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
<<<<<<< Updated upstream
      component: newLibrary
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
=======
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
>>>>>>> Stashed changes
    }
  ]
});
