<template>
    <div class="Galangdana" style="margin-top:80px;">
        <b-container>
            <b-row>
                <b-col sm="12" md="8" lg="6">
                    <h3>{{ jdl_galangdana }}</h3>
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
                    <b-button >
                    Donasi Sekarang
                    </b-button>
                    <br/>
                    <br/>
                    <b-button ><a href="whatsapp://send?text=The text to share!" data-action="share/whatsapp/share">Share via Whatsapp</a>
                    </b-button>
                    <b-card-text>
                    Penggalangan dana dimulai sejak {{ galangdana_createdat }} oleh :
                    </b-card-text>
                    <div class="garis-orange"></div>
                    <b-card-img v-bind:src="image"></b-card-img>
                    <b-card-text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </b-card-text>
                    <b-card-text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </b-card-text>







                    <b-button href="#" variant="primary">Go somewhere</b-button>
                </b-card>
                </b-col>
            </b-row>
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
            value:'to',
            max:100,

        }
    }
    
}
</script>
<style scoped>

</style>
