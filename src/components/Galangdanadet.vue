<template>
    <b-container>
        <div class="detail" style="margin-top:100px;">
        	<b-row v-if="galang_dana !=null">
                <b-col sm="12" md="8" lg="8">
                    <h3>{{ galang_dana.judul }}</h3>
                    <div class="detail-foto" style="width: 100%; height: auto; border:2 px solid black;">
                    <img v-bind:src="'https://admin.donasimoveon.com' +galang_dana.path_photo" alt="" style="width: 100%; height: 23rem; padding:5px;">
                    </div>
                </b-col>
                    
                <b-col sm="12" md="12" lg="4">
                 <b-card style="margin-top:10px; font-family:Quicksand, serif;">
                    <b-card-text style="font-size:22px; style:bold; ">
                    Rp
                    <span
                     style="font-weight:bold;"
                    >{{ galang_dana.dana_terkini }}</span>
                    </b-card-text>
                    <b-card-text>
                    terkumpul dari total dana sebesar Rp. {{ galang_dana.target_dana }}
                    </b-card-text>
                    
                    <b-progress
                    :value="parseInt(galang_dana.dana_terkini)"
                    :max="parseInt(galang_dana.target_dana)"
                    class="mb-3"
                    variant="warning"
                    style="border-radius:10px;"
                    ></b-progress>
                    
                    <p>Waktu penggalangan dana tinggal {{ sisa_hari }} hari</p>
                    <router-link to="/lelang"><b-button class="btn-donasi-red">
                        Donasi Sekarang
                    </b-button></router-link>
                    
                    
                    <a href="whatsapp://send?text=The text to share!" data-action="share/whatsapp/share"><b-button class="btn-share-blue">
                        Bagikan
                    </b-button></a>
                    
                    <p>Penggalangan dana dimulai sejak {{ galang_dana.created_at }} </p>
                    
                    <b-img
                    v-bind:src="photo_pengguna"
                    rounded="circle"
                    style="border:2px solid black;"
                    ></b-img>
                    <span style="font-size:14px; padding-left:10px;">
                    Fundraiser: {{ nama_pengguna }}</span>
                 </b-card>
                </b-col>
            </b-row>
            <br><br>
            <b-row>
            <div class="garis-orange" style="width:100%"></div>
            </b-row>
            
            <b-row style="margin-top:20px;">
                <div class="update-gd">
                <h4>Update</h4>
                <div class="garis-orange" style="width:100%"></div>
                <p>Belum ada Update.</p> 
            </div>
            </b-row>

            <b-row>
            <div class="deskripsi-gd"> 
                <h4>Deskripsi</h4>
                <div class="garis-orange" style="width: 100%;"></div>
                <p>{{ galang_dana.deskripsi }}</p>
            </div>
            </b-row>

            <b-row>
            <b-button class="btn-donasi-red">Donasi Sekarang</b-button>                
            </b-row>

            <footer>
            </footer>        
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
        photo_pengguna:'',
        nama_pengguna:''
        };
    },
    created() {
    axios
      .get(`https://admin.donasimoveon.com/api/galangdana/`+this.$route.params.id)
      .then(response => {
        // JSON responses are automatically parsed.
        this.galang_dana = response.data.galang_dana;
        this.sisa_hari = response.data.sisa_hari;
        this.photo_pengguna = response.data.photo_pengguna;
        this.nama_pengguna = response.data.nama_pengguna;
      })
      .catch(e => {
          alert(e);
        this.errors.push(e);
      });
    }

}
</script>

<style scoped>


.btn {
    display: inline-block;
    color: #ffffff;
    text-align: center;
    font-family: Quicksand;
    vertical-align: middle;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.7;
    width: 94%;
    margin-top: 8px;
    border-radius: 1.3rem;

}




</style>
