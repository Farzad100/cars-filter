<template>
  <div class="main">
    <div class="parent">
      <div class="header">
        <h2>ماشین حساب</h2><span>محاسبه قیمت خودرو کارکرده</span>
      </div>
      <div class="details-parent">
        <div class="rightSide">
          <p>بر اساس <span>875,054</span></p>
          <p>معامله صورت گرفته</p>
          <div v-if="brandName" class="filterName">
            <p>{{ brandName }}</p>
            <i class="fa fa-close" @click="goToAllCars" />
          </div>
          <div v-if="modelName" class="filterName">
            <p>{{ modelName }}</p>
            <i class="fa fa-close" @click="goToModels" />
          </div>
          <div v-if="trimName" class="filterName">
            <p>{{ trimName }}</p>
            <i class="fa fa-close" @click="goToTrims" />
          </div>
          <div v-if="carYear" class="filterName">
            <p>{{ carYear }}</p>
            <i class="fa fa-close" @click="goToYears" />
          </div>
          <div v-if="sliderShow" class="range-filter">
            <p>کارکرد</p>
            <div class="filterName">
              <p>{{ value }}</p>
              <i class="fa fa-close" />
            </div>
          </div>
        </div>
        <div class="leftSide">
          <div class="sections">
            <template v-if="!car">
              <h4>برند خودرو را انتخاب کنید:</h4>
              <ul class="brands">
                <li v-for="category in allCars" :key="category.category">
                  {{ category.category }}

                  <car-brand v-for="brand in category.cars" :key="brand.brand" :brand="brand.brand" @brandClick="getModels(brand)">
                    {{ brand.brand }}
                  </car-brand>
                </li>
              </ul>
            </template>

            <template v-if="brandName && !trimsName">
              <h4>مدل خودرو را انتخاب کنید:</h4>
              <div class="trims-section">
                <car-model v-for="model in car.models" :key="model" :model="model" @modelClick="getTrims(car.trims , model)">
                  {{ model }}
                </car-model>
              </div>
            </template>
            <template v-if="trimsName && !years">
              <h4>تریم خودرو را انتخاب کنید:</h4>
              <div class="trims-section">
                <car-trim v-for="trim in car.trims" :key="trim" :trim="trim" @trimClick="getYears(car.years, trim)" />
              </div>
            </template>
            <template v-if="years && !sliderShow">
              <h4>سال تولید خودرو را انتخاب کنید:</h4>
              <div class="years-section">
                <car-year v-for="year in car.years" :key="year" :year="year" @yearClick="getNext(year)" />
              </div>
            </template>
            <template v-if="sliderShow">
              <h4>کارکرد خودرو را وارد کنید:</h4>
              <range-slider @input="getSliderValue" />
            </template>
          </div>
          <ul class="footer">
            <li>
              قیمت خودروها بر اساس پایش، تجمیع و تحلیل قیمت های اعلام شده از سوی نمایندگی، قیمت معاملات
              انجام شده در بیش از 150 نمایشگاه فعال سطح کشور و مراکز خرید و فروش پایتخت و نیز بررسی های میدانی
              در بازار خودرو یه صورت روزانه استخراج می شود.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'IndexPage',
  data () {
    return {
      car: null,
      brandName: null,
      trimsName: null,
      years: null,
      value: 5000,
      sliderShow: false,
      modelName: null,
      trimName: null,
      carYear: null
    }
  },
  computed: {
    ...mapState(['allCars'])
  },
  methods: {
    getModels (brand) {
      this.car = brand
      this.brandName = brand.brand
    },
    getTrims (trims, model) {
      this.modelName = model
      this.trimsName = trims
    },
    getYears (years, trim) {
      this.trimName = trim
      this.years = years
    },
    getNext (year) {
      this.carYear = year
      this.sliderShow = true
    },
    updateSlider (e) {
      this.value = +e.target.value
    },
    goToYears () {
      this.sliderShow = false
      this.carYear = null
    },
    goToTrims () {
      this.years = null
      this.carYear = null
      this.sliderShow = false
      this.trimName = null
    },
    goToModels () {
      this.modelName = null
      this.trimsName = null
      this.trimName = null
      this.sliderShow = false
      this.years = null
      this.carYear = null
    },
    goToAllCars () {
      this.brandName = null
      this.car = null
      this.modelName = null
      this.trimsName = null
      this.trimName = null
      this.sliderShow = false
      this.years = null
      this.carYear = null
    },
    getSliderValue (value) {
      this.value = value
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  direction: rtl;
  box-sizing: border-box;
}
body {
  direction: rtl;
}
.main {
    display: flex;
    justify-content: center;
    height: 95vh;
    overflow: hidden;
}
.header {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
}
.header h2 {
    margin-left: 10px;
    border-left: 1px solid;
    padding-left: 10px;
}
.header span {
    color: #888;
    font-weight: bold;
}
.details-parent {
    display: flex;
    height: 100%;
}
.parent {
  width: 800px;
    height: 400px;
    margin-top: 2%;

}

.rightSide {
    width: 18%;
    padding: 0px 0px 0 20px;
    border-left: 1px solid;
}
.rightSide > p {
    line-height: 1.7;
    font-weight: bold;
    color: #666;
}
.rightSide p span {
    color: purple;
}
.leftSide {
    width: 82%;
    padding-right: 25px;
}
.sections {
  height: 100%;
  overflow: hidden;
}
.sections>h4 {
    margin-bottom: 30px;
}
.brands li {
  color: #15c39a;
    font-weight: bold;
    margin-bottom: 8px;
    font-size: 18px;
    margin-right: 15px;
}

.brands {
  display: flex;
    flex-flow: column wrap;
    height: 350px;
}

.footer {
  margin-right: -27px;
  margin-top: 20px;
  font-size: 14px;
}

.filterName {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ccccccba;
    border-radius: 3px;
    padding: 5px 8px;
    margin-top: 3px;
}
.filterName i {
    color: #777;
}
.range-filter > p {
    line-height: 2.3;
}
.models-section {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}

.trims-section {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}

.years-section {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}
@media only screen and (max-width: 800px) {
  .main {
    height: 130vh;
    overflow: auto;
  }
  .parent {
    width: 90%;
    height: auto;
}
.sections {
  overflow: auto;
}
.brands {
  height: 700px;
}
}
@media only screen and (max-width: 540px) {
  .rightSide {
    width: 35%;
  }
  .leftSide {
    width: 65%;
    padding-right: 15px;
  }
  .footer {
    margin-right: -15px;
  }
  .main {
    height: auto;
    overflow: auto;
  }
}

</style>
