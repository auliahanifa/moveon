<template>
  <div class="Galangdana" style="margin-top:100px;">
    <center>
      <h3>Selamat datang di Menu Donasi</h3>
      <h4>Galang dana yang dapat dibantu dengan Donasi Anda</h4>
    </center>
    
    <b-container class="rowing-set">
      <b-row>
        
          <div v-if="galang_beasiswa != null">
            <!-- <h3>{{ galang_dana.judul }}</h3> -->
            <b-col sm="12" md="8" lg="8">
            <h3>{{galang_beasiswa.judul}}</h3>
            <div class="detail-foto" style="width: 100%; height: auto; border:2 px solid black;">
            <img v-bind:src="'https://admin.donasimoveon.com' + galang_beasiswa.path_photo" alt="" style="width: 100%; height: 23rem; padding:5px;">
            </div>
            </b-col>

            <b-col sm="12" md="12" lg="4">
            <b-card style="margin-top:10px; font-family:Quicksand, serif;">
            <h6>Siap Memberi Bantuan?</h6>
            <p>Ayo berdonasi menggunakan #DonasiMoveOn</p>
            <b-card-text style="font-size:22px; style:bold; ">
            Rp
            <span
              style="font-weight:bold;"
            >{{ galang_beasiswa.dana_terkini | currency }}</span>
            </b-card-text>
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
            <router-link to="/lelang"><b-button class="btn-donasi-red">
                Donasi Sekarang
            </b-button></router-link>
            
            <a href="whatsapp://send?text=The text to share!" data-action="share/whatsapp/share"><b-button class="btn-share-blue">
                Bagikan
            </b-button></a>
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
            <br />
            <p style="font-size:16px; font-weight:bold">{{galang_beasiswa.judul}}</p>
            <b-card-text>{{galang_beasiswa.deskripsi | subStr}}</b-card-text>
          </b-card>
        </b-col>
      </div>
      <div v-else>
        <h6>Saat ini Galang Dana Beasiswa Tidak Tersedia</h6>
      </div>
      </b-row>

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
  },
  created() {
    axios
      .get(`https://admin.donasimoveon.com/api/beasiswa`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.galang_beasiswa = response.data.galang_beasiswa;
        this.sisa_hari = response.data.sisa_hari;
        // this.onclick = parseInt(response.data.onclick); // kalau pas demo matiin yg ini aja
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
