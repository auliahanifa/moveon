<template>
    <b-container>
    <div class="selesaikan-bayar" style="margin-top:100px; padding:30px;">
        <center>
        <h3>Upload Bukti Transfer Pembelian Lelang Anda</h3>
        </center>
        <div class="garis-orange" style="width:100%;"></div>
        <br>

        <div class="container">
        <center>
          <h3>{{ no_rekening }}</h3>
          <b-form-group id="input-group-1" label-for="File" sm="12" md="8" lg="12">

             <b-form-input id="file" ref="file" @change="handleFileUpload()" type="file"></b-form-input>
          </b-form-group>
          
          <div class="bukti_tf" style="width:100%; min-height:24rem; background-color:lightblue;">
              <b-img v-bind:src="foto_bukti"></b-img>
              <p>halohaa</p>
          </div>
          <b-button @click="uploadFile()">Upload</b-button>
        </center>
        </div>
    </div>

    <div class="footer">
      <center>
        <router-link to="/">Copyright © Donasi MoveOn 2019</router-link>
      </center>
    </div>
    </b-container>
</template>
<script>
export default {
    name:'selesaikanbayar',
    data(){
        return{
        foto_bukti:'',
        dana_transfer:+0,
        no_rekening:'115798001368932',
        file:'',
        }
    }
    ,methods: {
            handleFileUpload(){
                this.file=this.$refs.file.files[0];
            }
        }
    
};
</script>
<style scoped>

</style>
