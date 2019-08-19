<template>
  <div id="baranglelang" style="margin-top:100px;">
    <center>
      <div class="head-donasi" style="width:90%;">
        <h3>Selamat datang di Menu Lelang</h3>
        <h4>Dengan Lelang, Anda dapat menolong orang</h4>
      </div>
    </center>
    <br />
    <br />
    <b-container>
      <b-row>
        <b-col lg="4" md="4" sm="6" v-for="item in barang" v-bind:key="item.id">
          <b-card
            :title="item.nama_barang"
            :img-src="urlWs+item.path_photo"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 25rem; font-size:15px;"
            class="mb-3"
          >
            <b-card-text class="text">
              Pemilik barang:
              {{ item.id_pengguna }}
              {{ nama }}
              <br />
              <b-card-text style="font-size:10px;">{{ item.created_at }}</b-card-text>
            </b-card-text>
            <b-card-text style="font-size:13px;">
              Harga Barang
              <span style="font-weight:bold">{{ item.harga_awal | currency }}</span>
            </b-card-text>
            <b-card-text>{{ item.deskripsi.substring(0,20) }}...</b-card-text>
            <router-link :to="{name: 'DetailLelang', params: { id: item.id_barang } }">
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
      item: {},
      nama:"",
      urlWs: localStorage.getItem('urlWs'),
      counter: 217300,
      barang: [
        
      ]
    };
  },
  props: {
    msg: String
  },
  created() {
    axios
      .get(`${localStorage.getItem('urlWs')}/api/barang`)
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

.card-body{
  height:260px;
}

.card-img-top {
  height:235px;
  border: 1px solid goldenrod;
}
.card-title {
  height:30px;
}
</style>
