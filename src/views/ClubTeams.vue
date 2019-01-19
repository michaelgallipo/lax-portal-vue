<template>
  <div class="clubteams">
    <div class="container">
      <h1>Area Travel Club Teams</h1>
      <br>
      <div class="row">
        <div v-for="club in clubs" class="col-lg-6">
          <img  :src="club.image" style="height: 150px" alt="Card image cap">
          <div class="card border-0" style="margin-bottom: 20px">
            <div class="card-body" id="club">
              <h3>{{club.name}}</h3>
              <p class="card-text">{{club.location}}</p>
              <p class="card-text">{{club.grades}}</p>
<!--               <a :href="'http://' + club.url" class="card-link">{{club.name}}</a> -->
              <a href="#/clubteams" v-on:click="openLink(club)" >{{club.name}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.clubteams {
  background: white;
  color: #2c3e50;
}
#club {
  background: white;
  color: #2c3e50;
}
</style>

<script>
export default {
  data: function() {
    return {
      clubs: [
      {
        name: "Houlagan Lacrosse",
        location: "Dover, NH",
        url: "www.houlaganlacrosse.com",
        grades: "2019-2029",
        image:
          "https://static1.squarespace.com/static/57bbdbd4d2b8577af7088fee/t/5bcf7792a4222f722e6a9d99/1540325672995/HLEmblem.png?format=300w"
      },
      {
        name: "NH Tomahawks",
        location: "Bedford, NH",
        url: "www.nhtomahawks.com",
        grades: "2019-2028",
        image:
          "https://s3.amazonaws.com/sr-application/images/lacrosserecruits/2015/11/36865_36859_tomahawk4colorprocess_(1).jpg"
      },      
      {
        name: "4 Leaf Lacrosse",
        location: "Derry, NH",
        url: "www.4leaflax.org",
        grades: "2019-2027",
        image:
          "https://cdn4.sportngin.com/attachments/photo/9896/6870/_1AWeb_Logo_large.png"
      },
      {
        name: "3D New England",
        location: "Belmont, MA",
        url: "3dlacrosse.com/select/new-england",
        grades: "2019-2028",
        image:
          "https://3dlacrosse.com/sites/default/files/styles/event_image/public/3d%20NE_33.jpg?itok=wtfSSTrx"
      },
      ]
    };
  },
  created: function() {},
  methods: {
    openLink: function(club) {
      console.log(club);
      window.open('https://' + club.url)
    }
  },
  computed: {}
};
</script>
