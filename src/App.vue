<template>
  <div>
    <div class="header">

      <div class="title">
        <h1>Sample App</h1>
      </div>
      <div class="member">
        <p>ログイン | 新規登録</p>
      </div>
      
    </div>
    <router-view/>
  </div>
</template>

<style>
.header{
  display:flex;
  justify-content:space-between;
  height:100px;
  align-items:center;
  background-color:lightgray;
}
.title{
  margin-left:10px;
  
}
.member{
  margin-right:10px;
}

</style>
