  
  <template>
   <div class="about" id="app">
    <div>
  <div class="form">
    <div class="form-header">
      <p id="step">STEP2</p>
      <p id="inst">以下にお答えください</p>
    </div>
    <div class="body">
      <div>
        <p class="genre">現在、生命保険に加入されていますか？</p>
          <label><input name="q1" type="radio" @click="showQ2" value="はい" @change="updateQ1">はい</label>
          <label><input name="q1" type="radio" @click="showQ2" value="いいえ" @change="updateQ1">いいえ</label>
      </div>
      <transition>
      <div v-if="q2">
        <p class="genre">現在入院中ですか。または、最近3ヶ月以内に医師の診断・検査の結果、入院・手術をすすめられたことはありますか？</p>
          <label><input name="q2" type="radio" @click="showQ3" value="はい" @change="updateQ2">はい</label>
          <label><input name="q2" type="radio" @click="showQ3" value="いいえ" @change="updateQ2">いいえ</label>
      </div>
      </transition>
      <transition>
      <div v-if="q3">
        <p class="genre">過去5年以内に、病気やけがで、手術を受けたことまたは継続して7日以上の入院をしたことはありますか？</p>
          <label><input name="q3" type="radio" value="はい" @change="updateQ3">はい</label>
          <label><input name="q3" type="radio" value="いいえ" @change="updateQ3">いいえ</label>
      </div>
       </transition>
    </div>
  </div>
  <div class="button-group">
   
    <router-link to="/" class="button">前へ戻る ＞</router-link>
 
    <router-link to="/page3" class="button">次へ進む ＞</router-link>
      <transition name="fade">
      <router-view/>
    </transition>
     
  </div>
</div>

  </div>
</template>


<style scoped>

.fade-enter-active,
.fade-leave-active {
    transition: opacity 3s ease;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.v-enter-active, .v-leave-active {
  transition: opacity .5s;
}
.v-enter, .v-leave-to {
  opacity: 0;
}
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

export default {
  data() {
    return {
      q2: false,
      q3: false,
    }
  },
  methods: {
    showQ2() {
      this.q2 = true
    },
    showQ3() {
      this.q3 = true
    },
    updateQ1(e) {
      this.$store.commit('updateQ1', e.target.value)
    },
    updateQ2(e) {
      this.$store.commit('updateQ2', e.target.value)
    },
    updateQ3(e) {
      this.$store.commit('updateQ3', e.target.value)
    },
  }
}</script>
