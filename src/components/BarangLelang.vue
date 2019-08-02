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
    <br />
    <b-container>
      <b-row>
        <b-col lg="3" md="4" sm="6" v-for="item in barang" v-bind:key="item.id">
          <b-card
            :title="item.nama_barang"
            :img-src="'http://admin.donasimoveon.com' + item.path_photo"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem; font-size:15px"
            img-height="150px"
            class="mb-2"
          >
            <b-card-text class="text">
              Pemilik barang:
              {{ item.id_pengguna }}
              <br />
              <b-card-text style="font-size:10px;">{{ item.created_at }}</b-card-text>
            </b-card-text>
            <b-card-text style="font-size:13px;">
              Harga Barang
              <span style="font-weight:bold">{{ item.harga_awal | currency }}</span>
            </b-card-text>
            <b-card-text>{{ item.deskripsi.substring(0,20) }}...</b-card-text>
            <router-link to="/detailbarang">
              <b-button class="btn-orange btn-sm">Ikut Lelang</b-button>
            </router-link>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <div class="footer">
      <center>
        <router-link to="/">Copyright © Donasi MoveOn 2019</router-link>
      </center>
    </div>
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
      .get(`http://127.0.0.1:8000/api/barang`)
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
text {
  font-size: 12px;
}
</style>
