<template>
  <div class="trims-section">
    <p v-for="model in modelsName" :key="model">
      {{ model }}
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'CarModel',
  computed: {
    ...mapState(['modelsName'])
  },
  methods: {
    clickOnModel () {
      this.$emit('modelClick')
    }
  }

}
</script>

    <style scoped>

p {
    margin-left: 70px;
    color: #777;
    padding: 7px 10px;
    display: table;
    transition: all .4s linear;
    border: 1px solid #fff;
    cursor: pointer;
}
p:hover {
  border-color: #15c39a45;
}
    </style>
