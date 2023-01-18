<template>
  <p @click="clickOnYear">
    {{ year }}
  </p>
</template>

<script>
export default {
  name: 'CarYear',
  props: {
    year: {
      type: String,
      required: true
    }
  },
  methods: {
    clickOnYear () {
      this.$emit('yearClick')
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
    margin-bottom: 20px;
}
p:hover {
  border-color: #15c39a45;
}
</style>
