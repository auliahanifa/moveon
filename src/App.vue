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
              <b-nav-item class="nav-text">
                <router-link to="/Daftarlah">Daftar Akun</router-link>
              </b-nav-item>
              <b-nav-item class="nav-text">
                <router-link to="/Login">Masuk</router-link>
              </b-nav-item>
              <!-- <b-nav-item class="nav-text">
                <router-link to="/dashboarduser">Dashboard</router-link>
              </b-nav-item>-->
              <!-- <b-nav-item-dropdown class="drop-link">
                <template slot="button-content">
                  <font-awesome-icon icon="bars" class="bar"></font-awesome-icon>
                </template>
                <b-dropdown-item>
                  <router-link to="/Daftarlah">Daftar</router-link>
                </b-dropdown-item>
                <b-dropdown-item>
                  <router-link to="/Login" class="drop-link">Masuk</router-link>
                </b-dropdown-item>
              </b-nav-item-dropdown>-->
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
  name: "app"
};
</script>


