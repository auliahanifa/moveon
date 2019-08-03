<template>
    <div class="Galangdana" style="margin-top:80px;">
        <b-container>
            <b-row>
                <b-col sm="12" md="8" lg="6" v-for="item in detail" :key="item.id">
                    <h3>{{ item.judul }}</h3>
                    <div class="detail-foto" style="width: 100%; height: 23rem; border:2 px solid black; 
                    background-color: lightblue;">
                    <img v-bind:src="item.path_photo" alt="" style="width: 100%; height: 23rem; padding:5px;">
                    </div>
                </b-col>
                    
                <b-col sm="12" md="12" lg="6">
                 
                 <b-card
                    v-bind:title="item.created_at"
                    tag="article"
                    style="max-width: 100%; font-style:bold;"
                    class="mb-2"
                >
                    <b-card-text>Terkumpul {{ item.dana_terkini }} dari Rp.
                    {{ item.target_dana }}
                    </b-card-text>
                    <div>
                    <b-progress :value="item.dana_terkini" :max="item.target_dana" class="mb-4"></b-progress>        
                    </div>
                    <b-card-text>Dipublikasikan sejak{{ item.created_at }}
                    <br/>{{ item.range_waktu }} hari tersisa</b-card-text>
                    <b-button>
                    Donasi Sekarang
                    </b-button>
                    <br/>
                    <br/>
                    <b-button ><a href="whatsapp://send?text=The text to share!" data-action="share/whatsapp/share">Share via Whatsapp</a>
                    </b-button>
                    <b-card-text>
                    Penggalangan dana dimulai sejak {{ item.created_at }} oleh :
                    {{ item.id_pengguna }} </b-card-text>
                    <center>
                    <div class="garis-orange" style="width:100%"></div>
                    </center>
                    <b-card-text>
                    <!-- <span> -->
                    <!-- <b-img v-bind:src="path_photo" rounded="circle" width="150px"></b-img> Nama Fundraiser{{ nama }}</span> -->
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

                    <h5>Deskripsi Galang dana</h5>
                    <div class="garis-orange" width="100%"></div>
                    <br>
                    <p>Belum ada update.{{ item.update }}</p>
                    <br>
                    <div class="deskripsi-galangdana" width="100%" height="auto" border="2 px solid orange">
                    <p> {{ item.deskripsi }} </p>
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

</template>
<script>

export default {
    name:'Detailgalangdana',
    components:{

    },
    data() {
        return{
            jmlh_donatur: 41,
            detail:{
                judul:'',
                id_pengguna:'',
                target_dana:'',
                dana_terkini:'',
                created_at:'',
                update:'',
                range_waktu:'',
                deskripsi:''

            }
            
        };
    },
    props: {
    msg: String
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
