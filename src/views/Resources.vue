import ('../assets')

<template>
  <div class="resources">
    <div class="container">
      <h1>Lacrosse Resources</h1>
      <br>
      <div class="row">
        <div v-for="resource in resources" class="col-lg-12">
          <img  v-bind:src="resource.image" style="height: 200px" alt="Card image Unavailable">
          <div class="card border-0" style="margin-bottom: 20px">
            <div class="card-body">
              <h2>{{resource.name}}</h2>
              <p class="card-text">{{resource.description}}</p>
<!--               <p class="card-text">{{club.grades}}</p> -->
<!--               <a :href="'http://' + club.url" class="card-link">{{club.name}}</a> -->
              <a href="#/resources" v-on:click="openLink(resource)" >{{resource.name}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/*.clubteams {
  background: white;
  color: #2c3e50;
}
#club {
  background: white;
  color: #2c3e50;
}*/
</style>

<script>
  import uslacrosse from '../assets/uslacrosse.jpg'
  import nhyla from '../assets/nhylalogo.jpg'
export default {
  data: function() {
    return {
      resources: [
      {
        name: "US Lacrosse",
        url: "https://www.uslacrosse.org",
        description: "As the sport's national governing body, US Lacrosse provides national leadership, structure and resources to fuel the sport's growth and enrich the experience of participants.",
        image:
          uslacrosse
      },
      {
        name: "New Hampshire Youth Lacrosse",
        url: "http://www.nhyla.org",
        description: "The New Hampshire Youth Lacrosse Association (NHYLA) was formed in 1994 and has grown as the vehicle for New Hampshire towns and programs to learn about the game of lacrosse, receive help launching lacrosse programs, and act as the guardian of the youth lacrosse game in New Hampshire. As a chapter of the national governing body, US Lacrosse, we adhere to its recommendations for organization and safety. Since its inception the NHYLA has promoted and supported boys and girls lacrosse with members increasing in number each year in both areas. We currently have over 36 towns/programs participating in the NHYLA with approximately 310 teams (approximately 35% girls teams and 65% boys teams) from the ages of 7 through 15 years old.",
        image:
          nhyla
          // "https://cdn.crowdrise.com/media/large/event_photo-55369b575e085.jpg"
      },      
      {
        name: "ESPN Lacrosse TV Schedule",
        url: "https://espnmediazone.com/us/press-releases/2019/02/espn-reveals-2019-college-lacrosse-schedule/",
        description: "One of the best ways to learn the sport of lacrosse is to watch it played at the highest levels. There are a number of great games being shown on the ESPN family of networks this season.",
        image:
          "https://laxbuzz.files.wordpress.com/2013/03/espn-lacrosse-e1363124348780.jpg"
      }
      // {
      //   name: "3D New England",
      //   location: "Belmont, MA",
      //   url: "3dlacrosse.com/select/new-england",
      //   grades: "2019-2028",
      //   image:
      //     "https://3dlacrosse.com/sites/default/files/styles/event_image/public/3d%20NE_33.jpg?itok=wtfSSTrx"
      // },
      ]
    };
  },
  created: function() {},
  methods: {
    openLink: function(resource) {
      console.log(resource);
      window.open(resource.url)
    }
  },
  computed: {}
};
</script>