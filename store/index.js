export const state = () => ({
  allCars: [
    {
      category: 'ب',
      cars: [
        {
          brand: 'ب ام و',
          models: ['X3', 'X4'],
          trims: ['28'],
          years: ['2013', '2014', '2015', '2016', '2017']
        },
        {
          brand: 'یرلیانس',
          models: ['Bl1', 'Bl2', 'Bl3'],
          trims: ['B1', 'B2', 'B3'],
          years: ['2013', '2014', '2015', '2016', '2017']
        }
      ]
    },
    {
      category: 'پ',
      cars: [
        {
          brand: 'پراید',
          models: ['PR1', 'PR2'],
          trims: ['P1', 'P2'],
          years: ['1388', '1389', '1390', '1391', '1392', '1393', '1394', '1395', '1396', '1397', '1398', '1399', '1400']
        },
        {
          brand: 'پژو',
          models: ['206', 'Pars', '495'],
          trims: ['P1', 'P2', 'P3'],
          years: ['1388', '1389', '1390', '1391', '1392', '1393', '1394', '1395', '1396', '1397', '1398', '1399', '1400']
        }
      ]
    },
    {
      category: 'ت',
      cars: [
        {
          brand: 'تویوتا',
          models: ['TU1', 'TU2'],
          trims: ['T1', 'T2'],
          years: ['2013', '2014', '2015', '2016', '2017']
        },
        {
          brand: 'تیبا',
          models: ['XE', 'SX', 'SE'],
          trims: ['T1', 'T2', 'T3'],
          years: ['1388', '1389', '1390', '1391', '1392', '1393', '1394', '1395', '1396', '1397', '1398', '1399', '1400']
        }
      ]
    },
    {
      category: 'ج',
      cars: [
        {
          brand: 'جک',
          models: ['Jok1', 'Jok2'],
          trims: ['J1', 'J2'],
          years: ['2013', '2014', '2015', '2016', '2017']
        }
      ]
    },
    {
      category: 'چ',
      cars: [
        {
          brand: 'چانگان',
          models: ['CH1', 'CH2'],
          trims: ['233', '234'],
          years: ['2016', '2017', '2018', '2019', '2020', '2022']
        }
      ]
    },
    {
      category: 'د',
      cars: [
        {
          brand: 'دنا',
          models: ['EF7', 'EF8'],
          trims: ['EF+'],
          years: ['1388', '1389', '1390', '1391', '1392', '1393', '1394', '1395', '1396', '1397', '1398', '1399', '1400']
        }
      ]
    },
    {
      category: 'ر',
      cars: [
        {
          brand: 'رانا',
          models: ['X3', 'X4'],
          trims: ['28'],
          years: ['1388', '1389', '1390', '1391', '1392', '1393', '1394', '1395', '1396', '1397', '1398', '1399', '1400']
        },
        {
          brand: 'ریو',
          models: ['R1', 'R2', 'R3'],
          trims: ['RU1', 'RU2'],
          years: ['2013', '2014', '2015', '2016', '2017']
        }
      ]
    },
    {
      category: 'س',
      cars: [
        {
          brand: 'سوزوکی',
          models: ['X3', 'X4'],
          trims: ['28'],
          years: ['2013', '2014', '2015', '2016', '2017']
        }
      ]
    },
    {
      category: 'ف',
      cars: [
        {
          brand: 'فولکس',
          models: ['Old', 'New'],
          trims: ['FL'],
          years: ['2013', '2014', '2015', '2016', '2017']
        }
      ]
    },
    {
      category: 'ک',
      cars: [
        {
          brand: 'کوییک',
          models: ['R', 'R+'],
          trims: ['QR'],
          years: ['1388', '1389', '1390', '1391', '1392', '1393', '1394', '1395', '1396', '1397', '1398', '1399', '1400']
        },
        {
          brand: 'کیا',
          models: ['K1', 'K2', 'K3'],
          trims: ['KIYA'],
          years: ['2013', '2014', '2015', '2016', '2017']
        }
      ]
    },
    {
      category: 'م',
      cars: [
        {
          brand: 'مزدا',
          models: ['M3', 'M4'],
          trims: ['MAZ'],
          years: ['2013', '2014', '2015', '2016', '2017']
        }
      ]
    },
    {
      category: 'ن',
      cars: [
        {
          brand: 'نیسان',
          models: ['N1', 'N2'],
          trims: ['NEYSAN'],
          years: ['1388', '1389', '1390', '1391', '1392', '1393', '1394', '1395', '1396', '1397', '1398', '1399', '1400']
        }
      ]
    },
    {
      category: 'ه',
      cars: [
        {
          brand: 'هایما',
          models: ['HY1', 'HY2'],
          trims: ['HYMA'],
          years: ['2013', '2014', '2015', '2016', '2017']
        },
        {
          brand: 'هیوندا',
          models: ['H1', 'H2', 'H3'],
          trims: ['HYON'],
          years: ['2013', '2014', '2015', '2016', '2017']
        }
      ]
    }

  ],
  car: null,
  brandName: null,
  modelsName: null,
  modelName: null,
  trimsName: null,
  trimName: null,
  years: null,
  carYear: null,
  sliderShow: false,
  value: 5000

})

export const mutations = {
  setCar (state, payload) {

  },
  setBrandName (state, payload) {
    state.brandName = payload
  },
  setModelsName (state, payload) {
    state.car = payload
    state.modelsName = payload.models
    state.trimsName = payload.trims
    state.years = payload.years
  },
  setModelName (state, payload) {

  },
  setTrimsName (state, payload) {

  },
  setTrimName (state, payload) {

  },
  setYears (state, payload) {

  },
  setCarYear (state, payload) {

  }
}

export const actions = {
  getCar (state, payload) {

  },
  getBrandName ({ commit }, payload) {
    commit('setBrandName', payload)
  },
  getModelsName ({ commit }, payload) {
    commit('setModelsName', payload)
  },
  getModelName (state, payload) {

  },
  getTrimsName (state, payload) {

  },
  getTrimName (state, payload) {

  },
  getYears (state, payload) {

  },
  getCarYear (state, payload) {

  }
}
