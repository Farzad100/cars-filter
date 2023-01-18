<template>
  <ul class="brands">
    <li v-for="category in allCars" :key="category.category">
      {{ category.category }}
      <car-brand />
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'CarCategory',
  computed: {
    ...mapState(['allCars'])
  },
  methods: {
    getModels (brand) {
      this.$store.dispatch('getModelsName', brand)
    }
  }

}
</script>

<style>
.brands li {
    color: #15c39a;
    font-weight: bold;
    margin-bottom: 10px;
    font-size: 18px;
    margin-right: 20px;
}
</style>
