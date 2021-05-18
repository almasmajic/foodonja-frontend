<template>
  <div class="center">
    <div class="recipe">
      <img :src="data.img" style="width:100%" />
      <div class="container">
        <h4>
          <b>{{ data.title }}</b>
        </h4>
        <p>{{ data.author }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecipeCard",
  props: ["data"],
};
</script>

<style>
.center {
  display: flex;
  justify-content: center;
  padding-top: 30px;
}
.recipe {
  width: 40%;
}
.container {
  padding: 2px 16px;
  background-color: #165fe3;
  color: #ffffff;
  font-family: "Amatic SC";
  font-size: 20px;
}
</style>
