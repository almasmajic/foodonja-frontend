<template>
  <div id="app">
    <Header title="whatever" />
    <img class="image1" src="./assets/ellipse.png" />
    <img class="image2" src="./assets/ellipse2.png" />
    <img class="image3" src="./assets/ellipse3.png" />

    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  components: {
    Header,
  },
};
</script>

<style>
* {
  margin: 0;
}
.image1 {
  position: absolute;
  width: 250px;
  height: 250px;
  left: -20px;
  top: 74vh;
}

.image2 {
  position: absolute;
  width: 150px;
  height: 250px;
  right: 0px;
  top: 305.42px;
}

.image3 {
  position: absolute;
  width: 90px;
  height: 150px;
  right: 0px;
  top: 77vh;
}
</style>
