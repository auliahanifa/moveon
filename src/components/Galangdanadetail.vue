<template>
    <div class="galangdanadetail" style="margin-top:80px;">
        <b-container>
            <div v-if="galang_dana != null"> 
            <b-row >
                <b-col sm="12" md="8" lg="6">
                <h3>{{ galang_dana.judul }}</h3>
                <b-img v-bind:src="'https://admin.donasimoveon.com' + galang_dana.path_photo"
                width="100%"
                height="auto">
                </b-img>
                </b-col>
            
                <b-col sm="12" md="12" lg="6">
                    <b-card>
                    <p style="font-size:16px;">
                    Terkumpul dana sebesar Rp
                    <span
                        style="font-weight:bold;"
                    >{{galang_dana.dana_terkini | currency}}</span>
                    </p>
                    <p>
                        dari total dana sebesar Rp {{ galang_dana.target_dana }}
                    </p>
                    <b-progress
                    :value="galang_dana.dana_terkini"
                    :max="galang_dana.target_dana"
                    class="mb-3"
                    variant="warning"
                    style="border-radius:10px;"
                    ></b-progress>
                    <p>Waktu penggalangan dana tinggal {{ sisa_hari }} hari</p>
                    <router-link to="/lelang"><b-button>
                        Donasi Sekarang
                    </b-button></router-link><br>
                    <a href="whatsapp://send?text=The text to share!" data-action="share/whatsapp/share"><b-button>
                        Bagikan
                    </b-button></a>
                    <p>Penggalangan dana dimulai sejak {{ galang_dana.created_at }} </p>
                
                    <b-row>
                    <b-col>
                        <b-img
                        :src="'https://admin.donasimoveon.com' + path_photo_pengguna"
                        rounded="circle"
                        width="30"
                        ></b-img>
                        <span
                        style="font-size:10px; padding-left:10px; font-weight:bold"
                        >{{ nama_pengguna }}</span>
                    </b-col>  
                    </b-row>
                    <br />
                    <div class="garis-orange"></div>
                    <br><br>
                    <h4>Update</h4>
                    <div class="garis-orange"></div>
                    <div class="update" v-if="galang_dana.update != null">
                        <p>{{ galang_dana.update }}</p>
                    </div>
                    <div v-else>
                        Belum ada Update.
                    </div>
                    <br><br>
                    <h4>Deskripsi</h4>
                    <div class="garis-orange"></div>
                    <div class="deskripsi" >
                    <b-card-text>{{galang_dana.deskripsi.substring(0,100)}}</b-card-text>
                    </div>
                    <br />
                    <b-button v-on:click="alertLelang">Donasi Sekarang</b-button>                
                    </b-card>
                    
                </b-col>
             </b-row>
            </div>
            
            
            </b-container>
            
            <b-container>
            <b-row>
            <center>
                <div class="bawah">
                    <b-col sm="12" md="12" lg="8">
                    <p>Ingin membuat galang dana anda sendiri? Mulailah sekarang!</p>
                    </b-col>
                    <b-col sm="12" md="8" lg="4">
                    <b-button>Mulai galang dana</b-button>
                    </b-col> 
                </div>
            </center>
            <div class="footer">
            <center>
                <router-link to="/">Copyright © Donasi MoveOn 2019</router-link>
            </center>
            </div>               

          </b-row>
        </b-container>
    </div>
</template>
<script>
import axios from "axios";

export default {
    name:"galangdanadetail",
    data() {
        return{
          galang_dana: {},
          sisa_hari: "",
          path_photo_pengguna: "",
          nama_pengguna: "",
          sisa_hari:""
        };
    },
    methods:{
        alertLelang: function (event) {
        // `this` inside methods point to the Vue instance
        alert('Silakan mengunjungi menu lelang dan ikuti lelang untuk bisa melakukan donasi pada galang dana ini')
    },
    created() {
    axios
      .get(`https://admin.donasimoveon.com/api/galangdanadetail`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.galang_dana = response.data.galang_dana;
        this.sisa_hari = response.data.sisa_hari;
        this.path_photo_pengguna = response.data.path_photo_pengguna;
        this.nama_pengguna = response.data.nama_pengguna;
      })
      .catch(e => {
        this.errors.push(e);
      });
    }


    }

}
</script>
<style scoped>

</style>