<template>
  <div class="form-galangdana">
    <b-container>
      <div class="head-donasi">
        <p>Sebelum memulai galang dana, mari simak simak prosedur galang dana berikut:</p>
      </div>
      <center>
        <h3 style>Form Mulai Galang Dana</h3>
        <div class="garis-orange"></div>
      </center>
      <b-alert
        v-if="status == 1"
        v-model="showDismissibleAlert"
        variant="success"
        dismissible
      >Data berhasil tersimpan</b-alert>
      <b-alert v-else v-model="showDismissibleAlert" variant="danger" dismissible>Gagal</b-alert>
      <div class="form">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group id="input-group-1" label="Judul Galang Dana" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="judul"
              required
              placeholder="Contoh: Bantu Ibunya Rendi yang Sakit"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="" label-for="textarea">
            <small>Tuliskan cerita galang dana Anda</small>
            <b-form-textarea
              id="textarea"
              v-model="deskripsi"
              placeholder="Tuliskan deskripsi galang dana anda"
              rows="2"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>

          <b-form-group id="input-group-4" label="Target Donasi" label-for="input-4">
            <vue-numeric
              currency="Rp"
              separator=","
              v-model="target_dana"
              required
              placeholder="Contoh: 1,000,000"
            ></vue-numeric>
            <br>
            <small>Target Dana yang ingin dicapai dari penggalangan dana Rp. {{ target_dana }} </small>
          </b-form-group>

          <b-form-group id="input-group-5" label="Dana Terkini" label-for="input-5">
            <vue-numeric
              currency="Rp"
              separator=","
              v-model="dana_terkini"
              required
              placeholder="Contoh: 1,000,000"
            ></vue-numeric>
            <br>
            <small>Dana yang sudah terkumpul sebesar Rp. {{dana_terkini}}</small>
          </b-form-group>
          
          <b-form-group id="input-group-6" label-for="input-6">
             <small>Status Galang Dana</small>
             <b-form-select  id="input-6" v-model="status" :options="statuss"></b-form-select>
          </b-form-group>

          <b-form-group
            id="input-group-7"
            label="Waktu penggalangan dana selesai pada:"
            label-for="input-7"
          >
            <b-form-input
              id="input-7"
              type="datetime"
              v-model="waktu_selesai"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-8" label-for="input-8">
             <small>Status Galang Dana</small>
             <b-form-select  id="input-8" v-model="status" :options="statuss"></b-form-select>
          </b-form-group>
          
          <b-form-group
            id="input-group-9"
            label="Kabar Update Galangdana"
            label-for="input-9"
            v-if="dataUpdate"
          >
            <b-form-input
              id="input-9"
              type="text"
              v-model="update"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-10"
            label="Batas waktu penggalangan dana"
            label-for="input-10"
          >
            <b-form-input
              id="input-10"
              type="number"
              v-model="range_waktu"
              required
              placeholder="Masukkan jumlah hari (contoh: 90)"
            ></b-form-input>
          </b-form-group>
          
          <b-form-group
            id="input-group-3"
            label="Upload Foto untuk Galang Dana"
            label-for="input-3"
          >
            <b-form-file
              v-model="image"
              :state="Boolean(image)"
              placeholder="Pilih foto..."
              drop-placeholder="Drop file here..."
              required
            ></b-form-file>
            <div class="mt-3">
              <small>*Gambar terkait galang dana diperlukan</small>
            </div>
          </b-form-group>

          <br><p>{{ waktu_selesai }}</p>
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
import VueNumeric from 'vue-numeric';

export default {
  name: "form-galangdana",
  data() {
    return {
      judul:'',
      deskripsi:'',
      target_dana:'',
      dana_terkini:'',
      image:null,
      update:null,
      dataUpdate:false,
      range_waktu:'',
      waktu_selesai:null,
      status:'Proses',
      statuss:["Proses"],
      showDismissibleAlert: false,
      pengguna:{},
      show: true
    };
  },created() {
    this.pengguna = JSON.parse(localStorage.getItem('user'));
  },
  methods:{
    onSubmit(e){
      e.preventDefault();
      let formData = new FormData();
      formData.append("id_pengguna", this.pengguna.id_pengguna);
      formData.append("judul", this.judul);
      formData.append("deskripsi", this.deskripsi);
      formData.append("target_dana", this.target_dana);
      formData.append("range_waktu", this.range_waktu);
      formData.append("update", this.update);
      formData.append("waktu_selesai", this.waktu_selesai);
      formData.append("dana_terkini", this.dana_terkini);
      formData.append("status", this.status);
      formData.append("image", this.image);

      const config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };
      axios 
        .post(`${window.appUrl}/api/`, formData, config)
        .then(response => {
          this.data = response.data;
          this.message = response.data.message;
          window.open("/#/Donasi", "_self");
          // if (this.status == 1) {galangdana
          //   window.open("/#/lelang", "_self");
          // } else {
          //   window.open("", "_self");
          // }
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
  },
  components: {
    'vue-numeric': VueNumeric
  }
  
  // ,
  // methods:{
  //   onSubmit(e){
  //     e.preventDefault();
  //     evt.preventDefault();
  //     let formData = new FormData();
  //     formData.append("id_pengguna", this.pengguna.id_pengguna);
  //     formData.append("judul", this.judul);
  //     formData.append("target_dana", this.target_dana);
  //     formData.append("deskripsi", this.deskripsi);
  //     formData.append("range_waktu", this.range_waktu);
  //     formData.append("image", this.image);
      
  //     const config = {
  //       headers: {
  //         "Content-Type": "multipart/form-data"
  //       }
  //     };
  //     axios 
  //       .post(`${window.appUrl}/api/galangdana`, formData, config)
  //       .then(response => {
  //         this.data = response.data;
  //         this.message = response.data.message;
  //         if (this.status == 1) {
  //           window.open("/#/Donasi", "_self");
  //         } else {
  //           window.open("", "_self");
  //         }
  //       })
  //       .catch(e => {
  //         this.errors.push(e);
  //       });
  //   }
  // },
  // components: {
  //   'vue-numeric': VueNumeric
  // }
};
</script>