<template>
  <div class="header">
    <div class="logo">
      <router-link to="/search">
        <img class="logo" src="../assets/logo.svg" />
      </router-link>
    </div>

    <div class="titleDiv">
      <h3 class="title">{{ title }}</h3>
    </div>

    <div class="icons">
      <div class="icon">
        <img src="../assets/headerIcons/add.svg" />
        <p class="text" style="text-align: center; margin-left: 8px">
          Add a <br />
          new recipe
        </p>
      </div>
      <div class="icon">
        <img src="../assets/headerIcons/favourites.svg" />
        <p class="text" style="margin-left: 10px">Favourites</p>
        <br />
      </div>
      <div class="icon">
        <img src="../assets/headerIcons/profile.svg" />
        <p class="text" style="margin-left: 10px">My profile</p>
        <br />
      </div>
      <div class="icon">
        <img src="../assets/headerIcons/egg.svg" />
        <p class="text" style="margin-left: 15px">Plop out</p>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Dosis&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Amatic+SC&family=Dosis&display=swap");

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #7cb9e8;
}
.logo {
  margin-left: 20px;
  cursor: pointer;
}
.titleDiv {
  display: flex;
  justify-content: center;
}
.title {
  margin-left: 115px;
  font-family: "Amatic SC", cursive;
  font-size: 50px;
  color: #165fe3;
  font-weight: normal;
}

.icons {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.icons img {
  height: 30px;
  margin-right: 15px;
  width: 80px;
}

.icons.icon {
  vertical-align: top;
  display: inline-block;
  text-align: center;
}

.icons p {
  color: black;
  margin-right: 20px;
  display: block;
}

.text {
  font-family: "Dosis", sans-serif;
}
</style>
