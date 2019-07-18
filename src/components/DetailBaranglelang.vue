<template>
    <div class="detail-barang">
        <b-container>
            <b-row style="margin-top:100px;">

                <b-col cols="6">
                    <div class="detail-foto" style="width: 32rem; height: 23rem; border:2 px solid black; 
                    background-color: lightblue;">
                    <img src="" alt="">
                    </div>
                
                </b-col>

                <b-col cols="6">
                <b-card style="max-width: 100%;">
                
                <b-row>
                <b-col lg="7" md="5" sm="12">
                    <b-img src="@/assets/img/user.png" rounded="circle" width="70"></b-img>
                    <span style="font-size:18px; padding-left:10px; font-weight:bold"
                    >Nama penjual{{nama_penjual}}</span>
                    <br/>
                    <span style="font-size:16px; padding-left:10px; font-weight:bold"
                    >Harga Barang Rp. {{ counter }}</span>
                    <br/>
                    <span style="font-size:16px; padding-left:10px; font-weight:normal"  
                    >Bidder : {{ no_token }}</span>
                    <br/>
                    <span style="font-size:16px; padding-left:10px; font-weight:bold"
                    >Diposting: {{ created_at }}</span>
                    <br/>
                    <span style="font-size:16px; padding-left:10px; font-weight:bold"
                    >Berlaku sampai {{ waktu_berakhir }}</span>
                    <br/>
                    <span style="font-size:16px; padding-left:10px; font-weight:bold"
                    >Kondisi {{ kondisi }}</span>
                    <br/>
                    <!-- <form action="input"></form> -->
                </b-col>

                <b-col lg="5" md="3" sm="12">
                <b-button href="#" class="btn-orange" v-on:click="counter += 5000">
                    <font-awesome-icon icon="gift" class="bar"></font-awesome-icon> Tawar 
                </b-button>
                </b-col>
                </b-row>
                <br />
                
                <b-progress
                :value="value"
                :max="max"
                class="mb-3"
                variant="warning"
                style="border-radius:7px;"
                show-progress
                >
                </b-progress>
                
                <p style="font-size:15px; font-weight:bold">Bantu untuk Dana Beasiswa</p>
                <b-card-text>Dana beasiswa ini akan diberikan kepada teman-teman mahasiswa Politeknik Negeri Jakarta, yang sedang membutuhkan bantuan biaya untuk kebutuhan kuliah. Yuk bantu teman-teman kita yang membutuhkan.</b-card-text>
                </b-card>
              </b-col>
            </b-row>

            <b-row>
            <b-col cols="12">
                <center>
             <b-card bg-variant="primary" text-variant="white" header="Primary" class="text-center" style="margin-top:30px; width:100%; ">
                <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
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
      counter: 312000,
      no_token:'AB201933',
      created_at:'',
      waktu_berakhir:'',
      
    }
    
    
  },
  kondisi: ['KTP', 'Kartu Pelajar'],
  props: {
    msg: String
  }
}
</script>
<style scoped>
.detail-foto {
}
</style>
