<template>
  <div class="beasiswa">
    <b-img
      src="@/assets/img/beasiswa3.jpg"
      slot="img"
      class="d-block w-100 img-header"
      width="100%"
      height="300"
    />
    <div class="section-1">
      <b-container>
        <b-row>
          <b-col lg="8" md="7" sm="12">
            <h3>Apa itu Beasiswa?</h3>
            <p class="paragraf">
              Beasiswa adalah tunjangan yang diberikan kepada pelajar atau mahasiswa sebagai bantuan biaya belajar.
              Undang-undang Nomor 12 Tahun 2012 tentang Pendidikan Tinggi di dalam Pasal 76 Ayat (2) menjelaskan tentang
              pemenuhan hak Mahasiswa yaitu mahasiswa pemerintah harus memberikan (a) beasiswa kepada Mahasiswa
              berprestasi; (b) bantuan atau membebaskan biaya Pendidikan; dan/atau (c) pinjaman dana tanpa bunga yang
              wajib dilunasi setelah lulus dan/atau memperoleh pekerjaan. Beasiswa merupakan bantuan yang diberikan oleh
              lembaga pemerintah, perusahaan atau yayasan kepada pelajar atau mahasiswa sebagai bantuan biaya belajar,
              beasiswa ini juga merupakan hak mahasiswa.
            </p>
            <br />
            <br />
            <h3>
              Apa itu Beasiswa
              <br />
              <span style="font-weight:bold;">DONASI</span>
              <span style="color:#fb6340; font-weight:bold;">MoveOn</span> ?
            </h3>
            <p class="paragraf">
              Beasiswa Donasi MoveOn adalah beasiswa dari aplikasi Donasi MoveOn untuk mahasiswa aktif Politeknik Negeri
              Jakarta. Mahasiswa yang berhak menerima beasiswa ini minimal sudah semester 2 dan memiliki IPK minimal
              3.00. Aplikasi Donasi MoveOn apasih? Aplikasi Donasi MoveOn adalah aplikasi web donasi dengan mekanisme
              lelang barang bekas secara online, dimana pada aplikasi tersebut terdapat fitur beasiswa. Dimana, hasil
              lelang yang didapat disalurkan untuk dana beasiswa ini. Beasiswa ini dibuat untuk membantu mahasiswayang
              membutuhkan bantuan biaya pendidikan.
            </p>
            <br />
            <br />
            <h3>
              Syarat Pendaftaran Beasiswa
              <br />
              <span style="font-weight:bold;">DONASI</span>
              <span style="color:#fb6340; font-weight:bold;">MoveOn</span>
            </h3>
            <ul style="list-style-type: none;">
              <li>
                <font-awesome-icon icon="check-square"></font-awesome-icon> Mahasiswa aktif Politknik Negeri Jakarta
              </li>
              <li>
                <font-awesome-icon icon="check-square"></font-awesome-icon> Minimal semester 2
              </li>
              <li>
                <font-awesome-icon icon="check-square"></font-awesome-icon> Minimal ipk 3.00
              </li>
              <li>
                <font-awesome-icon icon="check-square"></font-awesome-icon> Scan KTM, marksheet, kartu keluarga, sertifikat organisasi, sertifikat lomba, dan slip gaji orang tua
              </li>
              <li>
                <font-awesome-icon icon="check-square"></font-awesome-icon> Berkas dijadikan satu dan diupload dalam bentuk file pdf
              </li>
            </ul>
          </b-col>
          <b-col lg="4" md="5" sm="12">
            <center v-if="galang_beasiswa != null">
              <h6>Siap Memberi Bantuan?</h6>
              <p>Ayo berdonasi menggunakan #DonasiMoveOn</p>
              <b-card
                :img-src="'http://admin.donasimoveon.com' + galang_beasiswa.path_photo"
                img-alt="Image"
                img-top
                tag="article"
                style="text-align:left; "
                class="mb-2 img-card"
              >
                <b-row>
                  <b-col lg="6" md="5" sm="12">
                    <b-img
                      :src="'http://admin.donasimoveon.com' + avatar_admin"
                      rounded="circle"
                      width="30"
                    ></b-img>
                    <span
                      style="font-size:10px; padding-left:10px; font-weight:bold"
                    >{{ nama_admin }}</span>
                  </b-col>
                  <b-col lg="6" md="12" sm="12">
                    <b-button href="#" class="btn-orange btn-sm">
                      <router-link to="/Lelang">Donasi</router-link>
                    </b-button>
                  </b-col>
                </b-row>
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
            </center>
            <center v-else>
              <h6>Saat ini Galang Dana Beasiswa Tidak Tersedia</h6>
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
                    <td style="font-weight:bold">Pengumuman</td>
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
                    <td style="font-weight:bold">Pengumuman</td>
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
          <h5 style="margin-bottom:50px">{{pengumuman[0].periode}}</h5>
        </center>
        <b-row>
          <b-col sm="12" md="4" lg="4" v-for="item in pengumuman" v-bind:key="item.id">
            <center>
              <b-img
                v-if="item.path_photo === ''"
                src="@/assets/img/user.png"
                rounded="circle"
                width="130"
              ></b-img>
              <b-img
                v-else
                :src="'http://admin.donasimoveon.com' + item.path_photo"
                rounded="circle"
                width="130"
              ></b-img>
              <div class="box-penerima">
                <h6>{{item.nama}}</h6>
                <p style="font-size:14px;">{{item.jurusan}}</p>
                <h6>{{item.nim}}</h6>
              </div>
            </center>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="section-4">
      <b-container>
        <b-row>
          <b-col lg="10" md="8" sm="12">
            <p style="color:white; letter-spacing:2pxs">
              Kamu siap menjadi penerima Beasiswa
              <br />
              <span style="font-size:30px; font-weight:bold;">Donasi MoveOn selanjutnya?</span>
            </p>
          </b-col>
          <b-col lg="2" md="4" sm="12">
            <router-link to="/daftar_beasiswa" v-if="onclick == 0">
              <b-button class="btn-white">
                <span style="color:#f79317;">DAFTAR</span>
              </b-button>
            </router-link>
            <b-button v-b-modal.modal-1 class="btn-white" v-else>
              <span style="color:#f79317;">DAFTAR</span>
            </b-button>
            <b-modal id="modal-1" title="Pendaftaran Tidak Dapat Dilakukan!">
              <p
                class="my-4"
              >Mohon maaf pendaftaran tidak dapat dilakukan! Pendaftaran beasiswa Donasi MoveOn belum dibuka</p>
            </b-modal>
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
import axios from "axios";
// import { parse } from "querystring";

export default {
  name: "beasiswaa",
  // props: {
  //   msg: String
  // },
  data() {
    return {
      pengumuman: [],
      galang_beasiswa: {},
      sisa_hari: "",
      avatar_admin: "",
      nama_admin: "",
      onclick: 0
    };
  },
  created() {
    axios
      .get(`https://admin.donasimoveon.com/api/beasiswa`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.pengumuman = response.data.pengumuman;
        this.galang_beasiswa = response.data.galang_beasiswa;
        this.sisa_hari = response.data.sisa_hari;
        this.avatar_admin = response.data.avatar_admin;
        this.nama_admin = response.data.nama_admin;
        // this.onclick = parseInt(response.data.onclick); // kalau pas demo matiin yg ini aja
      })
      .catch(e => {
        this.errors.push(e);
      });
  },
  filters: {
    subStr: function(string) {
      return string.substring(0, 100) + "...";
    }
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