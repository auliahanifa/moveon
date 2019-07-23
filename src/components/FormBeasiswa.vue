<template>
  <div class="form-beasiswa">
    <b-container>
      <center>
        <h3 style>Form Beasiswa Donasi MoveOn</h3>
        <div class="garis-orange"></div>
      </center>
      <div class="form">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <h4 class="kategori-data">Data Diri</h4>
          <div class="garis-orange"></div>
          <br />
          <b-row>
            <b-col sm="6" md="8" lg="8">
              <b-form-group id="input-group-1" label="Nama" label-for="input-1" class="label">
                <b-form-input id="input-1" v-model="form.nama" required placeholder="Nama"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="6" md="4" lg="4">
              <b-form-group
                id="input-group-2"
                label="Jenis Kelamin"
                label-for="input-2"
                class="label"
              >
                <b-form-select
                  id="input-2"
                  v-model="form.jenis_kelamin"
                  :options="jenis_kelamin"
                  required
                ></b-form-select>
              </b-form-group>
            </b-col>
          </b-row>

          <b-row>
            <b-col sm="6" md="6" lg="6">
              <b-form-group id="input-group-3" label="NIM" label-for="input-3" class="label">
                <b-form-input id="input-3" v-model="form.nim" required placeholder="NIM"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="6" md="6" lg="6">
              <b-form-group id="input-group-4" label="Jurusan" label-for="input-4" class="label">
                <b-form-select id="input-4" v-model="form.jurusan" :options="jurusans" required></b-form-select>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="6" md="6" lg="6">
              <b-form-group
                id="input-group-5"
                label="Nomor Telepon"
                label-for="input-5"
                class="label"
              >
                <b-form-input
                  id="input-5"
                  v-model="form.no_hp"
                  required
                  placeholder="Nomor Telepon"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="6" md="6" lg="6">
              <b-form-group
                id="input-group-7"
                label="Email"
                label-for="input-7"
                description="We'll never share your email with anyone else."
              >
                <b-form-input
                  id="input-7"
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="Email"
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12">
              <b-form-group id="input-group-8" label="Alamat" label-for="textarea" class="label">
                <b-form-textarea
                  id="textarea"
                  v-model="form.alamat"
                  placeholder="Alamat"
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="12" md="12" lg="12">
              <b-form-group id="input-group-18" label="Upload Foto Diri" class="label">
                <small>Foto formal</small>
                <b-button @click="$refs.fileInput.click()" class="btn-blue">Pilih Foto</b-button>
                <input
                  style="display: none"
                  ref="fileInput"
                  type="file"
                  @change="fileSelected"
                  enctype="multipart/form-data"
                />
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="6" md="6" lg="6">
              <b-form-group
                id="input-group-13"
                label="Penghasilan Orang Tua (per bulan)"
                label-for="input-13"
                class="label"
              >
                <b-form-select
                  id="input-13"
                  v-model="form.penghasilan_ortu"
                  :options="penghasilan_ortu"
                  required
                ></b-form-select>
              </b-form-group>
            </b-col>
            <b-col sm="6" md="6" lg="6">
              <b-form-group
                id="input-group-14"
                label="Jumlah Tanggungan Orang Tua"
                label-for="input-14"
                class="label"
              >
                <b-form-select
                  id="input-14"
                  v-model="form.jmlh_tanggungan"
                  :options="jmlh_tanggungan"
                  required
                ></b-form-select>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="6" md="6" lg="6">
              <b-form-group
                id="input-group-15"
                label="Status Kepemilikan Tempat Tinggal"
                label-for="input-15"
                class="label"
              >
                <b-form-select
                  id="input-15"
                  v-model="form.status_rumah"
                  :options="status_rumah"
                  required
                ></b-form-select>
              </b-form-group>
            </b-col>
            <b-col sm="6" md="6" lg="6">
              <b-form-group
                id="input-group-16"
                label="Transportasi yang Dimiliki"
                label-for="input-16"
                class="label"
              >
                <b-form-select
                  id="input-16"
                  v-model="form.transportasi"
                  :options="transportasi"
                  required
                ></b-form-select>
              </b-form-group>
            </b-col>
          </b-row>
          <br />
          <br />
          <h4 class="kategori-data">Prestasi Pendidikan</h4>
          <div class="garis-orange"></div>
          <br />
          <b-row>
            <b-col sm="12" md="4" lg="4">
              <b-form-group
                id="input-group-9"
                label="Riwayat Beasiswa"
                label-for="input-9"
                class="label"
              >
                <b-form-select
                  id="input-9"
                  v-model="form.riwayat_beasiswa"
                  :options="riwayat_beasiswa"
                  required
                ></b-form-select>
              </b-form-group>
            </b-col>
            <b-col sm="12" md="4" lg="4">
              <b-form-group id="input-group-10" label="IPK" label-for="input-10" class="label">
                <b-form-select id="input-10" v-model="form.ipk" :options="ipk" required></b-form-select>
              </b-form-group>
            </b-col>
            <b-col sm="12" md="4" lg="4">
              <b-form-group
                id="input-group-11"
                label="Jumlah Organisasi"
                label-for="input-11"
                class="label"
              >
                <b-form-select
                  id="input-11"
                  v-model="form.jmlh_organisasi"
                  :options="jmlh_organisasi"
                  required
                ></b-form-select>
              </b-form-group>
            </b-col>
          </b-row>
          <br />
          <b-row>
            <b-col sm="12" md="4" lg="4">
              <b-form-group
                id="input-group-12"
                label="Prestasi Ekstra (Jumlah Sertifikat)"
                label-for="input-12"
                class="label"
              >
                <b-form-select
                  id="input-12"
                  v-model="form.jmlh_sertifikat"
                  :options="jmlh_sertifikat"
                  required
                ></b-form-select>
              </b-form-group>
            </b-col>
            <b-col sm="12" md="4" lg="4">
              <b-form-group id="input-group-17" class="label" label="Upload Berkas">
                <b-form-file
                  v-model="file_path"
                  :state="Boolean(file_path)"
                  placeholder="Pilih file..."
                  drop-placeholder="Drop file here..."
                ></b-form-file>
                <div class="mt-3">
                  <small>*file pdf, max 2 MB</small>
                </div>
              </b-form-group>
            </b-col>
          </b-row>
          <br />
          <b-button type="submit" class="btn-orange">Kirim</b-button>
          <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
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
import axios from 'axios';
export default {
  name: "form_beasiswa",
  data() {
    return {
      errors:[],
      form: {
        email: "",
        nama: "",
        jenis_kelamin: null,
        nim: "",
        jurusan: null,
        nohp: "",
        alamat: "",
        riwayat_beasiswa: null,
        ipk: null,
        jmlh_organisasi: null,
        jmlh_sertifikat: null,
        penghasilan_ortu: null,
        jmlh_tanggungan: null,
        status_rumah: null,
        transportasi: null,
        file_path: null,
        checked: []
      },
      jenis_kelamin: [
        { text: "Jenis Kelamin", value: null },
        "Laki-Laki",
        "Perempuan"
      ],
      jurusans: [
        { text: "Jurusan", value: null },
        "Administrasi Niaga",
        "Akuntansi",
        "Teknik Mesin",
        "Teknik Grafika dan Penerbitan",
        "Teknik Sipil",
        "Teknik Elektro",
        "Teknik Informatika dan Komputer"
      ],
      riwayat_beasiswa: [
        { text: "Riwayat Beasiswa", value: null },
        "Belum Pernah",
        "Pernah atau Sedang Menerima Beasiswa"
      ],
      ipk: [
        { text: "Range IPK", value: null },
        "3.50 - 4.00",
        "3.25 - 3.49",
        "3.00 - 3.24"
      ],
      jmlh_organisasi: [
        { text: "Jumlah Organisasi", value: null },
        ">= 3",
        "1 atau 2",
        "< 1"
      ],
      jmlh_sertifikat: [
        { text: "Jumlah Sertifikat", value: null },
        ">= 3",
        "1 atau 2",
        "< 1"
      ],
      penghasilan_ortu: [
        { text: "Pilih..", value: null },
        "<= 1.5 juta",
        "1.6 - 3 juta",
        "> 3 juta"
      ],
      jmlh_tanggungan: [
        { text: "Pilih..", value: null },
        ">= 5",
        "2 atau 4",
        "1 atau 2"
      ],
      status_rumah: [
        { text: "Pilih..", value: null },
        "Ngontrak",
        "Menumpang",
        "Rumah Sendiri"
      ],
      transportasi: [
        { text: "Pilih..", value: null },
        "Tidak Punya",
        "Motor",
        "Mobil"
      ],

      show: true
    };
  },
  methods: {
    onSubmit() {
      axios.post(`http://adminmoveon.test/api/pendaftar`, 
      {
          "nama" : this.form.nama,
          "email" : this.form.email,
          "nim" : this.form.nim,
          "jurusan" : this.form.jurusan,
          "no_hp" : this.form.nohp,
          "alamat" : this.form.alamat,
          "jenis_kelamin" : this.form.jenis_kelamin,
          "riwayat_beasiswa" : this.form.riwayat_beasiswa,
          "ipk" : this.form.ipk,
          "jmlh_organisasi" : this.form.jmlh_organisasi,
          "jmlh_sertifikat" : this.form.jmlh_sertifikat,
          "penghasilan_ortu" : this.form.penghasilan_ortu,
          "jmlh_tanggungan" : this.form.jmlh_tanggungan,
          "status_rumah" : this.form.status_rumah,
          "transportasi" : this.form.transportasi,
          "file_path" : this.form.file_path
        
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
      )
      .then(response => {})
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
};
</script>