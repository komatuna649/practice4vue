
<template>
<div>
  <div class="form">
    <div class="form-header">
      <p id="step">STEP3</p>
      <p id="inst">ご相談内容をご記入ください</p>
    </div>
    <div class="body">
      <p class="genre">-ご相談内容-</p>
        <textarea cols="135" rows="20" ></textarea>
    </div>
  </div>
  <div class="button-group">
    <router-link to="/about" class="button">前へ戻る ＞</router-link>
    <router-link to="/page4" class="button">次へ進む ＞</router-link>
  </div>
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