<template>
  <div class="clinics">
    <h1>Area Lacrosse Clinics</h1>
      <div v-for="clinic in clinics" class="col-lg-12">
        <img  :src="clinic.image_url" style="height: 300px" alt="Card image cap">
        <div class="card border-0" style="margin-bottom: 20px">
          <div class="card-body">
            <h3>{{clinic.name}}</h3>
            <h5 class="card-text">{{clinic.venue}}</h5>
            <p class="card-text" v-if="clinic.multiday === true">{{clinic.start_date}} - {{clinic.end_date}}</p>
            <p class="card-text" v-if="clinic.multiday === false">{{clinic.start_date}}</p>
            <p class="card-text">{{clinic.time_span}}</p>
            <p class="card-text">For players in Grades {{clinic.start_grade}} - {{clinic.end_grade}}</p>
            <p class="card-text">Clinic Type - {{clinic.clinic_type}}</p>
<!--               <a :href="'http://' + clinic.url" class="card-link">{{clinic.name}}</a> -->
            <a href="#/clinics" v-on:click="openLink(clinic)" >{{clinic.website}}</a>
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
      clinics: []
    };
  },
  created: function() {
    axios.get("http://localhost:3000/api/clinics").then(response => {
        this.clinics = response.data;
        console.log(this.clinics);
      }
    );
  },
  methods: {
    openLink: function(clinic) {
      console.log(clinic);
      window.open('https://' + clinic.website)
    }
  },
  computed: {}
};
</script>