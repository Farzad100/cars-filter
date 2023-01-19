<template>
  <div class="slider-parent">
    <input-range v-model="currentValue" class="input-range" @input="handleCustomChange" />
    <div id="slider">
      <input
        ref="input"
        v-model.number="currentValue"
        class="range-slider"
        type="range"
        min="0"
        max="360000"
        step="1"
        @input="onInput"
      >
    </div>
    <button class="button">
      ادامه
    </button>
  </div>
</template>

<script>
export default {
  name: 'RangeSlider',
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  methods: {
    onInput () {
      this.$emit('input', parseInt(this.currentValue))
    },
    handleCustomChange (value) {
      this.$store.dispatch('updateCarInput', value)
    }
  }
}
</script>

  <style scoped>
  /* Slider CSS */
  .slider-parent {
      width: 100%;
      height: auto;
  }

  #slider {
      width: 75%;
      text-align: center;
      margin: 0 auto;
      margin-top: 58px;
      direction: ltr;
  }
  .range-slider {
    direction: ltr;
  }
  .input-range {
    text-align: center;
    direction: ltr;
    font-size: 20px;
  }

  input[type=range] {
      -webkit-appearance: none;
      display: block;
      width: 100%;
      margin: 16px 0;
      background: #999;

  }
  input[type=range]:focus {
    outline: none;
  }
  input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 3px;
    cursor: pointer;
    box-shadow: none;
    background: transparent;
    border-radius: 0px;
    border: none;
  }
  input[type=range]::-webkit-slider-thumb {
    box-shadow: none;
    border: 2px solid #15c39a;
    height: 20px;
    width: 20px;
    border-radius: 10px;
    background: #fff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -9px;
  }
  input[type=range]:focus::-webkit-slider-runnable-track {
    background: transparent;
  }
  input[type=range]::-moz-range-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    box-shadow: none;
    background: transparent;
    border-radius: 0px;
    border: none;
  }
  input[type=range]::-moz-range-thumb {
    box-shadow: none;
    border: 4px solid #000;
    height: 20px;
    width: 20px;
    border-radius: 10px;
    background: #000;
    cursor: pointer;
  }
  input[type=range]::-ms-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  input[type=range]::-ms-fill-lower {
    background: transparent;
    border: none;
    border-radius: 0px;
    box-shadow: none;
  }
  input[type=range]::-ms-fill-upper {
    background: transparent;
    border: none;
    border-radius: 0px;
    box-shadow: none;
  }
  input[type=range]::-ms-thumb {
    box-shadow: none;
    border: 4px solid #000;
    height: 20px;
    width: 20px;
    border-radius: 10px;
    background: #000;
    cursor: pointer;
    height: 4px;
  }
  input[type=range]:focus::-ms-fill-lower {
    background: transparent;
  }
  input[type=range]:focus::-ms-fill-upper {
    background: transparent;
  }
  button.button {
      border: none;
      background-color: #17c39b;
      padding: 8px 25px;
      border-radius: 5px;
      color: #fff;
      float: left;
      margin-top: 50px;
  }
  /* End Range Slider */
  @media only screen and (max-width: 800px) {
    #slider {
      width: 85%;

  }
  }

  </style>
