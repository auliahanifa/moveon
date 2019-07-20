<template>
    <div class="dashboard-user">
      <b-container>
        <center>
         <h3 style="margin-top:100px;">Dashboard Anda</h3>
         <div class="garis-orange" style="width:260px;"></div>
         <br />
         
         <div v-if="!image">
         <h4>uplaod foto profil</h4>
          <input type="file" @change="onFileChange">
         </div>
         <div v-else-if="image">
         <b-img :src="image" ></b-img>
         <br/>
         <button @click="removeImage">Remove image</button>
         </div>
         <div v-else>
           <img :src="image" alt="">
         <br>
         <b-button @click="gantiImage">Ganti Foto</b-button>

         </div>
        
        <b-button>ganti foto</b-button>
        </center>
        <br />
        
        <div class="form-profil" sm="6" md="8" lg="8">
         <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <h4 class="kategori-data">Profil Anda</h4>
          <div class="garis-orange"></div>
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
        
         <b-form-group id="input-group-7" label="Upload Foto Profil" class="label">
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
         </b-form-group>
         </b-form>        
        </div>
        <div class="garis-orange" style="width:100%;"></div>
        <br/>

        <div class="data-dashboard">
         <div class="lelang-user">
            <h5>Lelang yang saya ikuti</h5>
            <div class="tabel-lelang-user">
             <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Gambar</th>
                    <th scope="col">Nama Barang</th>
                    <th scope="col">Harga Barang</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">{{ id_barang }}</th>
                    <td><img v-bind:src="gambar_barang" ></td>
                    <td>{{ nama_barang }}</td>
                    <td>{{ harga_barang }}</td>
                    <td><b-button class="primary"><router-link to="/detailgalangdana"> Selesaikan Pembayaran</router-link></b-button></td>
                    </tr>
                </tbody>
             </table>
            </div>
         </div>
         <br />

         <div class="galangdana-user">
            <h5>Galang dana saya</h5>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Judul</th>
                    <th scope="col">Sisa Waktu</th>
                    <th scope="col">Dana Terkumpul</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">{{ judul_galangdana }}</th>
                    <td>{{ sisa_waktu }}</td>
                    <td>{{ dana_terkini }}</td>
                    <td><b-button class="primary">Update</b-button></td>
                    </tr>
                </tbody>
             </table>
         </div>
         <br />

         <div class="donasi-user">
            <h5>Donasi barang saya</h5>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col" > Nama Barang </th>
                    <th scope="col"> Published on </th>
                    <th scope="col"> Harga </th>
                    <th scope="col"> Penawar </th>
                    <th scope="col"> Action </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">{{ nama_barang }}</th>
                    <td>{{ tgl_upload }}</td>
                    <td>{{ harga }}</td>
                    <td>{{ id_penawar }}</td>
                    <td><b-button class="primary">Hapus</b-button><span>&nbsp</span><b-button class="primary">Update</b-button></td>
                    </tr>
                </tbody>
             </table>
         </div>
         <br />
        </div>

      </b-container>

    </div>
</template>
<script>
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
      image:'',
      gambar_barang:'',
      id_barang:'',
      nama_barang:'',
      harga_barang:'',
      foto_barang:null,
      tgl_upload:'',
      harga: '',
      id_penawar:'',
      show: true
     }
    },
     methods: {
          onFileChange(e) {
              var files = e.target.files || e.dataTransfer.files;
              if (!files.length)
              return;
              this.createImage(files[0]);
          },
          createImage(file) {
              var image = new Image();
              var reader = new FileReader();
              var vm = this;

              reader.onload = (e) => {
                vm.image = e.target.result;
              };
              reader.readAsDataURL(file);
          },
          removeImage: function (e) {
              this.image ='';
          },
          gantiImage(e) {
              var files = e.target.files || e.dataTransfer.files;
              return this.createImage(files[0]);
          }
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
    float: left;
    border-radius: 13px;
}

.form-control {
    border: 2px solid #F79317;
    box-sizing: border-box;
    border-radius: 13px;
}

/* tabel lelang yang diikuti */
.data-dashboard h5{
    size: 13px;
    border-radius: 13px;
    width: 60%;
    padding: 10px;
    color:whitesmoke;
    background: -webkit-linear-gradient(to right, #fb6340, #fbb140);
    background: linear-gradient(to right, #fb6340, #fbb140);
    /* overflow: hidden; */
    box-shadow: 0 2px 4px -2px rgba(0, 0, 0, 0.2);
}

.lelang-user .galangdana-user .donasi-user {
    width:100%;
    min-height: 100%;
    border: 2px solid #F64A00;
}

table td, th{
    border: 1px solid #F79317;
}

table button{
    background: green;
    color: white;
    font-style: bold;
    font-family: Quicksand;
}

/* tabel galang dana yang dibuat user */

/* tabel barang yang didonasikan user */

</style>
