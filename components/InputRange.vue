<template>
  <div>
    <input
      :value="value"
      class="data"
      type="number"
      @input="handleChange($event)"
    ><span>km</span>
  </div>
</template>

<script>
export default {
  name: 'InputRange',
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  methods: {
    handleChange (event) {
      this.$emit('input', +event.target.value)
    }
  }
}
</script>

  <style scoped>
.data {
  text-align: center;
    color: #000;
    font-weight: bold;
    margin-bottom: 60px;
    width: 100px;
    padding: 10px 0;
    margin-right: 6px;
    color: #777;
    border: 1px solid #888a93;
    margin-top: 50px;
    font-size: 18px;
    border-radius: 6px;
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
