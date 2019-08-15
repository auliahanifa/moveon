<template>
  <div class="Galangdana" style="margin-top:100px;">
    <center>
      <h3>Selamat datang di Menu Donasi</h3>
      <h4>Galang dana yang dapat dibantu dengan Donasi Anda</h4>
    </center>
    <br>

    <b-container >
      <b-row v-if="galang_beasiswa != null">
        
          <!-- <div > -->
            <!-- <h3>{{ galang_dana.judul }}</h3> -->
            <b-col sm="12" md="8" lg="6">
            <h3>{{galang_beasiswa.judul}}</h3>
            <div class="detail-foto" style="width: 100%; height: auto; border:2 px solid black;">
            <img v-bind:src="'https://admin.donasimoveon.com' + galang_beasiswa.path_photo" alt="" style="width: 100%; height: 23rem; padding:5px;">
            </div>
            </b-col>

            <b-col sm="12" md="12" lg="6">
            <b-card style="margin-top:10px; font-family:Quicksand, serif;">
            <h6>Siap Memberi Bantuan?</h6>
            <p>Ayo berdonasi menggunakan #DonasiMoveOn</p>
            <p style="font-size:16px;">
              Target Dana
              <span
                style="font-weight:bold;"
              >{{galang_beasiswa.target_dana | currency}}</span>
            </p>

            <b-progress
              :value="parseInt(galang_beasiswa.dana_terkini)"
              :max="parseInt(galang_beasiswa.target_dana)"
              class="mb-3"
              variant="warning"
              style="border-radius:10px;"
            ></b-progress>
            
            <p>Waktu penggalangan dana tinggal {{ sisa_hari }} hari</p>
            <div class="row">
              <div class="col-md-8">
                <p style="font-size:14px;">
                  <span style="font-weight:bold;">{{ galang_beasiswa.dana_terkini | currency }}</span> terkumpul
                </p>
              </div>
              <div class="col-md-4">
                <p style="font-size:14px; text-align: right">
                  <span style="font-weight:bold; ">{{ sisa_hari }}</span> Hari Lagi
                </p>
              </div>
            </div>
            <router-link to="/lelang"><b-button class="btn-donasi-red">
                Donasi Sekarang
            </b-button></router-link>
            <br>
            <a href="whatsapp://send?text=The text to share!" data-action="share/whatsapp/share"><b-button class="btn-share-blue" style="margin-top:8px;">
                Bagikan
            </b-button></a>
            
            <!-- <p style="font-size:16px; font-weight:bold">{{galang_beasiswa.judul}}</p> -->
            <b-card-text style="margin-top:5px;">{{galang_beasiswa.deskripsi | subStr}}</b-card-text>
          </b-card>
        </b-col>
      <!-- </div> -->
      </b-row>
      <b-row v-else>
        <h6>Saat ini Galang Dana Beasiswa Tidak Tersedia</h6>
      </b-row>
      
      <br><br>
      <div class="garis-orange" style="width:100%;"></div>
      <br>
      <center>
      <h3>Saatnya Wujudkan Mimpi dengan Berkontribusi!</h3>
      </center>
        <br>
      <div class="container">
      <b-row>
        <b-col sm="12" md="12" lg="4" v-for="item in galangdana" :key="item.id">
          <b-card
            :title="item.judul.substring(0,100)"
            :img-src="'https://admin.donasimoveon.com' + item.path_photo"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem; text-size:12px;"
            img-height="160px"
            class="mb-2"
          >
            <br />
            <b-progress
              :value="parseInt(item.dana_terkini)"
              :max="parseInt(item.target_dana)"
              class="mb-2"
              variant="warning"
              style="border-radius:10px;"
            ></b-progress>
            
            <p>
              Dana terkumpul sebesar
              <span
                style="font-weight:bold"
              >{{ item.dana_terkini | currency }}</span>
              <br />dari
              <b>{{ item.target_dana | currency}}</b>
            </p>
            <b-card-text style="font-size:10px;">
              <b-row>
                <b-col sm="6" md="6" lg="6">{{ item.created_at }}</b-col>
                <b-col sm="6" md="6" lg="6" float="right">{{ sisa_hari }} hari</b-col>
              </b-row>
            </b-card-text>
            <p>Diterbitkan oleh {{ item.id_pengguna }}</p>
            <b-img
              :src="'https://admin.donasimoveon.com' + pengguna_pathphoto"
              rounded="circle"
              width="30"
            ></b-img>
            <span
              style="font-size:10px; padding-left:10px; font-weight:bold"
            >{{ nama_pemilik }}</span>
            <router-link :to="{name: 'GalangdanaDetail', params: { id: item.id_galangdana } }">
              <b-button class="btn-orange btn-sm">Selengkapnya</b-button>
            </router-link>
          </b-card>
        </b-col>
      </b-row>
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
  name: "Galangdana",
  data() {
    return {
      galangdana: [],
      nama_pemilik:'',
      pengguna_pathphoto:'',
    };
  },
  props: {
    msg: String
  },
  created() {
    axios.all([
    axios.get(`https://admin.donasimoveon.com/api/beasiswa`),
    axios.get(`https://admin.donasimoveon.com/api/galangdana`)
    ])
    .then(axios.spread((beasiswaRes, galangdanaRes) => {
      // do something with both responses
      this.galang_beasiswa = beasiswaRes.data.galang_beasiswa;
      this.sisa_hari = beasiswaRes.data.sisa_hari;
      this.galangdana = galangdanaRes.data.galangdana;
      // alert(this.galang_beasiswa);
    }))
    .catch(e => {
      // alert(e);

    this.errors.push(e);
    });
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.card-title{
  height:25px;
  font-size: 21px;
}

.card mb-2{
  height:520px;
}
</style>
