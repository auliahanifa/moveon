<template>
    <div class="detail-barang">
        <b-container>
            <b-row style="margin-top:100px;">

                <b-col sm="12" md="12" lg="6" v-for="item in baranglelang" :key="item.id">
                  <div class="detail-foto" style="width: 100%; height: 23rem; border:2 px solid black; 
                    background-color: lightblue;">
                    <img v-bind:src="item.path_photo" alt="" style="width:auto; height:auto;">
                    </div>
                
                </b-col>

                <b-col lg="6" md="6" sm="12">
                <b-card style="max-width: 100%; height:auto;">
                
                <b-col >
                    <center>
                    <b-img v-bind:src="ava_pengguna" rounded="circle" width="90"></b-img>
                    </center>
                    <br> 
                    <p style="font-size:14px; padding:2px; font-weight:normal">
                      Nama Barang:{{item.nama_barang}} </p>
                    <p style="font-size:14px; padding:2px; font-weight:normal">
                      Harga Barang: Rp. {{ item.harga_awal }}</p>
                    <!-- <p style="font-size:14px; padding:2px; font-weight:normal">
                      Bidder: {{ baranglelang.no_token }}</p> -->
                    <p style="font-size:14px; padding:2px; font-weight:normal">
                      Diposting: {{ item.created_at }}</p>
                    <p style="font-size:14px; padding:2px; font-weight:normal">
                      Barang Tersedia</p>
                    <!-- <p style="font-size:14px; padding:2px; font-weight:normal">
                      Kondisi {{ kondisi }}</p> -->
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
                <b-card-text>{{ item.deskripsi }}</b-card-text>
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
      ava_pengguna: null,
      baranglelang: []

    };
    
    
  },
  props: {
    msg: String
  },
  created() {
    axios.show(`http://localhost:127.0.0.8000/donasibarang`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.baranglelang = response.data.baranglelang;
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>
<style scoped>
</style>
