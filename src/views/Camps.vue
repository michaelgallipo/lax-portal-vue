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
            <a href="#/camps" v-on:click="openLink(camp)" >{{camp.website}}</a><br><br>
            <button class="btn btn-outline-primary btn-md" v-on:click="setCamp(camp)" data-toggle="modal" data-target="#campShow">More Info</button>
          </div>
        </div>
      </div>

        <!-- Modal -->
      <div class="modal fade" id="campShow" tabindex="-1" role="dialog" aria-labelledby="campShowLongTitle" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content" style="background: #cce6ff">
            <div class="modal-header">
              <h5 class="modal-title" style="color:black">{{this.camp.name}}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body" style="color:black; text-align: left">
              <div>
                <p>{{camp.description}}</p>
                <p>{{camp.location}}</p>
                <p>{{camp.start_date}} - {{camp.end_date}}</p>
                <p>Hours: {{camp.time_span}}</p>
                <p>Cost: {{camp.cost}}</p>
                <p v-if="camp.overnight">Overnight Camp</p>
                <p>Grades: {{camp.grade_start}} - {{camp.grade_end}}</p>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

</div>
</template>

<style>
/*.camps {
  color: white;
  background: #2c3e50;
}*/
</style>

<script>
var axios = require("axios");
export default {
  data: function() {
    return {
      camps: [],
      camp: {}
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
    },
    setCamp: function(camp) {
      this.camp = camp;
      console.log(this.camp);
    },
  },
  computed: {}
};
</script>
