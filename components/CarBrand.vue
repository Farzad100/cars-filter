<template>
  <p @click="clickOnBrand">
    {{ brand }}
  </p>
</template>

<script>
export default {
  name: 'CarBrand',
  props: {
    brand: {
      type: String,
      required: true
    }
  },
  methods: {
    clickOnBrand () {
      this.$emit('brandClick')
    }
  }

}
</script>

      <style scoped>

p {
  color: #777;
    padding: 8px 10px;
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
