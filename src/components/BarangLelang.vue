<template>
  <div id="baranglelang">
    
    <h3>ini isinya daftar barang lelang</h3>
    <button v-on:click="counter += 5000">Tawar</button>
    <p>Harga Baranggg Rp.{{ counter }},00</p>
    <br>

    <b-container>
      <b-row>
        <b-col class="col-sm-12 col-md-6 col-lg-4">
        <b-card
          img-src="@/assets/img/beasiswa3.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem; text-align:left"
          class="mb-2"
        >
         <b-row>
          <b-col lg="7" md="5" sm="12">
            <b-img src="@/assets/img/user.png" rounded="circle" width="30"></b-img>
              <span
                style="font-size:10px; padding-left:10px; font-weight:bold"
                >Nama penjual barang{{nama_penjual}}</span>
          </b-col>
          <b-col lg="5" md="3" sm="12">
           <b-button href="#" class="btn-orange">
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
          style="border-radius:10px;"
          show-progress
          >
         </b-progress>
           <p style="font-size:15px; font-weight:bold">Bantu untuk Dana Beasiswa</p>
           <b-card-text>Dana beasiswa ini akan diberikan kepada teman-teman mahasiswa Politeknik Negeri Jakarta, yang sedang membutuhkan bantuan biaya untuk kebutuhan kuliah. Yuk bantu teman-teman kita yang membutuhkan.</b-card-text>
        </b-card>
        </b-col>

        <b-col class="col-sm-12 col-md-6 col-lg-4">
        <b-card
          img-src="@/assets/img/beasiswa3.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem; text-align:left"
          class="mb-2"
        >
         <b-row>
          <b-col lg="7" md="5" sm="12">
            <b-img src="@/assets/img/user.png" rounded="circle" width="30"></b-img>
              <span
                style="font-size:10px; padding-left:10px; font-weight:bold"
                >Admin Donasi MoveOn</span>
          </b-col>
          <b-col lg="5" md="3" sm="12">
           <b-button href="#" class="btn-orange">
            <font-awesome-icon icon="gift" class="bar"></font-awesome-icon>Donasi
           </b-button>
          </b-col>
         </b-row>
         <br />
         <b-progress
          :value="value"
          :max="max"
          class="mb-3"
          variant="warning"
          style="border-radius:10px;"
          show-progress
          >
         </b-progress>
           <p style="font-size:15px; font-weight:bold">Bantu untuk Dana Beasiswa</p>
           <b-card-text>Dana beasiswa ini akan diberikan kepada teman-teman mahasiswa Politeknik Negeri Jakarta, yang sedang membutuhkan bantuan biaya untuk kebutuhan kuliah. Yuk bantu teman-teman kita yang membutuhkan.</b-card-text>
        </b-card>
        </b-col>
        
        
        <b-col class="col-sm-12 col-md-6 col-lg-4">
        <b-card
          img-src="@/assets/img/beasiswa3.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem; text-align:left"
          class="mb-2"
        >
         <b-row>
          <b-col lg="7" md="5" sm="12">
            <b-img src="@/assets/img/user.png" rounded="circle" width="30"></b-img>
              <span
                style="font-size:10px; padding-left:10px; font-weight:bold"
                >Admin Donasi MoveOn</span>
          </b-col>
          <b-col lg="5" md="3" sm="12">
           <b-button href="#" class="btn-orange">
            <font-awesome-icon icon="gift" class="bar"></font-awesome-icon>Donasi
           </b-button>
          </b-col>
         </b-row>
         <br />
         <b-progress
          :value="value"
          :max="max"
          class="mb-3"
          variant="warning"
          style="border-radius:10px;"
          show-progress
          >
         </b-progress>
           <p style="font-size:15px; font-weight:bold">Bantu untuk Dana Beasiswa</p>
           <b-card-text>Dana beasiswa ini akan diberikan kepada teman-teman mahasiswa Politeknik Negeri Jakarta, yang sedang membutuhkan bantuan biaya untuk kebutuhan kuliah. Yuk bantu teman-teman kita yang membutuhkan.</b-card-text>
        </b-card>
        </b-col>
      </b-row>
    </b-container>
  

  </div>
</template>

<script>
export default {
  name: 'baranglelang',
  data() {
    return{
      counter: 217300
    }
    
  },
  props: {
    msg: String
  }
   

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
