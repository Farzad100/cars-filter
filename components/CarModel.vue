<template>
  <p @click="clickOnModel">
    {{ model }}
  </p>
</template>

<script>
export default {
  name: 'CarModel',
  props: {
    model: {
      type: String,
      required: true
    }
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
