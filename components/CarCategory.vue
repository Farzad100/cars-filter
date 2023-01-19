<template>
  <div>
    <h4>برند خودرو را انتخاب کنید:</h4>
    <ul class="brands">
      <li
        v-for="carsCategory in allCars"
        :key="carsCategory.category"
      >
        {{ carsCategory.category }}

        <car-item
          v-for="car in carsCategory.cars"
          :key="car.brand"
          :item="car.brand"
          @carItemClick="getCarModels(car)"
        >
          {{ car.brand }}
        </car-item>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CarCategory',
  props: {
    allCars: {
      type: Array,
      required: true
    }
  },
  methods: {
    getCarModels (car) {
      this.$store.dispatch('getCarModels', car)
    }
  }

}
</script>

<style scoped>
h4 {
    margin-bottom: 30px;
    font-size: 14px;
}
.brands {
  display: flex;
    flex-flow: column wrap;
    height: 350px;
}
.brands li {
  color: #07dd85;
    font-weight: bold;
    margin-bottom: 8px;
    font-size: 14px;
    margin-right: 15px;
}
@media only screen and (max-width: 800px) {
.brands {
  height: 700px;
}
}
</style>
