<template>
  <div class="registrasiAkun">
    <b-container>
      <b-row>
        <b-col sm="12" md="12" lg="4" class="kiri">
          <h2>Halo Agen Kebaikan!</h2>
          <p>Selamat bergabung dengan Moveon, dan mulailah menjadi kontributor sekarang</p>
        </b-col>

        <b-col sm="12" md="12" lg="7">
          <div class="header-section">
            <h3>Daftar akun baru</h3>
          </div>

          <div class="form-section">
            <!-- <h1>ini isinya form Login</h1> -->
              <b-form @submit="onSubmit" v-if="show">
                <b-form-group id="input-group-1" label-for="input-1">
                  <b-form-input
                    id="input-1"
                    v-model="nama"
                    :type="'name'"
                    required
                    placeholder="masukkan nama anda"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label-for="input-2">
                  <b-form-input
                    id="input-2"
                    v-model="no_hp"
                    :type="'tel'"
                    required
                    placeholder="nomor telepon"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-3" label-for="input-3">
                  <b-form-input
                    id="input-3"
                    v-model="email"
                    :type="'email'"
                    required
                    placeholder="masukkan email anda"
                  ></b-form-input>
                </b-form-group>

                <b-form-group label="Pilih Jenis identitas anda">
                  <b-form-radio v-model="jenis_identitas" value="KTP">KTP</b-form-radio>
                  <b-form-radio v-model="jenis_identitas" value="Kartu Pelajar">Kartu Pelajar</b-form-radio>
                </b-form-group>
                <div class="mt-3">Jenis identitas: <strong>{{ jenis_identitas }}</strong></div>
                <br>
                <b-form-group id="input-group-5" label-for="input-5">
                  <b-form-input
                    id="input-5"
                    v-model="no_identitas"
                    required
                    placeholder="isi nomor identitas sesuai kartu yang dipilih"
                  ></b-form-input>
                </b-form-group>

                <b-form-group label="Jenis Kelamin">
                  <b-form-radio v-model="jenis_kelamin" value="Laki-laki">Laki-laki</b-form-radio>
                  <b-form-radio v-model="jenis_kelamin" value="Perempuan">Perempuan</b-form-radio>
                </b-form-group>
                
                <div class="mt-3">Jenis kelamin: <strong>{{ jenis_kelamin }}</strong></div>
                <br>
                <b-form-group id="input-group-7" label-for="input-7">
                  <b-textarea
                    id="input-5"
                    v-model="alamat"
                    required
                    placeholder="Masukkan alamat anda"
                    height="14px;"
                  ></b-textarea>
                </b-form-group>

                <b-form-group id="input-group-8" label-for="input-8">
                  <b-form-input
                    id="input-6"
                    v-model="password"
                    :type="'password'"
                    required
                    placeholder="kata sandi"
                  ></b-form-input>
                </b-form-group>

                <center>
                <b-button type="submit" class="btn-user-auth">Buat akun</b-button>
                <br />
                <small class="masuk">
                  Sudah punya akun ?
                  <router-link to="/login">Masuk disini.</router-link>
                </small>
                </center>
              </b-form>
            
          </div>
        </b-col>
      </b-row>
    </b-container>
    <br><br>
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
  mounted() {
    console.log("component mounted");
  },
  name: "formregis",
  data() {
    return {
      nama: '',
      no_hp: '',
      no_identitas: '',
      email: '',
      password: '',
      jenis_identitas: '',
      jenis_kelamin: '',
      alamat: '',
      show: true
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      axios.post(`${window.appUrl}/api/pengguna`, {
        nama: this.nama,
        no_hp: this.no_hp,
        no_identitas: this.no_identitas,
        email: this.email,
        password: this.password,
        jenis_identitas: this.jenis_identitas,
        jenis_kelamin: this.jenis_kelamin,
        alamat: this.alamat
      })
      .then(response => {
        // alert(JSON.stringify(response));
        window.open('#/Login', '_top');
      });
      console.log(window.appUrl);
    }
  }
};
</script>

<style scoped>

.registrasiAkun {
  background-image: url("../assets/img/kids.jpg");
  position: center;
  /* min-width: 100%; */
  /* height: 100%; */
  background-repeat: no-repeat;
  background-size: cover;
  font-family: Quicksand;
}

.kiri {
  margin-top: 80px;
  /* background-color: rgb(0, 0, 0, 0.3); */
  width: 100%;
  /* height: auto; */
  position: center;
  padding: 80px, 80px, 10px, 80px;
  text-align: center;
  margin-right: 20px;
  
  /* padding: 20px; */
}

.kiri h2 {
  color: whitesmoke;
  font-weight: bold;
}

.kiri p {
  text-align: center;
  color: #f8f4f4;
  font-size: 23px;
}

.form-section p {
  /* text-align: center; */
  color: black;
  font-size: 23px;
}

.header-section {
  width: 100%;
  height: auto;
  background: linear-gradient(270deg, #f64a00 0%, rgba(247, 147, 23, 0) 100%),
    #f79317;
  margin-top: 80px;
  margin-left: auto;
  margin-right: auto;
}

.header-section h3 {
  padding: 15px;
  color: white;
  size: 8px;
  text-align: left;
}
.masuk {
  padding: 10px;
  font-weight: bold;
}

.form-section {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat center center fixed;
  width: 100%;
  height: auto;
  background-color: #f8f4f4;
  margin: auto;
  padding: 20px;
}

.form-control {
  width: 100%;
  height: auto;
  border: 2px solid #fb574c;
  box-sizing: border-box;
  border-radius: 13px;
  margin: auto;
}

.custom-control {
    position: relative;
    display: block;
    min-height: 1.5rem;
    padding-left: 1.75rem;
    font-family: quicksand;
}


</style>
