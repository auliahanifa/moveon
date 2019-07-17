<template>
    <div class="uyeah">
        <div class="header-section">
         <h3>Daftar akun baru</h3>
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
        <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
        <!-- <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
        </b-card> -->
     </div>
    </div>
</template>
<script>
export default {
    name:'formregis'

}
</script>