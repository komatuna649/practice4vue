<template>
  <div class="home">
    <div class="form">
    <div class="form-header">
      <p id="step">STEP1</p>
      <p id="inst">お客様の情報を入力してください</p>
    </div>
    <div class="form-body">
      <p class="genre">-性別-</p>
        <label><input type="radio" name="gender" value="男性" @change="updateGender">男性</label>
        <label><input type="radio" name="gender" value="女性" @change="updateGender">女性</label>
      <p class="genre">-生年月日-</p>
      <select name="year" id="id_year" @change="updateYear">
        <option v-for="(year, key) in years" :key="key">{{ year }}</option>
      </select>年
      <select name="month" id="id_month" @change="updateMonth">
        <option v-for="(month, key) in months" :key="key">{{ month }}</option>
      </select>月
      <select name="day" id="id_day" @change="updateDay">
        <option v-for="(day, key) in days" :key="key">{{ day }}</option>
      </select>日
    </div>
  </div>
  
  <router-link to="/about">
  <div class="button-group">
  <button class="button" >次へ進む ＞</button>
  </div>
</router-link>
  </div>
</template>


<style scoped>
.form{
  width:1000px;
  margin:100px auto;
  border:1px solid skyblue;
}
.form-header{
  display:flex;
  justify-content:space-between;
  background-color:paleturquoise;

width:1000px;
height:50px;
}

#step{
background-color:royalblue;
color:white;
margin-top:0;
}

#inst{
padding-right:300px;

font:bold;
}

.form-body{
  padding:10px;
}

.genre{
  color:royalblue;
}

.button{
  padding:5px;
  text-align:center;
  width:100px;
  background-color:mediumaquamarine;
  color:white;
}
.button-group{
  text-align:center;
}
</style>

<script>
import { yearList, monthList, dayList } from '@/utiles/definition';
export default {
  data() {
    return {
      years: yearList,
      months: monthList,
      days: dayList,
    }
  },
  methods: {
    updateGender (e) {
      this.$store.commit('updateGender', e.target.value)
    },
    updateYear (e) {
      this.$store.commit('updateYear', e.target.value)
    },
    updateMonth (e) {
      this.$store.commit('updateMonth', e.target.value)
    },
    updateDay (e) {
      this.$store.commit('updateDay', e.target.value)
    },
  }
}
</script>

