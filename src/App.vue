<template>
  <div id="app">
    <!-- <div class="nav">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/About">About</router-link></li>
      </ul>
    </div>       -->
    <div id="navbar-set">
      <b-navbar toggleable="lg" type="dark" class="nav-background">
      <b-navbar-brand href="/"><img src="@/assets/img/logoputih.png" alt=""></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"> </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav class="ml-auto">
        <b-nav-form left>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Cari barang lelang disini"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Cari</b-button>
          </b-nav-form>

        <b-navbar-nav right>
          <b-nav-item><router-link to="/">HOME</router-link></b-nav-item>
          <b-nav-item><router-link to="/Donasi">DONASI</router-link></b-nav-item>
          <b-nav-item><router-link to="/Lelang">LELANG</router-link></b-nav-item>
          <b-nav-item><router-link to="/Beasiswa">BEASISWA</router-link></b-nav-item>
          <b-nav-item><router-link to="/Login">MASUK</router-link></b-nav-item>
          <b-nav-item><router-link to="/Daftarlah">DAFTAR</router-link></b-nav-item>
          
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'app'

}
</script>
<style scoped>


a {
  /* float:right; */
  color:white;
  margin: 0px 5px 0px 10px;

}

img{
  margin: 0px 10px 0px 10px;
}

 a:hover p{
  /* background-color: whitesmoke; */
  border: 2px solid whitesmoke;
  color:whitesmoke;
  font-weight: bolder;
  text-decoration: none;
}

a.active{
 background-color: #4CAF50;
  color: white;
}
</style>

