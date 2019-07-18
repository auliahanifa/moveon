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
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group id="input-group-1" label="Nama Barang" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.nama_barang"
              required
              placeholder="Masukkan nama barang / brand"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-8" label="Deskripsi Barang" label-for="textarea">
            <b-form-textarea
              id="textarea"
              v-model="form.deskripsi"
              placeholder="Deskripsi barang (contoh: warna, ukuran, kondisi barang)"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
          <b-form-group id="input-group-5" label="Harga Barang" label-for="input-5">
            <small>Harga barang merupakan nilai limit barang sebelum penawaran (dalam bentuk Rupiah)</small>
            <b-form-input
              id="input-5"
              v-model="form.harga_awal"
              required
              placeholder="Contoh: 100000"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-14" label="Upload Foto Barang" label-for="input-14">
            <b-form-file
              v-model="file"
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
      form: {
        nama_barang: "",
        harga_awal: "",
        deskripsi: "",
        file: null,
        checked: []
      },

      show: true
    };
  }
};
</script>