<template>
  <div class="beasiswa">
    <b-img
      src="@/assets/img/beasiswa3.jpg"
      slot="img"
      class="d-block img-fluid w-100"
      width="100%"
      height="200"
      fluid
      alt
    />
    <div class="section-1">
      <b-container>
        <b-row>
          <b-col cols="8">
            <h3>Apa itu Beasiswa?</h3>
            <br />
            <p class="paragraf">
              Beasiswa adalah tunjangan yang diberikan kepada pelajar atau mahasiswa sebagai bantuan biaya belajar.
              Undang-undang Nomor 12 Tahun 2012 tentang Pendidikan Tinggi di dalam Pasal 76
              Ayat (2) menjelaskan tentang pemenuhan hak Mahasiswa yaitu mahasiswa pemerintah
              harus memberikan (a) beasiswa kepada Mahasiswa berprestasi; (b) bantuan atau
              membebaskan biaya Pendidikan; dan/atau (c) pinjaman dana tanpa bunga yang wajib
              dilunasi setelah lulus dan/atau memperoleh pekerjaan. Beasiswa merupakan bantuan yang diberikan oleh lembaga
              pemerintah, perusahaan atau yayasan kepada pelajar atau mahasiswa sebagai bantuan
              biaya belajar, beasiswa ini juga merupakan hak mahasiswa.
            </p>

            <br />
            <h3>
              Apa itu Beasiswa
              <br />DONASI
              <span style="color:#fb6340; font-weight:bold; letter-spacing:4px;">MoveOn</span> ?
            </h3>
            <br />
            <p class="paragraf">
              Beasiswa Donasi MoveOn adalah beasiswa dari aplikasi Donasi MoveOn untuk mahasiswa aktif Politeknik Negeri Jakarta. Mahasiswa yang berhak menerima beasiswa ini minimal sudah semester 2
              dan memiliki IPK minimal 3.00. Aplikasi Donasi MoveOn apasih? Aplikasi Donasi MoveOn adalah aplikasi web donasi dengan mekanisme lelang barang
              bekas secara online, dimana pada aplikasi tersebut terdapat fitur beasiswa. Dimana, hasil lelang yang didapat disalurkan untuk dana beasiswa ini. Beasiswa ini dibuat untuk membantu mahasiswa
              yang membutuhkan bantuan biaya pendidikan.
            </p>
          </b-col>
          <b-col cols="4">
            <center>
              <h6>Siap Memberi Bantuan?</h6>
              <p>Ayo berdonasi menggunakan #DonasiMoveOn</p>
              <b-card
                img-src="@/assets/img/beasiswa3.jpg"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem; text-align:left"
                class="mb-2"
              >
                <b-row>
                  <b-col lg="7" md="5" sm="12">
                    <b-img src="@/assets/img/user.png" rounded="circle" width="30"></b-img>
                    <span
                      style="font-size:10px; padding-left:10px; font-weight:bold"
                    >Admin Donasi MoveOn</span>
                  </b-col>
                  <b-col lg="5" md="3" sm="12">
                    <b-button href="#" class="btn-orange">
                      <font-awesome-icon icon="gift" class="bar"></font-awesome-icon>Donasi
                    </b-button>
                  </b-col>
                </b-row>
                <br />
                <b-progress
                  :value="value"
                  :max="max"
                  class="mb-3"
                  variant="warning"
                  style="border-radius:10px;"
                  show-progress
                ></b-progress>
                <p style="font-size:15px; font-weight:bold">Bantu untuk Dana Beasiswa</p>
                <b-card-text>Dana beasiswa ini akan diberikan kepada teman-teman mahasiswa Politeknik Negeri Jakarta, yang sedang membutuhkan bantuan biaya untuk kebutuhan kuliah. Yuk bantu teman-teman kita yang membutuhkan.</b-card-text>
              </b-card>
            </center>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="section-2">
      <b-container>
        <center>
          <h3
            style="letter-spacing: 2px; font-weight: bold; margin-bottom:50px"
          >Jadwal Donasi MoveOn</h3>
        </center>
        <b-row>
          <b-col sm="12" md="6" lg="6">
            <center>
              <h5>Periode Semester Ganjil</h5>
              <div class="garis-orange"></div>
              <div style="margin-top:50px; margin-bottom:50px;">
                <table>
                  <tr>
                    <td style="font-weight:bold; padding-right:50px">Galang Dana Beasiswa</td>
                    <td></td>
                    <td>September - November</td>
                  </tr>
                  <tr>
                    <td style="font-weight:bold">Pendaftaran</td>
                    <td></td>
                    <td>1 - 30 September</td>
                  </tr>
                  <tr>
                    <td style="font-weight:bold">Pendaftaran</td>
                    <td></td>
                    <td>Desember</td>
                  </tr>
                </table>
              </div>
            </center>
          </b-col>
          <b-col sm="12" md="6" lg="6">
            <center>
              <h5>Periode Semester Genap</h5>
              <div class="garis-orange"></div>
              <div style="margin-top:50px; margin-bottom:50px;">
                <table>
                  <tr>
                    <td style="font-weight:bold; padding-right:50px">Galang Dana Beasiswa</td>
                    <td></td>
                    <td>Februari - April</td>
                  </tr>
                  <tr>
                    <td style="font-weight:bold">Pendaftaran</td>
                    <td></td>
                    <td>1 - 28 Februari</td>
                  </tr>
                  <tr>
                    <td style="font-weight:bold">Pendaftaran</td>
                    <td></td>
                    <td>Mei</td>
                  </tr>
                </table>
              </div>
            </center>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="section-3">
      <b-container>
        <center>
          <h3
            style="letter-spacing: 2px; font-weight: bold;"
          >Selamat Kepada Penerima Beasiswa Donasi MoveOn</h3>
          <h5 style="margin-bottom:50px">
            Periode
            <span>Genap 2019</span>
          </h5>
        </center>
        <b-row>
          <b-col sm="12" md="4" lg="4">
            <center>
              <b-img src="@/assets/img/user.png" rounded="circle" width="130"></b-img>
              <div class="box-penerima">
                <h6>Esti Rosmana</h6>
                <p style="font-size:14px;">
                  TIK 20<span>15</span>
                </p>
                <h6>4615010017</h6>
              </div>
            </center>
          </b-col>
          <b-col sm="12" md="4" lg="4">
            <center>
              <b-img src="@/assets/img/user.png" rounded="circle" width="130"></b-img>
              <div class="box-penerima">
                <h6>Hanifa Aulia</h6>
                <p style="font-size:14px;">
                  TIK 20<span>15</span>
                </p>
                <h6>4615010003</h6>
              </div>
            </center>
          </b-col>
          <b-col sm="12" md="4" lg="4">
            <center>
              <b-img src="@/assets/img/user.png" rounded="circle" width="130"></b-img>
              <div class="box-penerima">
                <h6>Leonardo Ahmad</h6>
                <p style="font-size:14px;">
                  TGP 20<span>15</span>
                </p>
                <h6>4615020015</h6>
              </div>
            </center>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="section-4">
      <b-container>
        <b-row>
          <b-col cols="10">
            <p style="color:white; letter-spacing:2pxs">
              Kamu siap menjadi penerima Beasiswa
              <br />
              <span style="font-size:30px; font-weight:bold;">Donasi MoveOn selanjutnya?</span>
            </p>
          </b-col>
          <b-col cols="2" style="margin-left:-50px">
            <b-button class="btn-white">
              <router-link to="/daftar_beasiswa">DAFTAR</router-link>
            </b-button>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="footer">
      <center>
        <router-link to="/">Copyright © Donasi MoveOn 2019</router-link>
      </center>
    </div>
  </div>
</template>

<script>
export default {
  name: "beasiswaa",
  // props: {
  //   msg: String
  // },
  data() {
    return {
      value: 33.333333333,
      max: 50
    };
  }
  // methods: {
  //   onSlideStart(slide) {
  //     this.sliding = true;
  //   },
  //   onSlideEnd(slide) {
  //     this.sliding = false;
  //   }
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
