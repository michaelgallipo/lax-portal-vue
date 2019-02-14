<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/clubteams">Club Teams</router-link> |
      <router-link to="/camps">Camps</router-link> |
      <router-link to="/clinics">Clinics</router-link> |
      <router-link to="/highschool">High School</router-link> |
      <router-link to="/resources">Resources</router-link> 
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
/*  color: #2c3e50;*/
  color: white;
  background: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
/*  color: #2c3e50;*/
  color: white;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
