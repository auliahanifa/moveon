<template>
  <div class="Beranda">
    <b-container class="header-section">
      <b-row>
        <h3>{{ header_text1 }}</h3>
      </b-row>
      <h4>{{ header_text1_a }}</h4>
      <h5>{{ header_text2 }}</h5>
      <router-link to="/donasi_barang">
        <b-button variant="outline" class="btn_app">{{ btn_donasibarang }}</b-button>
      </router-link>
      <div class="batasan"></div>
    </b-container>

    <center>
      <b-container class="body-cerita">
        <b-row>
          <b-col sm="12" md="6" lg="6">
            <h3>{{ judul_section }}</h3>
            <h5>{{ deskripsi_section }}</h5>
            <router-link to="/formgalangdanaa">
              <b-button variant="primary" class="btn_app2">{{ btn_mulaigd }}</b-button>
            </router-link>
          </b-col>
          <b-col sm="12" md="6" lg="6">
            <b-card
              overlay
              img-src="@/assets/img/charity.jpg"
              img-alt="Card Image"
              text-variant="white"
              title="Nama Galang Dana"
              v-bind:sub-title="dana_target"
            >
              <b-card-text>
                {{ nama_fundraiser }}
                <br />
                <center>
                  <router-link to="/donasi">
                    <b-button>Lihat semua</b-button>
                  </router-link>
                </center>
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </center>
    <hr />

    <b-container class="body-baranglelang">
      <br />
      <br />

      <b-row>
        <h3>Ikuti lelang di moveon lalu salurkan uang anda untuk galang dana yang menjadi destinasi bantuan anda</h3>
      </b-row>
      <br />

      <br />

      <center>
        <router-link to="/lelang">
          <b-button>Lihat semua</b-button>
        </router-link>
      </center>
    </b-container>

    <hr />

    <b-container class="body-team">
      <center>
        <h3 style="border-bottom: 5px solid red; width:230px; padding:10px;">Meet Our Team</h3>
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
    </b-container>
    <hr />

    <center>
      <b-container class="sosmed">
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
      </b-container>
    </center>

    <div style="background-color:#414040; padding-top:10px; padding-bottom:5px">
      <center>
        <p style="color:white; font-size:12px">Copyright © Moveon Team 2019</p>
      </center>
    </div>
  </div>
</template>
<script>
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
      deskripsi_brg: "ahkahsashk kshdksdskdhsd",
      harga_brg: "Rp. 298,000",
      nama_pemilik: "Anastasya Widyarini",
      dana_target: "",
      nama_fundraiser: ""
    };
  }
};
</script>
<style scoped>
.Beranda {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif, Quicksand; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  position: relative;
  width: 100%;
}

hr {
  border: 3px solid orange;
  width: 88%;
}

.header-section {
  margin: auto;
  background-image: url("../assets/img/kids.jpg");
  /* background-size: auto; */
  position: center;
  background-size: cover;
  min-width: 100%;
  min-height: 100%;
  background-repeat: no-repeat;
  padding: 10px;
}

.header-section h3 {
  font-family: Quattrocento Sans;
  font-style: italic;
  font-weight: normal;
  font-size: 36px;
  line-height: 37px;
  text-align: center;
  padding-top: 170px;
  color: white;
  margin: auto;
}

.header-section h4 {
  font-family: Quattrocento Sans;
  font-style: italic;
  font-weight: bold;
  font-size: 36px;
  line-height: 47px;
  text-align: center;

  color: #f79317;
}

.header-section h5 {
  font-family: Quicksand;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 30px;
  text-align: center;
  color: #d3c4c4;
}

.btn_app {
  width: 287px;
  height: 49px;
  background: rgba(251, 87, 76, 0.48);
  border: 3px solid #f64a00;
  box-sizing: border-box;
  border-radius: 32px;
  font-family: Quicksand;
  font-style: normal;
  font-weight: 640;
  font-size: 20px;
  line-height: 22px;
  text-align: center;
  color: #ffffff;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
}

button a {
  color: #ffffff;
}
.body-cerita {
  margin: 50px 0px 0px 0px;
  background-color: #ffff;
  min-height: 400px;
  position: relative;
}

.body-cerita h3 {
  background-color: yellow;
  background-size: 200px;
  /* margin: 6px 30px 28px 10px ; */
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

/* -- Setting card title --  */

.card-title {
  margin-top: 20px;
  font-family: Quicksand;
  font-weight: 500;
  font-size: 26px;
  line-height: 32px;
  text-align: center;
  font-style: normal;
  color: white;
}

/* .card-text:last-child {
    margin-bottom: 0;
    color: #FDFBEB;
} */

/* -- Setting card img --  */

.card {
  width: 100%;
}
.card-img {
  width: 100%;
  height: 320px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0px;
  padding: 0.15rem;
  filter: brightness(72%);
}

.card-img-top {
  width: 80%;
  max-height: 230px;
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
}
.card-img-overlay {
  width: 100%;
  align-content: center;
}

.card p {
  font-size: 18px;
  font-weight: bold;
  font-family: Quicksand;
  text-align: center;
}

/* -- Setting card subtitle (teks yg ditengah) --  */
.text-muted {
  color: #fdfbeb !important;
  background-color: #2f7196;
}

.mb-2,
.my-2 {
  margin-bottom: 5px !important;
}

.card-subtitle {
  margin: 28px;
}

h6,
.h6 {
  font-size: 20px;
  text-align: center;
}

/* -- Setting card img --  */

.body-cerita p {
  margin: 26px;
  font-family: Quicksand;
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  line-height: 35px;
  color: #ffffff;
  text-align: left;
}

/* -- Setting button --  */

.body-cerita .btn-primary {
  margin: 50px;
  border-color: #f46158;
  color: #fff;
  width: 310px;
  height: 56px;
  font-size: 20px;
  background: #f46158;
  border-radius: 32px;
}

.btn-primary:hover {
  color: #fff;
  background: #f46158;
  border: 2px solid #f64a00;
}

.body-baranglelang h3 {
  padding: 20px;
  width: 521px;
  height: 58px;

  font-family: Quattrocento Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 25px;
  display: flex;
  align-items: center;

  color: #2f7196;
}
.card-body {
  /* -ms-flex: 1 1 auto;
    -webkit-box-flex: 1;
    flex: 1 1 auto; */
  padding: 1.25rem;
}

.card-text {
  font-family: Quicksand;
  font-size: 18px;
}

.card-footer {
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

.sosmed {
  margin: 8px;
  padding: 2px;
}

.sosmed p {
  font-family: Quicksand;
  font-size: 22px;
  padding: 3px;
}
.sosmed-logo img {
  width: 44px;
  margin: 1px;
  padding: 2px;
}

.footer {
  background-color: #fdfbeb;
}
div.card {
  width: 80%;
  position: center;
}
</style>
