<template>
    <div class="detail-barang" style="margin-top:100px;">
        <b-container>
            <b-row>
                <b-col sm="12" md="12" lg="5">
                    <!-- <h3>{{ galang_dana.judul }}</h3> -->
                    <center>
                    <div class="detail-foto" style="width: 96%; height: auto; border:3 px solid grey;">
                    <img v-bind:src="urlWs+barang.path_photo" alt="" style="width: 100%; height: 100%; padding:5px;">
                    </div>
                    </center>
                </b-col>

                <b-col sm="12" md="12" lg="7">
                 <b-card style="margin-top:10px; font-family:Quicksand;">
                    <b-card-text style="font-size:22px; style:bold; ">
                    {{ barang.nama_barang }}
                    <p
                     style="font-size:12px;"
                    >Nama pemilik: {{ nama_pemilik }}</p>
                    <!-- <small>Harga barang:</small> -->
                    {{ barang.id_barang}}
                    <h3 v-if="statusLelang === 'Gagal'"> Rp. {{ barang.harga_awal }}</h3>
                    <h3 v-if="statusLelang === 'Sukses'"> Rp. {{ lelang.harga_akhir }}</h3>

                    </b-card-text>
                    
                    <p>Dipublikasikan sejak : {{ barang.created_at }} </p>
                    <center>
                    <b-button class="btn-donasi-red" v-on:click="barang.harga_awal += 5000">
                      <font-awesome-icon icon="gift" class="bar"></font-awesome-icon> Tawar 
                    </b-button>
                    <br>
                    <a href="whatsapp://send?text=The text to share!" data-action="share/whatsapp/share"><b-button class="btn-share-blue">
                        Bagikan
                    </b-button></a>
                    </center>                    
                 </b-card>
                </b-col>
            </b-row>
          
            <b-row>
            <b-col cols="12">
             <b-card text-variant="black" header="Deskripsi" header-bg-variant="orange"  class="text-center" style="margin-top:30px; width:100%; ">
                <b-card-text>{{ barang.deskripsi }}</b-card-text>
             </b-card>
             </b-col>
            </b-row>
            <br/>
            <center>
            <router-link to="/lelang">
            <b-button class="btn-donasi-grd">kembali ke menu lelang</b-button>
            </router-link>
            </center>
            
            <div class="sosmed">
              <center>
                <b-row>
                  <b-col sm="12" md="3" lg="3">
                    <img src="@/assets/img/logomuvon.png" alt="logo" />
                  </b-col>
                  <b-col sm="12" md="3" lg="3">
                    <p>Temukan kami di:</p>
                  </b-col>
                  <b-col sm="12" md="6" lg="6">
                    <div class="sosmed-logo">
                      <img src="@/assets/img/twiter.png" alt="twitter" />
                      <img src="@/assets/img/fb.png" alt="fb" />
                      <img src="@/assets/img/iglogo.png" alt="ig" />
                      <img src="@/assets/img/yutub.png" alt="youtube" />
                    </div>
                  </b-col>
                </b-row>
              </center>
            </div>
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
  mounted(){
    console.log('component mounted')
  },
  name:'detail-lelang',
  data() {
    return{
      pengguna: {
       id_pengguna:''  
      },
      barang: {},
      lelang:{},
      statusLelang: '',
      urlWs: localStorage.getItem('urlWs'),
      nama_pemilik:'',
    };
    
  },
  props: {
    msg: String
  },
  // nambahGoceng() {

  // },
  created() {
    const userData = JSON.parse(localStorage.getItem('user'))

    if (userData) {
        this.pengguna = userData;
      } else {
        axios.get(`${window.appUrl}/api/users`,{
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access_token') //the token is a variable which holds the token
          }
        })
        .then(response => {
          console.log(response.data);
          if(response.data.status){
            // alert('data user captured');
            this.pengguna = response.data.data
          }else{
            alert(response.data.message);
          }
        })
        .catch(e => {
          this.errors.push(e);
        });   
      }
     axios.all([
    axios.get(`${localStorage.getItem('urlWs')}/api/barang/` +this.$route.params.id),
    axios.get(`${localStorage.getItem('urlWs')}/api/lelang/check/`+this.pengguna.id_pengguna+`/`+this.$route.params.id),
    ])
    .then(axios.spread((barangres, lelangRes) => {
      // do something with both responses
      this.barang = barangres.data.barang_donasi;
      this.statusLelang = lelangRes.data.status;
      this.lelang = lelangRes.data.data;
      this.nama_pemilik = barangres.data.nama_pemilik;

      console.log(this.statusLelang);
    }))

      .catch(e => {
        this.errors.push(e);
      });

    },
  
}
</script>
<style scoped>
</style>
