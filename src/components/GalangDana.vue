<template>
  <div class="Galangdana" style="margin-top:100px;">
    <center>
      <h3>Selamat datang di Menu Donasi</h3>
      <h4>Galang dana yang dapat dibantu dengan Donasi Anda</h4>
    </center>
    <br />
    <br />
    <b-container class="rowing-set">
      <b-row>
        <b-col sm="12" md="6" lg="4" v-for="item in galangdana" :key="item.id">
          <b-card
            :title="item.judul.substring(0,20)+'...'"
            :img-src="'http://admin.donasimoveon.com' + item.path_photo"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem; font-size:12px;"
            img-height="150px"
            class="mb-2"
          >
            <br />
            <b-card-text style="font-size:10px;">{{ item.created_at }}</b-card-text>
            <b-card-text style="font-size:13px;">{{ item.deskripsi.substring(0,100) }}...</b-card-text>
            <p>
              Dana terkumpul sebesar
              <span
                style="font-weight:bold"
              >{{ item.dana_terkini | currency }}</span>
              <br />dari
              <b>{{ item.target_dana | currency}}</b>
            </p>
            <p>Diterbitkan oleh {{ item.id_pengguna }}</p>
            <router-link to="/detgalangdana">
              <b-button class="btn-orange btn-sm">Selengkapnya</b-button>
            </router-link>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Galangdana",
  data() {
    return {
      galangdana: []
    };
  },
  props: {
    msg: String
  },
  created() {
    axios
      .get(`https://admin.donasimoveon.com/api/galangdana`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.galangdana = response.data.galangdana;
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
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
  border-right: 2px solid #7d82a8;
}
table td:last-child {
  border-right: none;
}
table tbody tr:nth-child(2n) td {
  background: #d4d8f9;
}
</style>
