
<template>
<div>
  <div class="form">
    <div class="form-header">
      <p id="step">STEP4</p>
      <p id="inst">以下の内容をご確認下さい</p>
    </div>
    <div class="body">
      <p class="genre">-性別-</p>
      <p class="answer">{{gender}}</p>
      <p class="genre">-生年月日-</p>
      <p class="answer">{{year}}年{{month}}月{{day}}日</p>
      <p class="genre">-現在、生命保険に加入されていますか？-</p>
      <p class="answer">{{q1}}</p>
      <p class="genre">-現在入院中ですか。または、最近3ヶ月以内に医師の診断・検査の結果、入院・手術をすすめられたことはありますか？-</p>
      <p class="answer">{{q2}}</p>
      <p class="genre">-過去5年以内に、病気やけがで、手術を受けたことまたは継続して7日以上の入院をしたことはありますか？-</p>
      <p class="answer">{{q3}}</p>
      <p class="genre">-ご相談内容-</p>
      <p class="answer">{{consul}}</p>
    </div>
  </div>
  <div class="button-group">
    <router-link to="/page3" class="button">前へ戻る ＞</router-link>
    <router-link to="/" class="button">次へ進む ＞</router-link>
  </div>
</div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    computed:{
        ...mapState({
            gender:'gender',
            year:'year',
            day:'day',
            month:'month',
            q1:'q1',
            q2:'q2',
            q3:'q3',
            consul:'consul'
        })
    }
}

</script>

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

