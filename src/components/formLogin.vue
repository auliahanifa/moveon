<template>

    <div class="formlogin">

     <div class="header-section">
         <h3>Masuk ke akun anda</h3>
     </div>


     <div class="form-section">   
        <!-- <h1>ini isinya form Login</h1> -->
        <b-form @submit="onSubmit" v-if="show">
        
        <b-form-group id="input-group-1" label-for="input-1">
        <b-form-input id="input-1" v-model="form.email" type="email" required placeholder="Masukkan email anda"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label-for="input-2">
            <b-form-input id="input-2" v-model="form.password" required placeholder="Kata sandi"></b-form-input>
        </b-form-group>

        <!-- <b-form-group id="input-group-4">
            <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
            <b-form-checkbox value="ingat password"></b-form-checkbox>
            </b-form-checkbox-group>
        </b-form-group> -->

        <b-button type="submit" >Masuk</b-button>
        <br>
        <p>Belum punya akun ? <router-link to="/Daftarlah">Daftar disini</router-link></p>
        <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
        </b-form>
        <!-- <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
        </b-card> -->
     </div>

    </div>
</template>
<script>
export default {
    name: 'formlogin',
    data() {
      return {
        form: {
          email: '',
          password: ''
        //   checked: []
        },
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

.formlogin{
  background-image: url("../assets/img/kids.jpg") ;
  background-repeat:  no-repeat center center fixed; 
  min-height: 640px;
  background-size: cover;
    /* text-align:center; */
  padding: 40px;
  background-attachment: fixed;
  background-position: right center; 
}

.formlogin backgroung-image{
       filter: blur(20px);
  -webkit-filter: blur(20px);

}

.header-section{
    width: 630px;
    height: 60px;
    background: linear-gradient(270deg, #F64A00 0%, rgba(247, 147, 23, 0) 100%), #F79317;
    margin: auto;
    -webkit-mask-attachment: fixed;
    position: right center;
}

.header-section h3{
    padding: 15px;
    color: white;
    size: 10px;
    text-align: left;
    margin-top: 150px;
    margin-left: auto;
    margin-right: auto;

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
   
    background-repeat:  no-repeat center center fixed;
    width: 630px;
    height: 490px;
    background-color: #F8F4F4;
    margin:auto;
    padding: 50px;
}

.form-control {
    width: 500px;
    height: 55px;
    border: 2px solid #FB574C;
    box-sizing: border-box;
    border-radius: 13px;
    margin: 20px 0px 30px 0px;
   
}
</style>
