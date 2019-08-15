<template>
  <!-- <div class="formlogin"> -->
    <b-container >
      <b-row>
        <b-col sm="12" md="12" lg="6" >
        <div class="login-header-section">
          <h3>Masuk ke akun anda</h3>
        </div>
        
        <div class="form-section">
          <b-form @submit="onSubmit" v-if="show">
            <center>
              <b-form-group id="input-group-1" label-for="input-1">
                <b-form-input
                  id="input-1"
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="Masukkan email anda"
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-2" label-for="input-2">
                <b-form-input id="input-2" v-model="form.password" type="password" required placeholder="Kata sandi"></b-form-input>
              </b-form-group>

              <b-button type="submit" class="btn-user-auth">Masuk</b-button>
              <br />
              <p>
                Belum punya akun ?
                <router-link to="/Daftarlah">Daftar disini</router-link>
              </p>
            </center>
          </b-form>
        </div>
        </b-col>
    </b-row>
  </b-container>  
  <!-- </div> -->
</template>
<script>
import axios from "axios";
export default {
  name: "formlogin",
  data() {
    return {
      form: {
        email:'',
        password:''
      },
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      // ertert(JSON.stringify(this.form));
      axios.post('https://admin.donasimoveon.com/api/login/', {
        email:this.form.email,
        password:this.form.password
      })
        .then(response => {
          alert(JSON.stringify(response));
          // window.open("/", "_top");
      .then(response => {
          if(response.data.status){
            localStorage.setItem('access_token',response.data.data.token);
            localStorage.setItem('user',response.data.data.user);
            this.$router.push('dashboarduser');
          }else{
            alert(response.data.message);
          }
          // alert(JSON.stringify(response));
          //window.open("/", "_top");
        })
        .catch(error => {
          alert(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    }
  }
};
</script>
<style scoped>
p {
  padding: 20px;
  font-weight: bold;
}


.form-section {
  width: 100%;
  height: auto;
  background-color: #f8f4f4;
  padding: 20px;
}

.form-control {
  width: 90%;
  border: 2px solid #fb574c;
  box-sizing: border-box;
  border-radius: 11px;
}

.login-header-section {
    width: 100%;
    height: auto;
    background: linear-gradient(270deg, #F64A00 0%, rgba(247, 147, 23, 0) 100%), #F79317;
    margin: auto;
    -webkit-mask-attachment: fixed;
    position: right center;
}

.login-header-section h3 {
    padding: 15px;
    color: white;
    size: 6px;
    text-align: left;
    margin-top: 150px;
    margin-left: auto;
    margin-right: auto;

}
</style>
