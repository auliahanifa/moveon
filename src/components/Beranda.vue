<template>
  <div class="Beranda">
    <div class="header-section">
        <h3>{{ header_text1 }}<br>{{ header_text1_a }}</h3>
        <br>
        <h4>{{ header_text2 }}</h4>
        <b-button variant="outline-primary" class="btn_app">{{ btn_donasibarang }}</b-button>
        <div class="batasan"></div>
    </div>
    <div class="body-cerita">
        <b-container class="moveon-cerita">
            <b-row>
                <b-col>
                    <h3>{{ judul_section }}</h3>
                    <p>{{ deskripsi_section }}</p>
                    <b-button variant="primary" class="btn_app2">{{ btn_mulaigd }}</b-button>
                </b-col>
                <b-col>
                    <div class="slider-cerita">
                        <p>Slider cerita galang dana</p>
                    </div>
                    <br>
                    <b-button class="btn_app2">{{ btn_lihatsemuagd }}</b-button>
                </b-col>
            </b-row>
        </b-container>
        <div class="batasan"></div>   
    </div>
    <div class="body-baranglelang">
     <b-row>
        <h4>Ikuti lelang di moveon lalu salurkan uang anda untuk galang dana yang menjadi destinasi bantuan anda</h4>
     </b-row><br>
     <b-row>
             <b-col>
                <b-container class="div-barang">
                    <img src="@/assets/img/cash.jpg" alt="gmbr">
                    <h4 style="bold"> Nama barang</h4>
                    <p>Nama Penjual <br><br>
                    Harga Rp. 298,000,00 </p>

                </b-container>
             </b-col>
             <b-col>
                <b-container class="div-barang">
                </b-container>
             </b-col>
             <b-col>
                <b-container class="div-barang">
                </b-container>
             </b-col>

         </b-container>
        <!-- <b-card title="Celengan Botol"
            img-src="@/assets/img/cash.jpg"
            img-alt="Image"
            img-top tag="article"
            style="max-width: 22rem;"
            class="mb-2">

            <b-card-text>
            Nama barang<br>Rp. 298,000,00
            </b-card-text>
            <b-button href="#" variant="primary">selengkapnya</b-button>
        </b-card> -->
    </b-row><br>
    <b-row>
     <b-button variant="primary">Lihat semua</b-button>
    </b-row>           
    </div>
    <div class="body-team">
    <b-row>
      <b-col>
        <div class="frame">
         <img src="@/assets/img/hanifa.png" alt="team-hanifa" >
         <br>
         <p>Hanifa Aulia<br>PWA Implementation<br>hanifalia91@gmail.com</p>
         <br>
        </div>
        <div>
         <b-row>
          <b-col class="team-logo">
              <img src="@/assets/img/linkedin.png" alt="linkdin">
              <img src="@/assets/img/igteam.png" alt="ig">
          </b-col>
         </b-row>
         <br><br>
        </div>
      </b-col>
      <b-col>
        <div class="frame">    
         <img src="@/assets/img/esti.png" alt="team-esti" >
         <br>
         <p>Esti Rosmana <br>MFEP Method Implementation <br>estirosmanasmkn1@gmail.com</p>
         <br>
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
        
        <!-- <div class="col-lg-8 col-centered"> -->
            <div class="batasan"></div>
        <!-- </div> -->
           
    </div>
    <div class="footer">
     <div class="sosmed">

        
     </div> 
    </div>
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
.app { 
    /* font-family: 'Avenir', Helvetica, Arial, sans-serif, Quicksand; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  position: relative;
  }

.div-barang{
    background-color: #ffffff;
    width: 230px;
    height: 320px;
    text-align: center;
    
}

.div-barang h4{
    text-color: black;
}

.div-barang img{
    width: 120px;
    height: 84px;
}
.header-section {
    /* background-color: black; */
    background-image: url("../assets/img/kids.jpg");
    /* height: auto;
    margin: auto;
    padding-bottom: 30px; */

    /* position: static; */
}

.body-cerita {
    background-color: #ffff;
    /* width: 100%;
    height: auto; */
    /* position: absolute; */
    /* margin: auto; */
    padding-bottom: 30px;

}

.header-section, .body-cerita, .body-baranglelang, .body-team{
    width:100%;
    margin: auto;
    height: auto;
    padding: 30px;
    
}

.body-baranglelang b-card{
    margin: auto;
}
/* .body-team{
    width:90%;
    margin: auto;
    height: auto;
    padding: 20px;

} */

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

/* .frame {
    width: 200px;
    margin: auto;
    padding: 20px
} */

.body-team p{
    width: 300px;
    border: 2px solid #F64A00;
    padding: 10px;
    /* width:280px; */
    margin: auto;
    padding: 10px;
}
.slider-cerita {
    margin-left: auto;
    margin-right: auto;
    margin-top: 70px;
        
    background-color: #F64A00;
    width: 200px;
    height: 260px;
}

.body-baranglelang {
    background-color: lightblue;
    /* width: 100%;
    height: auto; */
    /* position: absolute; */
    /* margin: auto;
    padding: 20px; */
}

.footer {
    background-color: #FDFBEB;
    height: auto;
    position: static;
}
.body-cerita h3{
    padding: 30px ;
  	width: 280px;
	height: auto;
	margin: auto;
}

.header-section h3 {
/* width: 540px; */
/* height: 187px; */
width:80%;
margin: auto;
font-family: Quattrocento Sans;
font-style: italic;
font-weight: normal;
font-size: 32px;
line-height: 37px;
text-align: center;
color: #ffffff;
font-size: 24px;
padding: 80px 120px 0px 120px;
} 

h4 {
    color: #ffffff;
    font-size: 20px;
    padding:0px 120px 20px 120px;
}
.btn_app {
    width: 300px;
    height: 49px;
    /* position: absolute; */
    background: rgba(251, 87, 76, 0.48);
    border: 3px solid #F64A00;
    box-sizing: border-box;
    border-radius: 32px;
    font-family: Quicksand;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 20px;
    /* or 191% */
    text-align: center;
    color: #ffffff;

}

/* .batasan {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 180px;
  width: 90%;
  height: 4px;


background: linear-gradient(270deg, #F79317 0%, #F64A00 100%);
} */
</style>
