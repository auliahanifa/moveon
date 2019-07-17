<template>
  <div id="baranglelang">
    
    <h3>ini isinya daftar barang lelang</h3>
    <button v-on:click="counter += 5000">Tawar</button>
    <p>Harga Baranggg Rp.{{ counter }},00</p>
    

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
