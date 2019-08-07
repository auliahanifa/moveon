<template>
    <div class="detail-barang" style="margin-top:100px;">
        <b-container>
            <b-row>
                <b-col sm="12" md="12" lg="6">
                    <!-- <h3>{{ galang_dana.judul }}</h3> -->
                    <div class="detail-foto" style="width: 100%; height: auto; border:2 px solid black;">
                    <img v-bind:src="barang.path_photo" alt="" style="width: 100%; height: 100%; padding:5px;">
                    </div>
                </b-col>

                <b-col sm="12" md="12" lg="6">
                 <b-card style="margin-top:10px; font-family:Quicksand;">
                    <b-card-text style="font-size:22px; style:bold; ">
                    Nama barang: 
                    {{ barang.nama_barang }}
                    <p
                     style="font-size:12px;"
                    >Nama pemilik: {{ nama_pemilik }}</p>
                    <small>Harga barang:</small>
                    <h3> Rp. {{ barang.harga_awal }}</h3>
                    </b-card-text>
                    
                    <p>Dipublikasikan sejak : {{ barang.created_at }} </p>

                    <b-button class="btn-donasi-red" @click="TambahHarga">
                      <font-awesome-icon icon="gift" class="bar"></font-awesome-icon> Tawar 
                    </b-button>
                    <br>
                    <a href="whatsapp://send?text=The text to share!" data-action="share/whatsapp/share"><b-button class="btn-share-blue">
                        Bagikan
                    </b-button></a>                    
                 </b-card>
                </b-col>
            </b-row>
          
            <b-row>
            <b-col cols="12">
             <b-card bg-variant="theme" text-variant="black" header="Deskripsi" class="text-center" style="margin-top:30px; width:100%;">
                <b-card-text>{{ barang.deskripsi }}</b-card-text>
             </b-card>
             </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
import axios from "axios";
export default {
  mounted(){
    console.log('component mounted')
  },
  name:'detail-lelang',
  data() {
    return{
      barang: {},
      nama_pemilik:'',
    };
    
  },
  props: {
    msg: String
  },
  created() {
    axios
      .get(`https://admin.donasimoveon.com/api/barang/`+this.$route.params.id)
      .then(response => {
        // JSON responses are automatically parsed.
        this.barang = response.data.barang_donasi;
        this.nama_pemilik = response.data.nama_pemilik;
      })
      .catch(e => {
        this.errors.push(e);
      });
    }
  
}
</script>
<style scoped>
</style>
