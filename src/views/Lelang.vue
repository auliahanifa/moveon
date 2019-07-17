<template>
  <div class="lelang">
    <h1>laman lelang</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import BarangLelang from '@/components/BarangLelang.vue'
import FormDonasibarang from '@/components/FormDonasibarang.vue'

export default {
  name: 'lelang', 
  components: {
    BarangLelang,
    FormDonasibarang
  }
}
</script>
