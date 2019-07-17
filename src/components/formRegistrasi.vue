<template>

    <div >
     <b-container class="registrasiAkun">
       <b-row>
       <b-col cols="4" class="kiri">
         <h2>Halo Agen Kebaikan!</h2>
         <p>Selamat bergabung dengan Moveon, dan mulailah menjadi kontributor sekarang</p>
       </b-col>

      <b-col cols="8">
        <div class="header-section">
         <h3>Daftar akun baru</h3>
        </div>
        
        <div class="form-section">   
            <!-- <h1>ini isinya form Login</h1> -->
          <b-form @submit="onSubmit" v-if="show">
            
          <b-form-group id="input-group-1" label-for="input-1">
             <b-form-input id="input-1" v-model="form.nama" type="name" required placeholder="masukkan nama anda"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label-for="input-2">
             <b-form-input id="input-2" v-model="form.notelp" type="tel" required placeholder="nomor telepon"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-3" label-for="input-3">
             <b-form-input id="input-3" v-model="form.email" type="email" required placeholder="masukkan email anda"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-4" label-for="input-4">
             <b-form-select  id="input-4" v-model="form.card"  :options="cards" required></b-form-select>
          </b-form-group>

          <b-form-group id="input-group-5" label-for="input-5">
             <b-form-input id="input-5" v-model="form.nomorid" type="number" required placeholder="isi nomor identitas sesuai kartu yang dipilih"></b-form-input>
          </b-form-group>
            
          <b-form-group id="input-group-6" label-for="input-6">
             <b-form-input id="input-6" v-model="form.password" type="password" required placeholder="kata sandi"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-7" label-for="input-7">
             <b-form-input id="input-7" v-model="form.repassword" type="password" required placeholder="ulang kata sandi"></b-form-input>
          </b-form-group>

          <b-button type="submit" >Buat akun</b-button>
          <br>
          <p>Sudah punya akun ? <router-link to="/login">Masuk disini.</router-link></p>
          <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
          </b-form>
            
        </div>
      </b-col>
      </b-row>
     </b-container>
    </div>
</template>
<script>
export default {
    name:'formregis',
    data() {
      return {
        form: {
          name:'',
          notelp:'',
          nomorid:'',
          repassword:'',
          email: '',
          password: '',
          card: null,

          
        //   checked: []
        },
        cards: ['KTP', 'Kartu Pelajar'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.password = ''
        // this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }

}
</script>

<style scoped>

.registrasiAkun {
    background-image: url("../assets/img/kids.jpg");
    position: center;
    min-width: 100%;
    height: 100%;
    background-repeat: no-repeat;

}

.kiri {
    width: 400px;
    height: auto;
    position: center;
    padding: 20px;
    text-align: center;
    margin-top: 200px;
    padding: 20px;
}

.kiri h2{
    color: whitesmoke;
    font-weight: bold;
}

p{
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    color: whitesmoke;
    font-weight: bold;
    font-size: 23px;
}


.header-section{
    width: 630px;
    height: 60px;
    background: linear-gradient(270deg, #F64A00 0%, rgba(247, 147, 23, 0) 100%), #F79317;
    margin-top: 150px;
    margin-left: auto;
    margin-right: auto;
}

.header-section h3{
    padding: 12px;
    color: white;
    size: 8px;
    text-align: left
}

button {
    width: 165px;
    height: 43px;
    margin: auto;
    background: #FB574C;
    border: 3px solid #FB574C;
    box-sizing: border-box;
    border-radius: 22px;
}

p {
     padding: 20px;
     font-weight: bold;
}

.form-section {
    background-attachment: fixed;
    background-position: center;
    background-repeat:  no-repeat center center fixed;
    width: 630px;
    height: auto;
    background-color: #F8F4F4;
    margin:auto;
    padding: 50px;
}

.custom-select {
    width: 500px;
    height: 55px;
    border: 2px solid #FB574C;
    box-sizing: border-box;
    border-radius: 13px;
    margin: auto;

}

.form-control {
    width: 500px;
    height: 55px;
    border: 2px solid #FB574C;
    box-sizing: border-box;
    border-radius: 13px;
    margin: auto;
   
}


</style>
