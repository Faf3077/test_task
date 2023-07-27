<template>
  <div class="page">
    <div class="Rectangle">
      <button class="AddRow"><img class="iconBtnAddRow" src="../assets/plus.svg" alt=""><span class="row">Добавить строку</span></button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>


<style scoped>
.Rectangle {
  width: 500px;
  height: 75px;
  margin: 25px 0 25px 25px;
  padding: 20px 1278px 20px 25px;
  border-radius: 10px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.07);
  border: solid 1px #eeeff1;
  background-color: #fff;
}
.AddRow{
  display: flex;
  align-items: center;
  width: 146px;
  height: 35px;
  padding: 10px 15px 10px 10px;
  border-radius: 5px;
  background-color: #5e9fee;
  
  margin: 20px 0 20px 25px;
}
.iconBtnAddRow{
  margin: 0 7px 0 0;
}
.row{
  font-size: 14px;
  font-family: MyriadPro;
  color: #fff;
}
</style>
