import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import ClubTeams from "./views/ClubTeams.vue";
import HighSchool from "./views/HighSchool.vue";
import Camps from "./views/Camps.vue";
import Clinics from "./views/Clinics.vue";
import ClinicShow from "./views/ClinicShow.vue";
import Resources from "./views/Resources.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/clubteams",
      name: "clubteams",
      component: ClubTeams
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import( webpackChunkName: "about"  './views/About.vue')
    },
    {
      path: "/highschool",
      name: "highschool",
      component: HighSchool
    },
    {
      path: "/camps",
      name: "camps",
      component: Camps
    },
    {
      path: "/clinics",
      name: "clinics",
      component: Clinics
    },
    {
      path: "/clinics/:id",
      name: "clinic_show",
      component: ClinicShow
    },
    {
      path: "/resources",
      name: "resources",
      component: Resources
    }
  ]
});
