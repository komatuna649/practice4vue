 import Vue from 'vue'
 import Vuex from 'vuex'
 Vue.use(Vuex)
 const store =  new Vuex.Store({
  state: {
    gender:'',
    year:'',
    month:'',
    day:'',
    q1: 'q1',
    q2: 'q2',
    q3: 'q3',
    consul:'consul'
  },
  mutations: {
   updateGender(state,gender){
     state.gender = gender
   },
   updateYear(state,year){
    state.year = year
  },
  updateMonth(state,month){
    state.month = month
  },
  updateDay(state,day){
    state.day = day
  },
  updateQ1(state,q1){
    state.q1 = q1
  },
  updateQ2(state,q2){
    state.q2 = q2
  },
  updateQ3(state,q3){
    state.q3 = q3
  },
  updateConsul(state,consul){
    state.consul = consul 
  }
  },
  actions: {
  },
  modules: {
  }
  })
  
  export default store
