<template>
  <div class="Galangdana" style="margin-top:100px;">
      <b-container class="rowing-set" >
        <b-row>
          <b-col sm="12" md="6" lg="4" v-for="item in galangdana" :key="item.id">
            <div class="gambar-galangdana" style="max-width:100%; height:12rem; background-color:pink; padding:4px;">
                 <img v-bind:src="item.path_photo" alt="foto-galangdana">
            </div>
            <b-card
              v-bind:title="item.judul"
              tag="article"
              style="width: 100%;"
              class="mb-2"
            >
              <b-card-text>
                {{ item.created_at }}
              </b-card-text>
              <b-card-text>
                {{ item.deskripsi }}
              </b-card-text>
              <h5> Dana terkumpul sebesar Rp. {{ item.dana_terkini }} dari {{ item.target_dana }}</h5>
              <p>Diterbitkan oleh {{ item.id_pengguna }}</p>
              <router-link to="/detailgalangdana">
               <b-button variant="white" style="background-color:orange; width:100%;">Selengkapnya</b-button>
              </router-link>
              
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name:'Galangdana',
  data() {
    return {
      galangdana: []
    };
  },
  props:{
    msg: String
  },
  created() {
    axios
      .get(`http://localhost:8001/api/galangdana`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.galangdana = response.data.galangdana;
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
}
  
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  text-align: center;
  font-family: Quicksand;
  width: 100%;
  /* border-collapse: collapse; */
  border: 2px solid grey;
  margin: 10px 10px 0 10px;
}

table th {
  border: 2px solid grey;
  text-transform: uppercase;
  text-align: left;
  /* background: lightblue; */
  color: black;
  padding: 5px;
  min-width: 30px;
}

table td {
  text-align: left;
  padding: 5px;
  border-right: 2px solid #7D82A8;
}
table td:last-child {
  border-right: none;
}
table tbody tr:nth-child(2n) td {
  background: #D4D8F9;
}

</style>
