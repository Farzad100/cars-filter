<template>
  <div>
    <div class="main">
      <div class="parent">
        <div class="header">
          <h3>ماشین حساب</h3><span>محاسبه قیمت خودرو کارکرده</span>
        </div>
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  direction: rtl;
  box-sizing: border-box;
}
body {
  direction: rtl;
  font-family:'yekan';
}
.main {
    display: flex;
    justify-content: center;
    height: 95vh;
    overflow: hidden;
}
.header {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
}
.header h3 {
    margin-left: 10px;
    border-left: 1px solid;
    padding-left: 10px;
}
.header span {
    color: #888;
    font-weight: 500;
    font-size: 13px;
}
.details-parent {
    display: flex;
    height: 100%;
}
.parent {
  width: 800px;
    height: 400px;
    margin-top: 2%;

}
@media only screen and (max-width: 800px) {
  .main {
    height: 130vh;
    overflow: auto;
  }
  .parent {
    width: 90%;
    height: auto;
  }
}
@media only screen and (max-width: 540px) {
  .main {
    height: auto;
    overflow: auto;
  }
}
</style>
