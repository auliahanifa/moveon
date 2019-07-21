<template>
  <div class="Galangdana" style="margin-top:100px;">
      <b-container class="rowing-set" >
       <table class="tableGalangdana">
                <thead>
                    <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Gambar</th>
                    <th scope="col">Keterangan</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">{{ id_galangdana }}</th>
                    <td><img v-bind:src="img_Galangdana" ></td>
                    <td>{{ nama_fundraiser }} <br> {{ judul_galangdana }} <br/> {{ dana_terkini }} <br/> {{ waktu_tersisa }} </td>
                    <td><router-link to="/detailgalangdana"><b-button>selengkapnya</b-button></router-link></td>
                    </tr>
                </tbody>
             </table>
      </b-container>
    
  </div>
</template>
  name:'Galangdana',
  data() {
    return {
      id_galangdana:''
      nama_fundraiser:'',
      judul_galangdana:'',
      dana_terkini:'',
      waktu_tersisa:'',
      
    }
  },
<script>
// import firstTable from './firstTable.vue';
// import secondTable from './secondTable.vue';
// import thirdTable from './thirdTable.vue';

export default {

  name: 'Galangdana',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  text-align: center;
  font-family: Quicksand;
  width: 100%;
  /* border-collapse: collapse; */
  border: 2px solid grey;
  margin: 10px 10px 0 10px;
}

table th {
  border: 2px solid grey;
  text-transform: uppercase;
  text-align: left;
  /* background: lightblue; */
  color: black;
  padding: 5px;
  min-width: 30px;
}

table td {
  text-align: left;
  padding: 5px;
  border-right: 2px solid #7D82A8;
}
table td:last-child {
  border-right: none;
}
table tbody tr:nth-child(2n) td {
  background: #D4D8F9;
}

</style>
