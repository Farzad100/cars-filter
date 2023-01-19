<template>
  <p @click="clickOnItem">
    {{ item }}
  </p>
</template>

<script>
export default {
  name: 'CarItem',
  props: {
    item: {
      type: [String, Number],
      required: true
    }
  },
  methods: {
    clickOnItem () {
      this.$emit('carItemClick')
    }
  }
}
</script>

<style scoped>
p {
  color: #777;
  padding: 4px 12px;
    display: table;
    margin-top: 7px;
    margin-right: -15px;
    transition: all .4s linear;
    border: 1.5px solid #fff;
    cursor: pointer;
    font-size: 13px;
    border-radius: 5px;
    font-weight: normal;
}
p:hover {
    border-color: #07dd85;
}
</style>
