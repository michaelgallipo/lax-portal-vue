<template>
  <div class="clinics">
    <h1>{{clinic.name}}</h1> <br>
      <div class="col-lg-12">
        <img  :src="clinic.image_url" style="height: 300px" alt="Card image cap">
        <div class="card border-0" style="margin-bottom: 20px">
          <div class="card-body">
            <p class="card-text">{{clinic.description}}</p>
            <h5 class="card-text">{{clinic.venue}}</h5>
            <p class="card-text">{{clinic.town}}, {{clinic.state}}</p>
            <p class="card-text" v-if="clinic.multiday === true">{{clinic.start_date}} - {{clinic.end_date}}</p>
            <p class="card-text" v-if="clinic.multiday === true">Total Sessions - {{clinic.no_sessions}}</p>
            <p class="card-text" v-if="clinic.multiday === false">{{clinic.start_date}}</p>
            <p class="card-text">{{clinic.time_span}}</p>
            <p class="card-text">For players in Grades {{clinic.start_grade}} - {{clinic.end_grade}}</p>
            <p class="card-text">Clinic Type - {{clinic.clinic_type}}</p>
            <p class="card-text">{{clinic.cost}}</p>
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
      clinic: {}
    };
  },
  created: function() {
    axios.get("http://localhost:3000/api/clinics/" + this.$route.params.id).then(response => {
        this.clinic = response.data;
        console.log(this.clinic);
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