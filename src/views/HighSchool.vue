<template>
  <div class="highschool">
    <div id="outerd1">
      <h3> Division One Standings</h3>
      <div id="innerd1">
        <iframe src="http://nhiaa.org/sports/standings/boys-lacrosse/division-1" id="d1"  scrolling="no"></iframe>
      </div>
    </div>
    <div id="outerd1">
      <h3> Division Two Standings</h3>
      <div id="innerd2">
        <iframe src="http://nhiaa.org/sports/standings/boys-lacrosse/division-2" id="d2"  scrolling="no"></iframe>
      </div>
    </div>
    <div id="outerd1">
      <h3> Division Three Standings</h3>
      <div id="innerd3">
        <iframe src="http://nhiaa.org/sports/standings/boys-lacrosse/division-3" id="d3"  scrolling="no"></iframe>
      </div>
    </div>
    <p>Standings sourced from NHIAA</p>
  </div>
</template>

<style>

#outerd1 {
margin-bottom: 20px;
position: relative;
}

#innerd1 {
    width:500px;
    height:350px;
    border:1px solid #000; 
    overflow:hidden;
    margin:auto;
}

#d1 {
    width:500px;
    height:1050px;
    margin-top:-725px;   
    border:0 solid;
}

#innerd2 {
    width:500px;
    height:480px;
    border:1px solid #000; 
    overflow:hidden;
    margin:auto;
}

#d2 {
    width:500px;
    height:1450px;
    margin-top:-725px;   
    border:0 solid;
}

#innerd3 {
    width:500px;
    height:195px;
    border:1px solid #000; 
    overflow:hidden;
    margin:auto;
}

#d3 {
    width:500px;
    height:1000px;
    margin-top:-725px;   
    border:0 solid;
}

</style>

<script>
// export default {
//   data: function() {
//     return {
//     table: "",
//     innerDoc: ""
//     }
//   },
//   created: function() {
//     this.table = document.getElementById('div.main-content');
//     console.log(this.table);
//   },
//   methods: {},
//   computed: {}
// };
</script>
