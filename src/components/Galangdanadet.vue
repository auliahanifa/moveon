<template>
    <b-container>
        	<div class="detail" v-if="galang_dana != null">
        		<b-row>
                <b-col sm="12" md="8" lg="6">
                    <h3>{{ galang_dana.judul }}</h3>
                    <div class="detail-foto" style="width: 100%; height: 23rem; border:2 px solid black; 
                    background-color: lightblue;">
                    <img v-bind:src="'https://admin.donasimoveon.com' + galang_dana.path_photo" alt="" style="width: 100%; height: 23rem; padding:5px;">
                    </div>
                </b-col>
                    
                <b-col sm="12" md="12" lg="6">
                <h4>Terkumpul dana sebesar Rp.</h4> 
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
                    
                    <b-img
                    :src="'https://admin.donasimoveon.com' + path_photo_pengguna"
                    rounded="circle"
                    width="30"
                    ></b-img>
                    
                    <span style="font-size:10px; padding-left:10px; font-weight:bold">
                    {{ nama_pengguna }}
                	</span>
                    <br />
                    <div class="garis-orange"></div>
                    
                    <br/>
                    <h4>Update</h4>
                    
                    <div class="garis-orange">
                    </div>

                    <div class="update" v-if="galang_dana.update != null">
                        <p>{{ galang_dana.update }}</p>
                    </div>
                    <div v-else>
                        Belum ada Update.
                    </div>
                    <br/>
                    <h4>Deskripsi</h4>
                    <div class="garis-orange"></div>
                    <b-card-text>{{galang_dana.deskripsi.substring(0,100)}}</b-card-text>
                    <br/>
                    <b-button v-on:click="alertLelang">Donasi Sekarang</b-button>                
                    </b-card>
                	</b-col>
            	</b-row>
        	</div>
        	<div v-else>
        		<h6>data galang dana tidak tersedia</h6>
        	</div>
        </b-container>
</template>
<script>
import axios from "axios";
export default {
    mounted(){
      console.log('component mounted')
    },
    name:'Detgalangdana',
    data() {
        return {
        galang_dana: {},
        sisa_hari:'',
        path_photo_pengguna:'',
        nama_pengguna:''
        };
    },
    created() {
    axios
      .get(`https://admin.donasimoveon.com/api/galangdana/{id}`)
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
</script>