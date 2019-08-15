<template>
    <div class="dashboard-user">
      <b-container>
        <center>
         <h3 style="margin-top:100px;">Dashboard Anda</h3>
         <div class="garis-orange" style="width:260px;"></div>
         <br />
         <!-- <b-img :src="'https://admin.donasimoveon.com' +item.path_photo" ></b-img> -->
         <br/>
        </center>
        <br />
        
        <div class="container">
        <div class="form-profil" sm="12" md="8" lg="8">
         <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <h4 class="kategori-data">Profil Anda</h4>
          <div class="garis-orange" cols="6"></div>
          <br />

         <b-form-group id="input-group-1" label="Nama" label-for="input-1" class="label">
          <b-form-input id="input-1" v-model="pengguna.nama"></b-form-input>
         </b-form-group>

         <b-form-group id="input-group-3" label="Email" label-for="input-3" class="label">
            <b-form-input id="input-3" v-model="pengguna.email"></b-form-input>
         </b-form-group>
        
         <b-form-group id="input-group-4" label="Nomor Telepon" label-for="input-4" class="label">
            <b-form-input id="input-4" v-model="pengguna.no_hp"></b-form-input>
         </b-form-group>
        
         <b-form-group id="input-group-5" label="Alamat" label-for="textarea" class="label">
            <b-form-input type="textarea" id="input-5" v-model="pengguna.alamat"></b-form-input>
         </b-form-group>
        
         <b-form-group id="input-group-6" label="Password" label-for="input-6" class="label">
            <b-form-input id="input-4" v-model="pengguna.password"></b-form-input>
         </b-form-group>
        
         <b-form-group id="input-group-7" label="Upload Foto Profil" label-for="input-6" class="label">
          <b-form-file v-model="image" :state="Boolean(image)" placeholder="Pilih foto..."
            drop-placeholder="Tarik file kesini..." required></b-form-file>
          <small>*foto formal</small>
         </b-form-group>

         <!-- <b-form-group id="input-group-7" label="Upload Foto Profil" class="label">
          
          <small>Foto Profil</small>
          <br />
          <b-button @click="$refs.fileInput.click()" class="btn-orange">Pilih Foto</b-button>
          <input
             style="display: none"
             ref="fileInput"
             type="file"
             @change="fileSelected"
             enctype="multipart/form-data"
          />
         </b-form-group> -->
        </b-form>

        </div>
        <center>
            <b-button class="btn-orange" @click="savePengguna" style="width:60%;">Simpan</b-button>
        </center>
        </div>
        <br/>

        <b-tabs>
        <div class="garis-orange" style="width:100%;"></div>
        <div class="data-dashboard">
          <b-tabs card>
            <b-tab title="Lelang" active>
             <div class="lelang-user">
              <h5>Lelang yang saya ikuti</h5>
              <div class="tabel-lelang-user">
               <b-row>
                 <b-col sm="12" md="12" lg="4" v-for="item in lelang" :key="item.id">
                 <b-card
                    :title="item.nama_barang"
                    :img-src="'https://admin.donasimoveon.com' + item.path_photo"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem; font-size:12px;"
                    img-height="150px"
                    class="mb-1"
                 >
                    <br />
                    <p>
                    {{ harga_awal }}
                    </p>
                    <router-link to="/Uploadbuktibayar"> <b-button class="primary">Selesaikan Pembayaran</b-button></router-link>
                 </b-card>                      
                 </b-col>
                </b-row>
             </div>
            </div>

            <br />
            </b-tab>
            <b-tab title="Barang">
            <div class="donasi-user">
            <h5>Donasi barang saya</h5>
              <div class="tabel-barang-user">
               <b-row>
                 <b-col sm="12" md="12" lg="4" v-for="item in barang" :key="item.id">
                 <b-card
                    :title="item.nama_barang"
                    :img-src="'https://admin.donasimoveon.com' + item.path_photo"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem; font-size:12px;"
                    img-height="150px"
                    class="mb-1"
                 >
                    <br />
                    <p>
                    {{ harga_awal }}
                    </p>
                    <router-link to="/Uploadbuktibayar"> <b-button class="primary">Selesaikan Pembayaran</b-button></router-link>
                 </b-card>                      
                 </b-col>
                </b-row>
             </div>            
            </div>
            </b-tab>
            <b-tab title="Galang Dana">
             <div class="galangdana-user">
             <h5>Galang dana saya</h5>
              <div class="tabel-galangdana-user">
               <b-row>
                 <b-col sm="12" md="12" lg="4" v-for="item in galangdana" :key="item.id">
                 <b-card
                    :title="item.judul"
                    :img-src="'https://admin.donasimoveon.com' + item.path_photo"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem; font-size:12px;"
                    img-height="150px"
                    class="mb-1"
                 >
                    <br />
                    <p>
                    Dana terkumpul sebesar
                    <span
                        style="font-weight:bold"
                    >{{ item.dana_terkini | currency }}</span>
                    <br />dari
                    <b>{{ item.target_dana | currency}}</b>
                    </p>
                    <b-card-text style="font-size:10px;">{{ item.created_at }} <span>Waktu penggalangan dana tinggal {{ sisa_hari }} hari</span> </b-card-text>
                    </b-card>                      
                 </b-col>
                </b-row>
             </div>
             </div>
            </b-tab>
          </b-tabs>
          <br />
        </div>

        </b-tabs>
        
        <div class="footer">
        <center>
            <router-link to="/">Copyright © Donasi MoveOn 2019</router-link>
        </center>
        </div>
      </b-container>

    </div>
</template>
<script>
import { stringify } from 'querystring';
import axios from "axios";
export default {
    name:'dashboarduser',
    data(){
     return{
      pengguna: {
            nama: "",
            email: "",
            no_hp: "",
            alamat: "",
            password: "",
            file_path: null,            
      },
      lelang:{},
      barang:{},
      galangdana:{},
      sisa_hari:null,
      show: true
     }
<<<<<<< HEAD
    
    },
    created() {
    axios.all([
    axios.get(`https://admin.donasimoveon.com/api/lelang`),
    axios.get(`https://admin.donasimoveon.com/api/barang`),
    axios.get(`https://admin.donasimoveon.com/api/galangdana`)
    ])
    .then(axios.spread((lelangRes, barangRes, galangdanaRes) => {
      // do something with both responses
      this.lelang = lelangRes.data.lelang;       
      this.barang = barangRes.data.barang;
      this.galangdana = galangdanaRes.data.galangdana;
    }))
    .catch(e => {
=======
    },
    created() {
        axios
            .get(`http://localhost:8000/api/users`,{
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('access_token') //the token is a variable which holds the token
                }
            })
            .then(response => {
                if(response.data.status){
                    alert('data user captured');
                }else{
                    alert(response.data.message);
                }
            })
            .catch(e => {
                this.errors.push(e);
            });
    },
    //  methods: {
    //       onFileChange(e) {
    //           var files = e.target.files || e.dataTransfer.files;
    //           if (!files.length)
    //           return;
    //           this.createImage(files[0]);
    //       },
    //       createImage(file) {
    //           var image = new Image();
    //           var reader = new FileReader();
    //           var vm = this;
>>>>>>> 28af80009488be2c3569642ebfa2e7dffca5656f

    this.errors.push(e);
    });
  }
          
};
 
</script>
<style scoped>

/* dashboard user */

/* edit profil */

img {
  width: 30%;
  margin: auto;
  display: block;
  margin-bottom: 10px;
}

.form-profil button{
    width: 280px;
    float: center;
    border-radius: 13px;
}

.form-control {
    border: 2px solid #F79317;
    box-sizing: border-box;
    border-radius: 13px;
}

/* tabel lelang yang diikuti */
.data-dashboard h5{
    size: 9px;
    border-radius: 13px;
    width:60%;
    padding: 10px;
    color:whitesmoke;
    background: -webkit-linear-gradient(to right, #fb6340, #fbb140);
    background: linear-gradient(to right, #fb6340, #fbb140);
    /* overflow: hidden; */
    box-shadow: 0 2px 4px -2px rgba(0, 0, 0, 0.2);
}

.custom-file-input {
    /* position: relative; */
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    margin: 0;
    opacity: 0;
    border: 2px solid #F79317;
    box-sizing: border-box;
    border-radius: 13px;
}

.lelang-user .galangdana-user .donasi-user {
    width:100%;
    min-height: 100%;
    border: 2px solid #F64A00;
}

.tab-nav{
    line-height: 1.5;
}
/* tabel galang dana yang dibuat user */

/* tabel barang yang didonasikan user */

</style>
