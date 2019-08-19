<template>
  <div class="form-beasiswa">
    <b-container>
      <center>
        <h3 style>Form Beasiswa Donasi MoveOn</h3>
        <div class="garis-orange"></div>
      </center>
      <div class="form">
        <b-form @submit="onSubmit" v-if="show" enctype="multipart/form-data">
          <h4 class="kategori-data">Data Diri</h4>
          <div class="garis-orange"></div>
          <br />
          <b-row>
            <b-col sm="6" md="8" lg="8">
              <b-form-group id="input-group-1" label="Nama" label-for="input-1" class="label">
                <b-form-input id="input-1" v-model="nama" required placeholder="Nama"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="6" md="4" lg="4">
              <b-form-group label="Jenis Kelamin">
                <b-form-radio v-model="jenis_kelamin" name="jenis-kelamin" value="Laki-laki" required>Laki-laki
                </b-form-radio>
                <b-form-radio v-model="jenis_kelamin" name="jenis-kelamin" value="Perempuan" required>Perempuan
                </b-form-radio>
              </b-form-group>
            </b-col>
          </b-row>

          <b-row>
            <b-col sm="6" md="6" lg="6">
              <b-form-group id="input-group-3" label="NIM" label-for="input-3" class="label">
                <b-form-input id="input-3" v-model="nim" required placeholder="NIM" :maxlength="maxnim" type="number"
                  min="0"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="6" md="6" lg="6">
              <b-form-group id="input-group-4" label="Jurusan" label-for="input-4" class="label">
                <b-form-select id="input-4" v-model="jurusan" :options="jurusans" required></b-form-select>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="12" md="6" lg="6">
              <b-form-group id="input-group-5" label="Nomor Telepon" label-for="input-5" class="label">
                <b-form-input id="input-5" v-model="no_hp" :maxlength="maxhp" required placeholder="Nomor Telepon"
                  type="number" min="0"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="12" md="6" lg="6">
              <b-form-group id="input-group-7" label="Email" label-for="input-7"
                description="Kami tidak akan menyebarkan email Anda kepada siapa pun">
                <b-form-input id="input-7" v-model="email" type="email" required placeholder="Email"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12">
              <b-form-group id="input-group-8" label="Alamat" label-for="textarea" class="label">
                <b-form-textarea id="textarea" v-model="alamat" placeholder="Alamat" rows="3" max-rows="6">
                </b-form-textarea>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="12" md="12" lg="12">
              <b-form-group id="input-group-18" class="label" label="Upload Foto Diri">
                <b-form-file v-model="image" :state="Boolean(image)" placeholder="Pilih foto..."
                  drop-placeholder="Drop file here..." required></b-form-file>
                <small>*foto formal</small>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="12" md="6" lg="6">
              <b-form-group id="input-group-13" label="Penghasilan Orang Tua (per bulan)" label-for="input-13">
                <vue-numeric currency="Rp" separator="," v-model="penghasilan_ortu" required placeholder="Ex: 1000000">
                </vue-numeric>
                <!-- <b-form-input
                  id="input-7"
                  v-model="penghasilan_ortu"
                  type="number"
                  required
                  placeholder="Ex: 1000000"
                  min="0"
                ></b-form-input>-->
              </b-form-group>
            </b-col>
            <b-col sm="12" md="6" lg="6">
              <b-form-group id="input-group-14" label="Jumlah Tanggungan Orang Tua" label-for="input-14" class="label">
                <b-form-input id="input-14" v-model="jmlh_tanggungan" type="number" placeholder="Ex: 5" required
                  min="0"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="12" md="6" lg="6">
              <b-form-group id="input-group-15" label="Status Kepemilikan Tempat Tinggal :" label-for="input-15"
                class="label" required>
                <b-form-radio v-model="status_rumah" name="status_rumah" value="Ngontrak" required>Ngontrak
                </b-form-radio>
                <b-form-radio v-model="status_rumah" name="status_rumah" value="Menumpang" required>Menumpang
                </b-form-radio>
                <b-form-radio v-model="status_rumah" name="status_rumah" value="Rumah Sendiri" required>Rumah Sendiri
                </b-form-radio>
              </b-form-group>
            </b-col>
            <b-col sm="12" md="6" lg="6">
              <b-form-group id="input-group-16" label="Transportasi yang Dimiliki :" label-for="input-16" class="label"
                required>
                <b-form-radio v-model="transportasi" name="transportasi" value="Tidak punya" required>Tidak Punya
                </b-form-radio>
                <b-form-radio v-model="transportasi" name="transportasi" value="Sepeda Motor" required>Motor
                </b-form-radio>
                <b-form-radio v-model="transportasi" name="transportasi" value="Mobil" required>Mobil</b-form-radio>
              </b-form-group>
            </b-col>
          </b-row>
          <br />
          <br />
          <h4 class="kategori-data">Prestasi Pendidikan</h4>
          <div class="garis-orange"></div>
          <br />
          <b-row>
            <b-col sm="12" md="6" lg="6">
              <b-form-group id="input-group-9" label="Riwayat Beasiswa :" label-for="input-9" class="label" required>
                <b-form-radio v-model="riwayat_beasiswa" name="riwayat_beasiswa" value="Belum pernah menerima" required>
                  Belum
                  Pernah Menerima
                </b-form-radio>
                <b-form-radio v-model="riwayat_beasiswa" name="riwayat_beasiswa" value="Pernah/sedang menerima"
                  required>
                  Pernah /
                  Sedang Menerima
                </b-form-radio>
              </b-form-group>
            </b-col>
            <b-col sm="12" md="6" lg="6">
              <b-form-group id="input-group-10" label="IPK" label-for="input-10" class="label">
                <b-form-input id="input-10" v-model="ipk" type="number" placeholder="Ex: 3.50" step="0.01" min="0"
                  required></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <br />
          <b-row>
            <b-col sm="12" md="6" lg="4">
              <b-form-group id="input-group-11" label="Jumlah Organisasi" label-for="input-11" class="label">
                <b-form-input id="input-11" v-model="jmlh_organisasi" type="number" min="0" placeholder="Ex: 5"
                  required></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="12" md="6" lg="4">
              <b-form-group id="input-group-12" label="Prestasi Ekstra (Jumlah Sertifikat)" label-for="input-12"
                class="label">
                <b-form-input id="input-12" v-model="jmlh_sertifikat" type="number" min="0" placeholder="Ex: 5"
                  required></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="12" md="6" lg="4">
              <b-form-group id="input-group-17" class="label" label="Upload Berkas">
                <b-form-file v-model="file_path" :state="Boolean(file_path)" placeholder="Pilih file..."
                  drop-placeholder="Drop file here..." required></b-form-file>
                <small>*file pdf, max 2 MB</small>
              </b-form-group>
            </b-col>
          </b-row>
          <br />
          <b-alert v-if="status == 1" v-model="showDismissibleAlert" variant="success" dismissible>Berhasil! Data
            tersimpan</b-alert>
          <b-alert v-else-if="status == 2" v-model="showDismissibleAlert" variant="danger" dismissible>NIM sudah terdaftar
            sebagai penerima beasiswa Donasi MoveOn!</b-alert>
          <b-alert v-else v-model="showDismissibleAlert" variant="danger" dismissible>Gagal! Silahkan cek kembali data anda</b-alert>
          <br>
          <b-button type="submit" class="btn-orange">Kirim</b-button>
        </b-form>
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
  import VueNumeric from "vue-numeric";
  export default {
    name: "form_beasiswa",
    mounted() {
      // console.log("Component mounted.");
    },
    components: {
      VueNumeric
    },
    data() {
      return {
        showDismissibleAlert: false,
        status: 0,
        message: "",
        errors: [],
        email: "",
        nama: "",
        jenis_kelamin: "",
        nim: "",
        jurusan: "",
        no_hp: "",
        alamat: "",
        riwayat_beasiswa: "",
        ipk: "",
        jmlh_organisasi: "",
        jmlh_sertifikat: "",
        penghasilan_ortu: "",
        jmlh_tanggungan: "",
        status_rumah: "",
        transportasi: "",
        file_path: null,
        image: null,
        checked: [],
        maxhp: 13,
        maxnim: 10,
        jurusans: [
          "Administrasi Niaga",
          "Akuntansi",
          "Teknik Mesin",
          "Teknik Grafika dan Penerbitan",
          "Teknik Sipil",
          "Teknik Elektro",
          "Teknik Informatika dan Komputer"
        ],
        show: true
      };
    },
    methods: {
      onImageChange(e) {
        // console.log(e.target.files[0]);
        this.image = e.target.files[0];
      },
      onSubmit(evt) {
        evt.preventDefault();
        let formData = new FormData();
        formData.append("nama", this.nama);
        formData.append("email", this.email);
        formData.append("nim", this.nim);
        formData.append("jurusan", this.jurusan);
        formData.append("no_hp", this.no_hp);
        formData.append("alamat", this.alamat);
        formData.append("jenis_kelamin", this.jenis_kelamin);
        formData.append("riwayat_beasiswa", this.riwayat_beasiswa);
        formData.append("ipk", this.ipk);
        formData.append("jmlh_organisasi", this.jmlh_organisasi);
        formData.append("jmlh_sertifikat", this.jmlh_sertifikat);
        formData.append("penghasilan_ortu", this.penghasilan_ortu);
        formData.append("jmlh_tanggungan", this.jmlh_tanggungan);
        formData.append("status_rumah", this.status_rumah);
        formData.append("transportasi", this.transportasi);
        formData.append("file_path", this.file_path);
        formData.append("image", this.image);

        const config = {
          headers: {
            "content-type": "multipart/form-data"
          }
        };
        axios
          .post(`${localStorage.getItem('urlWs')}/api/pendaftar`, formData, config)
          .then(response => {
            this.data = response.data;
            this.message = response.data.message;
            this.status = parseInt(response.data.status);
            this.showDismissibleAlert = true;
            if (this.status == 1) {
              window.open("/#/beasiswa", "_self");
            } else {
              window.open("", "_self");
            }
          })
          .catch(e => {
            this.errors.push(e);
          });
      }
    }
  };
</script>