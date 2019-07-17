<template>
  <div class="Beranda">
    <b-container class="header-section">
        <b-row><h3>{{ header_text1 }}</h3></b-row>
        <h4>{{ header_text1_a }}</h4>
        <h5>{{ header_text2 }}</h5>
        <b-button variant="outline" class="btn_app"><router-link to="/donasi_barang">{{ btn_donasibarang }}</router-link></b-button>
        <div class="batasan"></div>
    </b-container>

    <b-container class="body-cerita">
            <b-row>
             <b-col cols="6">
                 <h3>{{ judul_section }}</h3>
                 <p>{{ deskripsi_section }}</p>
                 <b-button variant="primary" class="btn_app2"><router-link to="/formgalangdanaa"> {{ btn_mulaigd }}</router-link></b-button>
             </b-col>
             <b-col cols="6">
             <b-card overlay 
                 img-src="@/assets/img/charity.jpg"
                 img-alt="Card Image"
                 text-variant="white"
                 title="Nama Galang Dana"
                 sub-title="Subtitle"
             >
              <b-card-text>
                Some quick example text to build on the card and make up the bulk of the card's content.
              </b-card-text>
             </b-card>
            </b-col>
        </b-row>
    </b-container>
    <hr>

    <b-container class="body-baranglelang">
     <b-row>
        <h4>Ikuti lelang di moveon lalu salurkan uang anda untuk galang dana yang menjadi destinasi bantuan anda</h4>
     </b-row><br>
     <b-row class="card-barang">
         <b-col cols="4">
             
         </b-col>
         <b-col cols="4">
          
          
         </b-col>
         <b-col cols="4">
          
         </b-col>
     </b-row><br>

     <b-row class="btn-lihatbarang">
      <b-button variant="primary">Lihat semua</b-button>
     </b-row>           
    </b-container>
    
    <hr>
    
    <b-container class="body-team">
    <b-row>
      <b-col cols="5">
        <div class="frame">
         <img src="@/assets/img/hanifa.png" alt="team-hanifa" ><br>
         <p>Hanifa Aulia<br>PWA Implementation<br>hanifalia91@gmail.com</p><br>
        </div>
 
        <div>
         <b-row>
          <b-col>
              <img src="@/assets/img/linkedin.png" alt="linkdin">
              <img src="@/assets/img/igteam.png" alt="ig">
          </b-col>
         </b-row>
         <br><br>
        </div>
      </b-col>
 
      <b-col cols="5">
        <div class="frame">    
         <img src="@/assets/img/esti.png" alt="team-esti" ><br>
         <p>Esti Rosmana <br>MFEP Method Implementation <br>estirosmanasmkn1@gmail.com</p><br>
        </div>
        
        <div class="team-logo">
         <b-row>
          <b-col>
            <img src="@/assets/img/linkedin.png" alt="linkdin">
            <img src="@/assets/img/igteam.png" alt="ig">
          </b-col>
         </b-row>
         <br><br>
        </div>                    
      </b-col>
 
    </b-row>                  
    </b-container>
    <hr>

    <b-container class="sosmed">
      <b-row>
        <b-col cols="3">
            <img src="@/assets/img/logomuvon.png" alt="logo">
        </b-col>
        <b-col cols="3">
            <p>Temukan kami di: </p>
        </b-col> 
        
        <b-col cols="6">
            <img src="@/assets/img/twiter.png" alt="twitter">
            <img src="@/assets/img/fb.png" alt="fb">
            <img src="@/assets/img/iglogo.png" alt="ig">
            <img src="@/assets/img/yutub.png" alt="youtube">
        </b-col>
      </b-row>
    </b-container>

    <b-container class="footer">
        <b-row>     
            <b-col>

            </b-col>
            <b-col>

            </b-col>
           
        </b-row>

    </b-container>
  </div>
    
</template>
<script>
export default {
    name: 'beranda',
    data() {
        return{
        header_text1: 'Setiap hari setiap manusia berkesempatan menjadi penolong bagi manusia lain',
        header_text1_a: 'sudahkah anda mencoba?',
        header_text2: 'Tidak hanya dengan uang, bahkan barang anda dapat begitu berarti bagi mereka',
        btn_donasibarang: 'Donasi barang',
        btn_mulaigd: 'Mulai galang dana',
        btn_lihatsemuagd: 'Lihat selengkapnya',
        judul_section:'moveon punya cerita',
        deskripsi_section:'kumpulan kisah inspiratif yang membuat kami percaya, bahwa hal baik dapat dimulai kapan dan dimana saja. setiap manusia diberikan kesempatan untuk ikut berkontribusi dan menginspirasi',
        }
    }
}
</script>
<style scoped>
.Beranda { 
    /* font-family: 'Avenir', Helvetica, Arial, sans-serif, Quicksand; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  position: relative;
  }

  hr {
      border: 3px solid orange;
      width: 88%;
  }

.header-section {
    background-image: url("../assets/img/kids.jpg");
    /* background-size: auto; */
    position: center;
    min-width: 100%;
    min-height: 500px;
    background-repeat: no-repeat;
    position: center;
    min-width: 100%;
    height: 100%;
    background-repeat: no-repeat;
}

.header-section h3{
font-family: Quattrocento Sans;
font-style: italic;
font-weight: normal;
font-size: 36px;
line-height: 37px;
text-align: center;
padding-top:170px; 
color: white;
}

.header-section h4{
font-family: Quattrocento Sans;
font-style: italic;
font-weight: bold;
font-size: 36px;
line-height: 47px;
text-align: center;

color: #F79317;
}

.header-section h5{
font-family: Quicksand;
font-style: normal;
font-weight: normal;
font-size: 28px;
line-height: 30px;
text-align: center;
color: #D3C4C4;
}

.body-cerita {
    margin: 50px 0px 0px 30px ;
    background-color: #ffff;
    min-height:400px;
    position: relative;
}

.body-cerita h3 {
    margin: 6px 30px 28px 10px ;
    font-style: bold;
    font-family: Quattrocento Sans;
    font-size: 44px;
    line-height: 33px;
    text-align: left;
    color: #2F7196;
}

.body-cerita p{
    margin: 6px 30px 28px 10px ;
    font-family: Quicksand;
    font-style: normal;
    font-weight: normal;
    font-size: 26px;
    line-height: 35px;
    color: #2F7196;
    text-align: left;

}



h4 {
    color: #ffffff;
    font-size: 20px;
    padding:0px 120px 20px 120px;
}

button a{
    color: #ffffff;

}



.team-logo img{
    background-color: transparent;
    width: 60px;
    height: 60px;
    padding: 8px;

}

.body-team br{
    margin-top: 10px;
}
.frame img{
    border: 3px solid #F64A00;
    border-radius: 39rem;
    padding: 20px;
    margin-bottom:20px;
}


.body-team p{
    width: 300px;
    border: 2px solid #F64A00;
    padding: 10px;
    /* width:280px; */
    margin: auto;
    padding: 10px;
}

.body-baranglelang {
    background-color:#ffffff;
}

.footer {
    background-color: #FDFBEB;
    min-height: 300px;
}




.btn_app {
    width: 287px;
    height: 49px;
    /* position: absolute; */
    background: rgba(251, 87, 76, 0.48);
    border: 3px solid #F64A00;
    box-sizing: border-box;
    border-radius: 32px;
    font-family: Quicksand;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 22px;
    /* or 191% */
    text-align: center;
    color: #FFFFFF;
    margin: 20px 0px 70px 0px;
}

</style>
