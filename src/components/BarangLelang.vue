<template>
  <div id="baranglelang" style="margin-top:100px;">
    <center>
    <h3>Selamat datang di Menu Lelang</h3>
    <h4>Dengan Lelang, Anda dapat menolong orang</h4>
    <!-- <button v-on:click="counter += 5000">Tawar</button>
    <p>Harga Baranggg Rp.{{ counter }},00</p>
    <br> -->
    </center>
    <b-container>
      <table class="tabel-baranglelang">
        <tr>
          <td>
            <div class="detail-foto" style="width: 100%; height: 17rem; border:2 px solid black; 
              background-color: lightblue;">
              <img v-bind:src="gambar_barang" alt="" style="width: 100%; height: 17rem; padding:5px;">
            </div>
            <b-card
              v-bind:title="nama_barang"
              tag="article"
              style="max-width: 100%; font-style:bold;"
              class="mb-2"
          >
              <b-card-text> <b>Pemilik barang
              {{ nama_donatur }} <br/>dipublikasikan sejak {{ date_barang }}</b>
              </b-card-text>
              <b-card-text>Harga Barang Rp.{{ harga_barang }}</b-card-text>
              <router-link to="/detailbarang"><b-button >
              Ikut Lelang
              </b-button></router-link>
            </b-card>
        </td>
        </tr>
      </table>
    </b-container>
  

  </div>
</template>

<script>


export default {
  name: 'baranglelang',
  data() {
    return{
      counter: 217300
    }
    
  },
  props: {
    msg: String
  }
   

}
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
