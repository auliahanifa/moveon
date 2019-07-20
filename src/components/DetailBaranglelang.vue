<template>
    <div class="detail-barang">
        <b-container>
            <b-row style="margin-top:100px;">

                <b-col sm="12" md="12" lg="6">
                    <div class="detail-foto" style="width: 100%; height: 23rem; border:2 px solid black; 
                    background-color: lightblue;">
                    <img v-bind:src="foto_barang" alt="" style="width:auto; height:auto;">
                    </div>
                
                </b-col>

                <b-col lg="6" md="6" sm="12">
                <b-card style="max-width: 100%; height:auto;">
                
                <b-col >
                    <center>
                    <b-img v-bind:src="ava_pengguna" rounded="circle" width="90"></b-img>
                    </center>
                    <br> 
                    <p style="font-size:18px; padding-left:10px; font-weight:bold"
                    >Nama penjual:{{nama_penjual}} </p>
                    
                    <p style="font-size:16px; padding-left:10px; font-weight:bold"
                    >Harga Barang: Rp. {{ counter }}</p>
                    
                    <p style="font-size:16px; padding-left:10px; font-weight:bold"  
                    >Bidder: {{ no_token }}</p>
                    
                    <p style="font-size:16px; padding-left:10px; font-weight:bold"
                    >Diposting: {{ created_at }}</p>
                    
                    <p style="font-size:16px; padding-left:10px; font-weight:bold"
                    >Berlaku sampai {{ waktu_berakhir }}</p>
                    
                    <p style="font-size:16px; padding-left:10px; font-weight:bold"
                    >Kondisi {{ kondisi }}</p>
                    
                    
                    <!-- <form action="input"></form> -->
                </b-col>

                <b-col cols="12">
                <b-button href="#" class="btn-orange" v-on:click="counter += 5000">
                    <font-awesome-icon icon="gift" class="bar"></font-awesome-icon> Tawar 
                </b-button>
                </b-col>

                
                
                </b-card>
              </b-col>
            </b-row>

            <b-row>
            <b-col cols="12">
                <center>
             <b-card bg-variant="white" text-variant="black" header="Deskripsi" class="text-center" style="margin-top:30px; width:100%;">
                <b-card-text>{{ deskripsi_barang }}</b-card-text>
             </b-card>
             </center>
             </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
export default {
    name:'detail-lelang',
  data() {
    return{
      foto_barang:'',
      counter: 0,
      no_token:'',
      created_at:'',
      waktu_berakhir:'',      
      nama_penjual:'',
      ava_pengguna: null,
      deskripsi_barang:''

    }
    
    
  },
  props: {
    msg: String
  }
}
</script>
<style scoped>
.detail-foto {
}
</style>
