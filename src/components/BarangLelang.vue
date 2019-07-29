<template>
  <div id="baranglelang" style="margin-top:100px;">
    <center>
      <h3>Selamat datang di Menu Lelang</h3>
      <h4>Dengan Lelang, Anda dapat menolong orang</h4>
      <!-- <button v-on:click="counter += 5000">Tawar</button>
    <p>Harga Baranggg Rp.{{ counter }},00</p>
      <br>-->
    </center>
    <br />
    <b-container>
      <b-row>
        <b-col lg="3" md="6" sm="12" v-for="item in barang" v-bind:key="item.id">
          <div
            class="detail-foto"
            style="width: 100%; height: 15rem; border:2 px solid black; 
              background-color: lightblue;"
          >
            <img v-bind:src="'http://admin.donasimoveon.com' + item.path_photo" alt style="width: 100%; height: 5rem; padding:5px;" />
          </div>
          <b-card
            v-bind:title="item.nama_barang"
            tag="article"
            style="max-width: 100%; font-style:bold;"
            class="mb-2"
          >
            <b-card-text>
              Pemilik barang:
              {{ item.id_pengguna }}
              <br />
              <small>dipublikasikan sejak {{ item.created_date }}</small>
            </b-card-text>
            <b-card-text>Harga Barang Rp.{{ item.harga_awal }}</b-card-text>
            <b-card-text>{{ item.deskripsi }}</b-card-text>
            <router-link to="/detailbarang">
              <b-button>Ikut Lelang</b-button>
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
  name: "baranglelang",
  data() {
    return {
      counter: 217300,
      barang: []
    };
  },
  props: {
    msg: String
  },
  created() {
    axios
      .get(`admin.donasimoveon.com/api/barang`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.barang = response.data.barang;
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
