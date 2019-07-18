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
      <div class="form">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group id="input-group-1" label="Judul Galang Dana" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.judul"
              required
              placeholder="Contoh: Bantu Ibunya Rendi yang Sakit"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-8" label="Deskripsi Galang Dana" label-for="textarea">
            <small>Tuliskan cerita galang dana Anda</small>
            <b-form-textarea
              id="textarea"
              v-model="form.deskripsi"
              placeholder="Tuliskan deskripsi galang dana anda"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>

          <b-form-group
            id="input-group-14"
            label="Upload Foto untuk Galang Dana"
            label-for="input-14"
          >
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
          <b-form-group id="input-group-1" label="Target Donasi" label-for="input-1">
            <small>Target donasi minimal Rp. 1.000.000</small>
            <b-form-input
              id="input-1"
              type="number"
              v-model="form.judul"
              required
              placeholder="Contoh: 1000000"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-1"
            label="Batas waktu penggalangan dana"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              type="number"
              v-model="form.range_waktu"
              required
              placeholder="Masukkan jumlah hari (contoh: 90)"
            ></b-form-input>
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
  name: "form-galangdana",
  data() {
    return {
      form: {
        nama_barang: "",
        harga_awal: "",
        deskripsi: "",
        file: null,
        range_waktu: "",
        checked: []
      },

      show: true
    };
  }
};
</script>