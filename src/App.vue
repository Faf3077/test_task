<template>
  <div class="wrapper">
    <div class="decorBlock">

    </div>
    <div class="contentBlock">
      <span class="title">
        Проведение ТО и мелкий ремонт
      </span>
      <nav>
        <router-link to="/General">Общее</router-link>
        <router-link to="/">Товар списания</router-link>
        <router-link to="/AdditionalCosts">Доп. расходы</router-link>
      </nav>
      <router-view />
    </div>
  </div>
  
</template>

<style>
.wrapper {
  display: flex;
  width: 100%;
  padding: 0 25px 0 0;
  background-color: #fbfcfd;

}

.decorBlock {
  width: 229px;
  height: 100vh;
  margin: 0 25px 0 0;
  background: radial-gradient(circle at 29% 0, #000, #1c2734 103%);
}

.title {
  width: 433px;
  height: 31px;
  margin: 25px 68px 25px 25px;
  font-family: MyriadPro;
  font-size: 30px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000;
}
</style>
