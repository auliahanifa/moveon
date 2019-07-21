<template>
    <div class="Galangdana" style="margin-top:80px;">
        <b-container>
            <h3>{{ jdl_galangdana }}</h3>
            <b-row>
                <b-col sm="12" md="8" lg="6">
                    
                    <div class="detail-foto" style="width: 100%; height: 23rem; border:2 px solid black; 
                    background-color: lightblue;">
                    <img v-bind:src="foto_galangdana" alt="" style="width: 100%; height: 23rem; padding:5px;">
                    </div>
                </b-col>
                    
                <b-col sm="12" md="12" lg="6">
                 
                 <b-card
                    v-bind:title="dana_terkumpul"
                    tag="article"
                    style="max-width: 100%; font-style:bold;"
                    class="mb-2"
                >
                    <b-card-text> <b>Terkumpul dari Rp.
                    {{ dana_target }}</b>
                    </b-card-text>
                    <div>
                    <b-progress :value="value" :max="max" class="mb-4"></b-progress>        
                    </div>
                    <b-card-text>{{ waktu_sisa }}
                    hari tersisa</b-card-text>
                    <b-button>
                    Donasi Sekarang
                    </b-button>
                    <br/>
                    <br/>
                    <b-button ><a href="whatsapp://send?text=The text to share!" data-action="share/whatsapp/share">Share via Whatsapp</a>
                    </b-button>
                    <b-card-text>
                    Penggalangan dana dimulai sejak {{ galangdana_createdat }} oleh :
                    </b-card-text>
                    <center>
                    <div class="garis-orange" style="width:100%"></div>
                    </center>
                    <b-card-text>
                    <span>
                    <b-img v-bind:src="foto_pengguna" rounded="circle" width="150px"></b-img> Nama Fundraiser{{ nama_fundraiser }}</span>
                    </b-card-text>
                </b-card>
                </b-col>
            </b-row>
            <br><br>

            <div class="Data-galangdana">
                <b-container>
                    <h5>Update</h5>
                    <div class="garis-orange" width="100%"></div>
                    <br>
                    <div class="update-galangdana" width="100%" height="auto" background-color="lightblue">
                        <p>Belum ada update.{{ data_update }}</p>
                    </div>
                    <br><br>

                    <h5>Deskripsi Galang dana</h5>
                    <div class="garis-orange" width="100%"></div>
                    <br>
                    <div class="deskripsi-galangdana" width="100%" height="auto" border="2 px solid orange">
                    <p> {{ deskripsi_galangdana }} </p>
                    </div>

                    <br><br>
                    <div class="jmlh-donatur">
                        <h4>{{ jmlh_donatur }} orang sudah melakukan lelang untuk mendanai galang dana ini, anda siap bergabung?</h4>
                        <br>
                        <b-button variant="orange" style="bakcground-color:orange; width:100%; color:white;">Donasi sekarang</b-button>
                    </div>
                    <br>
                    <center>
                    <div class="bawah">
                        <b-col sm="12" md="8" lg="8">
                        <p>Ingin membuat galang dana anda sendiri? Mulailah sekarang!</p>
                        </b-col>
                        <b-col sm="12" md="8" lg="4">
                        <b-button>Mulai galang dana</b-button>
                        </b-col> 
                    </div>
                    </center>

                </b-container>

            </div>
        </b-container>
    


    </div> 

</template><script>
export default {
    name:'Detailgalangdana',
    components:{

    },
    data() {
        return{
            foto_galangdana:require('../assets/img/beasiswa1.jpg'),
            jdl_galangdana:'Judul Galang Dana',
            dana_terkumpul:'Rp.' +0,
            dana_target:+0 ,
            value:+0,
            max:100,
            deskripsi_galangdana:'',
            data_update:null,


        }
    }
    
}
</script>
<style scoped>
.bawah{
    width: 96%;
height: auto;

background: #FCF5C1;
border-radius: 12px;
}
</style>
