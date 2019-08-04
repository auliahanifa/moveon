<template>
  <div class="formDonasi">
    <b-container>
      <div class="head-donasi">
        <p>Selamat datang di Menu Donasi Barang, untuk ketentuan dan prosedur donasi barang silahkan simak prosedur di bawah ini</p>
      </div>
      <center>
        <h3 style>Form Donasi Barang</h3>
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
        <b-form @submit="onSubmit" v-if="show">
          <b-form-group id="input-group-1" label="Nama Barang" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="nama_barang"
              required
              placeholder="Masukkan nama barang / brand"
            ></b-form-input>
          </b-form-group>
          
          <!-- <b-form-group id="input-group-2" label="Nama Pemiliki" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="id_pengguna"
              required
              placeholder="Masukkan Id Anda"
            ></b-form-input>
          </b-form-group> -->

          <b-form-group id="input-group-3" label="Deskripsi Barang" label-for="textarea">
            <b-form-textarea
              id="textarea"
              v-model="deskripsi"
              placeholder="Deskripsi barang (contoh: warna, ukuran, kondisi barang)"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
          <b-form-group id="input-group-4" label="Harga Barang" label-for="input-4">
            <small>Harga barang merupakan nilai limit barang sebelum penawaran (dalam bentuk Rupiah)</small>
            <vue-numeric
              currency="Rp"
              separator=","
              v-model="harga_awal"
              required
              placeholder="Contoh: 1,000,000"
            ></vue-numeric>
          </b-form-group>
          
          <b-form-group id="input-group-5" label-for="input-5">
             <small>Pilih Status barang Tersedia</small>
             <b-form-select  id="input-5" v-model="status" :options="statuss"></b-form-select>
          </b-form-group>

          <b-form-group id="input-group-18" class="label" label="Upload Gambar Barang">
            <b-form-file
              v-model="image"
              :state="Boolean(image)"
              placeholder="Pilih foto..."
              drop-placeholder="Drop file here..."
              required
            ></b-form-file>
            <div class="mt-3">
              <small>*foto formal</small>
            </div>
          </b-form-group>
        
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
  name: "formdonasi",
  data() {
    return {
    nama_barang: '',
    harga_awal: '',
    deskripsi: '',
    image: null,
    // path_photo:null,
    status:'Tersedia',
    statuss:["Tersedia"],
    show: true      
    }
  },
  methods:{
    onSubmit(e){
      e.preventDefault();
      evt.preventDefault();
      let formData = new FormData();
      formData.append("nama_barang", this.nama_barang);
      formData.append("harga_awal", this.harga_awal);
      formData.append("deskripsi", this.deskripsi);
      formData.append("status", this.status);
      formData.append("image", this.image);

      const config = {
        headers: {
          "content-type": "multipart/form-data"
        }
      };
      axios
        .post(`https://admin.donasimoveon.com/api/barang`, formData, config)
        .then(response => {
          this.data = response.data;
          this.message = response.data.message;
          // this.status = parseInt(response.data.status);
          // this.showDismissibleAlert = true;
          if (this.status == 1) {
            window.open("/#/lelang", "_self");
          } else {
            window.open("", "_self");
          }
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
      // axios.post('https://admin.donasimoveon.com/api/barang',{
      // axios.post('http://localhost:8001/api/barang',{
      //   nama_barang: this.nama_barang,
      //   deskripsi: this.deskripsi,
      //   harga_awal: this.harga_awal,
      //   status: this.status,
      //   path_photo: this.path_photo,
      //   file:this.file
      // })
      // .then(function (response) {
      //   alert(response);
      // })
    //  .then(function (response) {
    //     console.log(response);
    //   });
 
      // .catch(function (error) {
      //   alert(error);
      // });
      

    }
  }

</script>