<template>
  <div>
    <div class="bg-img"></div>
    <b-container class="registrasiAkun">
      <b-row>
        <b-col sm="12" md="6" lg="4" class="kiri">
          <h2>Halo Agen Kebaikan!</h2>
          <p>Selamat bergabung dengan Moveon, dan mulailah menjadi kontributor sekarang</p>
        </b-col>

        <b-col sm="12" md="6" lg="8">
          <div class="header-section">
            <h3>Daftar akun baru</h3>
          </div>

          <div class="form-section">
            <!-- <h1>ini isinya form Login</h1> -->
            <center>
              <b-form @submit="onSubmit" v-if="show">
                <b-form-group id="input-group-1" label-for="input-1">
                  <b-form-input
                    id="input-1"
                    v-model="nama"
                    type="name"
                    required
                    placeholder="masukkan nama anda"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label-for="input-2">
                  <b-form-input
                    id="input-2"
                    v-model="no_hp"
                    type="tel"
                    required
                    placeholder="nomor telepon"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-3" label-for="input-3">
                  <b-form-input
                    id="input-3"
                    v-model="email"
                    type="email"
                    required
                    placeholder="masukkan email anda"
                  ></b-form-input>
                </b-form-group>

                <!-- //sebelumnya form select -->
                <b-form-group id="input-group-4" label-for="input-4">
                  <b-form-input
                    id="input-4"
                    v-model="jenis_identitas"
                    type="text"
                    required
                    placeholder="jenis kartu identitas"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-5" label-for="input-5">
                  <b-form-input
                    id="input-5"
                    v-model="no_identitas"
                    required
                    placeholder="isi nomor identitas sesuai kartu yang dipilih"
                  ></b-form-input>
                </b-form-group>

                <!-- //sebelumnya form select -->
                <b-form-group id="input-group-6" label-for="input-6">
                  <b-form-input
                    id="input-4"
                    v-model="jenis_kelamin"
                    required
                    placeholder="jenis kelamin"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-7" label-for="input-7">
                  <b-textarea
                    id="input-5"
                    v-model="alamat"
                    type="textarea"
                    required
                    placeholder="Masukkan alamat anda"
                  ></b-textarea>
                </b-form-group>

                <b-form-group id="input-group-8" label-for="input-8" label="password">
                  <b-form-input
                    id="input-6"
                    v-model="password"
                    type="password"
                    required
                    placeholder="kata sandi"
                  ></b-form-input>
                </b-form-group>

                <b-button type="submit">Buat akun</b-button>
                <br />
                <p class="masuk">
                  Sudah punya akun ?
                  <router-link to="/login">Masuk disini.</router-link>
                </p>
                <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
              </b-form>
            </center>
          </div>
        </b-col>
      </b-row>
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
export default {
  mounted() {
    console.log("component mounted");
  },
  name: "formregis",
  data() {
    return {
      nama: "",
      no_hp: "",
      no_identitas: "",
      email: "",
      password: "",
      jenis_identitas: "",
      jenis_kelamin: "",
      alamat: "",
      // cards: ['KTP', 'Kartu Pelajar'],
      // genders: ['Laki-laki', 'Perempuan'],
      show: true
    };
  },
  // methods: {
  // onSubmit(evt) {
  //   evt.preventDefault()
  //   alert(JSON.stringify(this.form))
  //   axios.post('http://localhost:8000/api/pengguna/', {
  //       nama: this.nama,
  //       no_hp: this.no_hp,
  //       email: this.email,
  //       jenis_identitas: this.jenis_identitas,
  //       no_identitas: this.no_identitas,
  //       jenis_kelamin: this.jenis_kelamin,
  //       alamat: this.alamat,
  //       password: this.password
  //   })
  //   .then(function (response) {
  //     alert(response);
  //   })
  //   .catch(function (error) {
  //     alert(error);
  //   });

  // onReset(evt) {
  //   evt.preventDefault()
  //   // Reset our form values
  //   this.email = ''
  //   this.password = ''

  //   // Trick to reset/clear native browser form validation state
  //   this.show = false
  //   this.$nextTick(() => {
  //     this.show = true
  //   })
  // }
  methods: {
    onSubmit(e) {
      e.preventDefault();
      // let currentObj = this;
      // alert(JSON.stringify(this.form))
      axios
        .post("http://localhost:8000/api/pengguna", {
          nama: this.nama,
          no_hp: this.no_hp,
          no_identitas: this.no_identitas,
          email: this.email,
          password: this.password,
          jenis_identitas: this.jenis_identitas,
          jenis_kelamin: this.jenis_kelamin,
          alamat: this.alamat
        })
        // .then(function (response) {
        //   alert(response);
        // })
        .then(function(response) {
          console.log(response);
        });

      // .catch(function (error) {
      //   alert(error);
      // });
    }
  }
};
</script>

<style scoped>
.registrasiAkun {
  background-image: url("../assets/img/kids.jpg");

  position: center;
  min-width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}

.kiri {
  background-color: rgb(0, 0, 0, 0.3);

  width: 100%;
  height: auto;
  position: center;
  padding: 30px;
  text-align: center;
  margin-top: 200px;
  padding: 20px;
}

.kiri h2 {
  font-family: Quicksand;
  color: whitesmoke;
  font-weight: bold;
}

.kiri p {
  text-align: center;
  font-family: Quicksand;
  color: #f8f4f4;

  font-size: 23px;
}

.form-section p {
  text-align: center;
  font-family: Quicksand;
  color: black;

  font-size: 23px;
}

.header-section {
  width: 100%;
  height: auto;
  background: linear-gradient(270deg, #f64a00 0%, rgba(247, 147, 23, 0) 100%),
    #f79317;
  margin-top: 150px;
  margin-left: auto;
  margin-right: auto;
}

.header-section h3 {
  padding: 12px;
  color: white;
  size: 8px;
  text-align: left;
}

button {
  width: 80%;
  height: 43px;
  margin: auto;
  background: #fb574c;
  border: 2px solid #fb574c;
  box-sizing: border-box;
  border-radius: 22px;
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

.custom-select {
  width: 100%;
  height: 45px;
  border: 2px solid #fb574c;
  box-sizing: border-box;
  border-radius: 13px;
  /* margin: auto; */
}

.form-control {
  width: 100%;
  height: 45px;
  border: 2px solid #fb574c;
  box-sizing: border-box;
  border-radius: 13px;
  margin: auto;
}
</style>
