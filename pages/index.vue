<template>
  <div class="details-parent">
    <div class="rightSide">
      <p>بر اساس <span>875,054</span></p>
      <p>معامله صورت گرفته</p>
      <div v-if="carBrand" class="filterName">
        <p>{{ carBrand }}</p>
        <i class="fa fa-close" @click="goToAllCars" />
      </div>
      <div v-if="carModel" class="filterName">
        <p>{{ carModel }}</p>
        <i class="fa fa-close" @click="goToModels" />
      </div>
      <div v-if="carTrim" class="filterName">
        <p>{{ carTrim }}</p>
        <i class="fa fa-close" @click="goToTrims" />
      </div>
      <div v-if="carYear" class="filterName">
        <p>{{ carYear }}</p>
        <i class="fa fa-close" @click="goToYears" />
      </div>
      <div v-if="sliderShow" class="range-filter">
        <p>کارکرد</p>
        <div class="filterName">
          <p>{{ carRange }}</p>
          <i class="fa fa-close" />
        </div>
      </div>
    </div>
    <div class="leftSide">
      <div class="sections">
        <template v-if="!carModels">
          <car-category :all-cars="allCars" />
        </template>
        <template v-if="carModels && !carTrims">
          <h4>مدل خودرو را انتخاب کنید:</h4>
          <div class="section">
            <car-item
              v-for="model in carModels"
              :key="model"
              :item="model"
              @carItemClick="getCarTrims(car.trims, model)"
            >
              {{ model }}
            </car-item>
          </div>
        </template>
        <template v-if="carTrims && !carYears">
          <h4>تریم خودرو را انتخاب کنید:</h4>
          <div class="section">
            <car-item
              v-for="trim in carTrims"
              :key="trim"
              :item="trim"
              @carItemClick="getCarYears(car.years, trim)"
            >
              {{ trim }}
            </car-item>
          </div>
        </template>
        <template v-if="carYears && !sliderShow">
          <h4>سال تولید خودرو را انتخاب کنید:</h4>
          <div class="section">
            <car-item
              v-for="year in carYears"
              :key="year"
              :item="year"
              @carItemClick="getNext(true, year)"
            >
              {{ year }}
            </car-item>
          </div>
        </template>
        <template v-if="sliderShow">
          <h4>کارکرد خودرو را وارد کنید:</h4>
          <range-slider :value="carRange" @input="handleCustomChange" />
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
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'IndexPage',
  data () {
    return {
      carModel: null,
      carTrim: null,
      carYear: null
    }
  },
  computed: {
    ...mapState(['allCars', 'car', 'carModels', 'carTrims', 'carYears', 'sliderShow', 'carRange', 'carBrand'])
  },
  methods: {
    getCarTrims (trims, carModel) {
      this.$store.dispatch('getCarTrims', trims)
      this.carModel = carModel
    },
    getCarYears (years, carTrim) {
      this.$store.dispatch('getCarYears', years)
      this.carTrim = carTrim
    },
    getNext (value, carYear) {
      this.$store.commit('getNext', value)
      this.carYear = carYear
    },
    handleCustomChange (value) {
      this.$store.dispatch('updateCarRange', value)
    },
    goToYears () {
      this.$store.commit('goToYears')
      this.carYear = null
    },
    goToTrims () {
      this.$store.commit('goToTrims')
      this.carYear = null
      this.carTrim = null
    },
    goToModels () {
      this.$store.commit('goToModels')
      this.carYear = null
      this.carTrim = null
      this.carModel = null
    },
    goToAllCars () {
      this.$store.commit('goToAllCars')
      this.carYear = null
      this.carTrim = null
      this.carModel = null
    }
  }
}
</script>

<style scoped>
.details-parent {
    display: flex;
    height: 100%;
}
.rightSide {
    width: 18%;
    padding: 0px 0px 0 20px;
    border-left: 1px solid;
}
.rightSide > p {
  line-height: 1.7;
    font-weight: 600;
    color: #666;
    font-size: 14px;
}
.rightSide p span {
    color: purple;
}
.leftSide {
    width: 82%;
}
.sections {
  height: 100%;
  overflow: hidden;
  padding-right: 25px;
}
.sections > h4 {
    margin-bottom: 30px;
    font-size: 14px;
}
.section {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}
.section p {
  color: #777;
  padding: 10px 14px;
  display: flex;
  margin-left: 25%;
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
.filterName p {
    font-size: 14px;
    color: #777;
}
.filterName i {
    color: #777;
}
.range-filter > p {
    line-height: 2.3;
    font-size: 15px;
}

.footer {
  margin-right: 10px;
  margin-top: 20px;
  font-size: 11px;
}

@media only screen and (max-width: 800px) {
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

}
</style>
