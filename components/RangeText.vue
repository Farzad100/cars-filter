<template>
  <div>
    <input
      :value="value"
      class="data"
      type="number"
      @input="handleInput($event)"
    ><span>km</span>
  </div>
</template>

<script>
export default {
  name: 'RangeText',
  props: {
    value: {
      type: Number,
      default: 5000
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', +e.target.value)
    }
  }
}
</script>

<style scoped>
.data {
  text-align: center;
    color: #000;
    font-weight: bold;
    margin-bottom: 90px;
    width: 85px;
    padding: 8px 0;
    margin-right: 6px;
    color: #000;
    border: 1px solid #999;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>
