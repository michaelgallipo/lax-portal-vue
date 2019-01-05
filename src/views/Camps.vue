<template>
  <div class="camps">
    <h1>Area Lacrosse Camps</h1>
      <div v-for="camp in camps" class="col-lg-12">
        <img  :src="camp.image_url" style="height: 300px" alt="Card image cap">
        <div class="card border-0" style="margin-bottom: 20px">
          <div class="card-body">
            <h3>{{camp.name}}</h3>
            <p class="card-text">{{camp.location}}</p>
            <p class="card-text">{{camp.start_date}} - {{camp.end_date}}</p>
            <p class="card-text">For players in Grades {{camp.grade_start}} - {{camp.grade_end}}</p>
<!--               <a :href="'http://' + camp.url" class="card-link">{{camp.name}}</a> -->
            <a href="#/camps" v-on:click="openLink(camp)" >{{camp.website}}</a>
          </div>
        </div>
      </div>
</div>
</template>

<script>
var axios = require("axios");
export default {
  data: function() {
    return {
      camps: []
    };
  },
  created: function() {
    axios.get("http://localhost:3000/api/camps").then(response => {
        this.camps = response.data;
        console.log(this.camps);
      }
    );
  },
  methods: {
    openLink: function(camp) {
      console.log(camp);
      window.open('https://' + camp.website)
    }
  },
  computed: {}
};
</script>
