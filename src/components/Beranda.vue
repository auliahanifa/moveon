<template>
  <div class="Beranda">
    <div class="header-section">
      <h3>{{ header_text1 }} <br> {{ header_text1_a }} </h3>

      <!-- <h5>{{ header_text2 }}</h5> -->
      <!-- <div v-if="session != null"> -->
        <center>
        <p style="font-size:16px; color:white; font-style:bold;">Mulai donasikan barang anda disini</p></center>
        <router-link to="/donasi_barang">
          <b-button variant="outline" class="btn_app">{{ btn_donasibarang }}</b-button>
        </router-link>
    </div>
    <br><br>

    <b-container>
      <div class="body-cerita">
        <b-row>
          <b-col sm="12" md="7" lg="5" style="mb-3">
            <h3>{{ judul_section }}</h3>
            <h5>{{ deskripsi_section }}</h5>
            <center>
              <router-link to="/formgalangdanaa">
                <b-button class="btn-orange-stgh">{{ btn_mulaigd }}</b-button>
              </router-link>
            </center>
          </b-col>
          <b-col lg="6" md="5" sm="12">
            <center v-if="galang_beasiswa != null">
              <b-card
                :img-src="urlWs+galang_beasiswa.path_photo"
                img-alt="Image"
                img-top
                tag="article"
                style="text-align:left; height:500px;"
                class="mb-2 img-card"
              >
                <p style="font-size:16px; font-weight:bold">{{galang_beasiswa.judul}}</p>
                <p style="font-size:16px;">
                  Target Dana
                  <span
                    style="font-weight:bold;"
                  >{{galang_beasiswa.target_dana | currency}}</span>
                </p>
                <b-progress
                  :value="parseInt(galang_beasiswa.dana_terkini)"
                  :max="parseInt(galang_beasiswa.target_dana)"
                  class="mb-1"
                  variant="warning"
                  style="border-radius:10px;"
                ></b-progress>
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
                <router-link to="/donasi">
                  <b-button class="btn-orange">Lihat Semua</b-button>
                </router-link>
              </b-card>
            </center>
            <center v-else>
              <h6>Saat ini Galang Dana Beasiswa Tidak Tersedia</h6>
            </center>
          </b-col>
        </b-row>
      </div>
      <br><br>

      <div class="garis-orange" style="width: 100%;"></div>
      <div class="body-baranglelang">
        <br />
        <br />

        <h3>Ikuti lelang di moveon lalu salurkan uang anda untuk galang dana yang menjadi destinasi bantuan anda</h3>
        <b-row>
          <b-col >
          </b-col>
        </b-row>
        <br />
        <br />

        <center>
          <router-link to="/lelang">
            <b-button class="btn-donasi-orange">Lihat semua</b-button>
          </router-link>
        </center>
        <br><br>
        <div class="garis-orange" style="width: 100%;"></div>
        <br><br>        
        <div class="body-team">
          <center>
            <h3 style="border-bottom: 5px solid red; width:230px; ">Meet Our Team</h3>
            <br />
            <br />
            <b-row>
              <b-col class="col-sm-12 col-md-6 col-lg-6">
                <img src="@/assets/img/hanifa.png" alt="ava" />
                <h6>
                  Hanifa Aulia
                  <br />Progressive Web App Implementation
                </h6>
                <!-- <p>hanifalia91@gmail.com</p> -->
                <h6>
                  <a
                    href="https://www.linkedin.com/in/hanifa-aulia-473322166/"
                    target="__blank"
                    class="card-link"
                  >
                    <img src="@/assets/img/linkedin.png" alt="linkdin" />
                  </a>
                  <a href="https://www.instagram.com/heigun/" target="__blank" class="card-link">
                    <img src="@/assets/img/igteam.png" alt="ig" />
                  </a>
                </h6>
              </b-col>
              <b-col class="col-sm-12 col-md-6 col-lg-6">
                <img src="@/assets/img/esti.png" alt="ava" />
                <h6>
                  Esti Rosmana
                  <br />Multi Factors Evaluation Process Implementation
                </h6>
                <!-- <p>estirosmanasmkn1@gmail.com</p> -->
                <h6>
                  <a
                    href="https://www.linkedin.com/in/esti-rosmana-b60140129/"
                    target="__blank"
                    class="card-link"
                  >
                    <img src="@/assets/img/linkedin.png" alt="linkdin" />
                  </a>
                  <a href="https://www.instagram.com/estiros/" target="__blank" class="card-link">
                    <img src="@/assets/img/igteam.png" alt="ig" />
                  </a>
                </h6>
              </b-col>
            </b-row>
          </center>
        </div>

        <br><br>
        <div class="garis-orange" style="width: 100%;"></div>
        <br><br>        
        

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
      </div>
    </b-container>
    <div style="background-color:#414040; padding-top:10px; padding-bottom:5px">
      <center>
        <router-link
          to="/"
          style="color:white; text-decoration: none;"
        >Copyright © Donasi MoveOn 2019</router-link>
      </center>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "beranda",
  data() {
    return {
      img_galangdana: "",
      header_text1:
        "Setiap hari setiap manusia berkesempatan menjadi penolong bagi manusia lain",
      header_text1_a: "sudahkah anda mencoba?",
      header_text2:
        "Tidak hanya dengan uang, bahkan barang anda dapat begitu berarti bagi mereka",
      btn_donasibarang: "Donasi barang",
      btn_mulaigd: "Mulai galang dana",
      btn_lihatsemuagd: "Lihat selengkapnya",
      judul_section: "moveon punya cerita",
      deskripsi_section:
        "kumpulan kisah inspiratif yang membuat kami percaya, bahwa hal baik dapat dimulai kapan dan dimana saja. setiap manusia diberikan kesempatan untuk ikut berkontribusi dan menginspirasi",
      dana_target: "",
      nama_fundraiser: "",
      galang_beasiswa: {},
      sisa_hari: "",
      avatar_admin: "",
      nama_admin: "",
      barang:[],
      urlWs: localStorage.getItem('urlWs')
     
    };
  },
  created() {
    axios.all([
    axios.get(`${localStorage.getItem('urlWs')}/api/beasiswa`),  
    axios.get(`${localStorage.getItem('urlWs')}/api/barang`),
    // axios.get(`${localStorage.getItem('urlWs')}/api/getSession`),
    ])
    .then(axios.spread((beasiswaRes, barangRes, getSessionRes) => {
      // do something with both responses
      this.galang_beasiswa = beasiswaRes.data.galang_beasiswa;
      this.sisa_hari = beasiswaRes.data.sisa_hari;
      this.avatar_admin = beasiswaRes.data.avatar_admin;
      this.nama_admin = beasiswaRes.data.nama_admin;
      this.barang = barangRes.data.barang;
      // this.session = getSessionRes.data.session;
    }))
    .catch(e => {
    this.errors.push(e);
    });
  }
  
  // created() {
  //   axios
  //     .get(`https://admin.donasimoveon.com/api/beasiswa`)
  //     .then(response => {
  //       // JSON responses are automatically parsed.
  //       this.galang_beasiswa = response.data.galang_beasiswa;
  //       this.sisa_hari = response.data.sisa_hari;
  //       this.avatar_admin = response.data.avatar_admin;
  //       this.nama_admin = response.data.nama_admin;
  //     })
  //     .catch(e => {
  //       this.errors.push(e);
  //     });
  // },
  // created(){
  //   axios.get(`https://admin.donasimoveon.com/api/getSession`)
  //     .then(response => {
  //       // JSON responses are automatically parsed.
  //       this.session = response.session;
  //       // alert(JSON.stringify(response));
  //     })
  //     .catch(e => {
  //       this.errors.push(e);
  //     });
  // }
  ,
  filters: {
    subStr: function(string) {
      return string.substring(0, 100) + "...";
    }
  }
};
</script>
<style scoped>
hr {
  border: 3px solid orange;
  width: 100%;
}

.header-section {
  background-image: url("../assets/img/kids.jpg");
  background-repeat: no-repeat;
  padding-bottom: 10px;
  margin-bottom: 50px;
}

.header-section h3 {
  font-family: Quicksand;
  font-style: bold;
  font-size: 36px;
  line-height: 37px;
  text-align: center;
  padding-top: 140px;
  padding-left: 100px;
  padding-right: 100px;
  padding-bottom: 40px;
  color: white;
  margin: auto;
}

.btn_app {
  width: 247px;
  height: 48px;
  background: rgba(251, 87, 76);
  border: 2px solid #f64a00;
  box-sizing: border-box;
  border-radius: 30px;
  font-family: Quicksand;
  font-style: normal;
  /* font-weight: 640; */
  font-size: 20px;
  line-height: 22px;
  text-align: center;
  color: #ffffff;
  display: block;
  margin-left: auto;
  margin-right: auto;

  margin-bottom: 50px;
}

button a {
  color: #ffffff;
}

.body-cerita h3 {
  background-color: yellow;
  font-style: bold;
  font-family: Quattrocento Sans;
  font-size: 48px;
  line-height: 33px;
  text-align: left;
  color: #2f7196;
}

.body-cerita h5 {
  /* margin: 6px 30px 28px 10px ; */
  font-family: Quicksand;
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  line-height: 35px;
  color: #2f7196;
  text-align: left;
}

h6,
.h6 {
  font-size: 20px;
  text-align: center;
}

/* -- Setting card img --  */

.btn-primary:hover {
  color: #fff;
  background: #f46158;
  border: 2px solid #f64a00;
}

.body-baranglelang h3 {
  width: 70%;
  height: auto;
  font-family: Quicksand;
  /* font-style: normal; */
  font-size: 24px;
  line-height: 35px;
  /* display: flex; */
  /* text-align: center; */
  color: #2f7196;
}

.team-logo img {
  background-color: transparent;
  width: 60px;
  height: 60px;
  padding: 8px;
}

.body-team h6 {
  padding: 8px;
  width: 280px;
  font-family: Quattrocento Sans;
}
.body-team br {
  margin-top: 10px;
}

.body-team p {
  width: 240px;
  border: 2px solid #f64a00;
  padding: 1px;
}

.body-team img {
  padding: 6px;
}

.body-team a img {
  width: 48px;
  height: auto;
}
.body-baranglelang {
  background-color: #ffffff;
}

.body-baranglelang .btn-secondary {
  color: #fff;
  background-color: #f64a00;
  border-color: #f46158;
  margin: auto;
}

div.card {
  width: 80%;
  position: center;
}
</style>
