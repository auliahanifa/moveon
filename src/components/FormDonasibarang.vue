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
          
          <b-form-group id="input-group-2" label="Nama Pemiliki" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="id_pengguna"
              required
              placeholder="Masukkan Id Anda"
            ></b-form-input>
          </b-form-group>

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
            <b-form-input
              id="input-4"
              v-model="harga_awal"
              required
              placeholder="Contoh: 100000"
            ></b-form-input>
          </b-form-group>
          
          <b-form-group id="input-group-5" label-for="input-5">
             <small>Pilih Status barang Tersedia</small>
             <b-form-select  id="input-5" v-model="status"  :options="statuss" required></b-form-select>
          </b-form-group>

          <b-form-group id="input-group-6" label="Upload Foto Barang" label-for="input-6">
            <small>{{ nama_photo }}</small>
            <b-form-file
              v-model="path_photo"
              :state="Boolean(file)"
              placeholder="Pilih file..."
              drop-placeholder="Drop file here..."
            ></b-form-file>
            <div class="mt-3">
              <small>*file image</small>
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

export default {
  name: "formdonasi",
  data() {
    return {
    nama_barang: '',
    harga_awal: '',
    deskripsi: '',
    file: null,
    range_waktu: '',
    status:'',
    nama_photo: null,
    path_photo:null,
    statuss:['Tersedia', 'Terjual'],
    show: true
      
    }
  },
  
};
</script>