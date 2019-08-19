<template>
  <div id="app">
    <div class="navbar">
      <b-navbar toggleable="lg" type="light" class="nav-background" fixed="top" variant="light">
        <div class="container">
          <b-navbar-brand href="/">
            <img src="@/assets/img/logoputih.png" alt />
          </b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <b-nav-item class="nav-text">
                <router-link to="/Donasi">Donasi</router-link>
              </b-nav-item>
              <b-nav-item class="nav-text">
                <router-link to="/Lelang">Lelang</router-link>
              </b-nav-item>
              <b-nav-item class="nav-text">
                <router-link to="/Beasiswa">Beasiswa</router-link>
              </b-nav-item>
              <b-nav-item class="nav-text" v-if="masukEnable">
                <router-link to="/Daftarlah">Daftar Akun</router-link>
              </b-nav-item>
              
              <b-nav-item class="nav-text" v-if="masukEnable">
                <router-link to="/Login">Masuk</router-link>
              </b-nav-item>

              <b-nav-item class="nav-text" v-on:click="logOut">
                <router-link to="/">Keluar</router-link>
              </b-nav-item>

              <b-nav-item class="nav-text">
                <span><font-awesome-icon icon="user" class="bar"></font-awesome-icon><router-link to="/dashboarduser">  Dashboard</router-link></span>
              </b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </div>
      </b-navbar>
    </div>
    <router-view />
  </div>
</template>
<script>

export default {
  name: "app",
  data: {
    masukEnable : true,
    keluar: true
  },
   beforeMount() {
      if (localStorage.getItem('user')!=null) {
        this.masukEnable = false;
        // this.keluar = true;    
    }else{
        this.masukEnable = true;
    }
  }, logOut() {
    this.masukEnable = true;
    localStorage.clear();
    console.log("harusnya keluar");

  },
  onSubmit(evt) {
      evt.preventDefault();
      // ertert(JSON.stringify(this.form));
      console.log("on submit login");
    
  // mounted(){
  //   if( keluar == false) {
  //     localStorage.clear();
  //   }
  // }

  }

}

</script>


