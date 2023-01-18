<template>
  <div>
    <p v-for="brand in allCars.cars.brand" :key="brand.brand" @click="clickOnBrand(brand)">
      {{ brand.brand }}
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'CarBrand',
  computed: {
    ...mapState(['allCars'])
  },
  methods: {
    clickOnBrand (brand) {
      this.$store.dispatch('getBrandName', brand)
    }
  }

}
</script>

      <style scoped>

p {
  color: #777;
    padding: 7px 10px;
    display: table;
    margin-top: 7px;
    margin-right: -15px;
    transition: all .4s linear;
    border: 1px solid #fff;
    cursor: pointer;
    font-size: 15px;
}
p:hover {
  border-color: #15c39a45;
}
      </style>
