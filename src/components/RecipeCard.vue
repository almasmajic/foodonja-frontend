<template>
  <div>
    <img :src="info.url" alt="Avatar" style="width:100%" />
    <div class="container">
      <h5>
        <i>{{ info.description }}</i>
      </h5>
      <p class="publishby">RECIPE PUBLISHED BY : {{ info.publishedBy }}</p>
      <a href="#" class="btn viewRecipe mt-1">RECIPE</a>
      <span v-if="info.liked"><i class="fa fa-heart likebutton"></i></span>
      <span v-if="!info.liked"><i class="far fa-heart likebutton"></i></span>
      <div class="time">{{ info.time }}</div>
    </div>
  </div>
  <!--<div class="card text-center">
      <div class="card-header">Published by: DOHVATI IME</div>
      <div class="card-body">
        <h5 class="card-title">Recipe name</h5>
        <img :src="info.url" class="recipeimg"/>
        <p class="mt-3">{{ info.description }}</p>
        <a href="#" class="btn btn-primary mt-1">View recipe</a>
      </div>
      <div class="card-footer text-muted">
        {{ info.time }}
      </div>
    </div>-->
  <!-- <div class="center">
    <div class="recipe">
      <img :src="data.img" style="width:100%" />
      <div class="container">
        <h4>
          <b>{{ data.title }}</b>
        </h4>
        <p>{{ data.author }}</p>
      </div>
    </div>
  </div> -->
</template>

<script>
export default {
  props: ["info"],
  name: "RecipeCard",
  data() {
    return {};
  },
};
</script>
<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 40%;
  border-radius: 5px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

img {
  border-radius: 5px 5px 0 0;
}

.container {
  padding: 23px 16px 14px;
  color: white;
  background-color: #2c7bff;
}

.publishby {
  padding: 10px 0px;
  font-size: 16px;
}

.viewRecipe {
  background-color: #77b5e8;
  color: white;
  font-size: 18px;
  border-radius: 25px;
  display: table;
  margin: 0 auto;
  padding: 7px 17px;
}
.time {
  padding-top: 10px;
  float: right;
  font-size: 15px;
  margin-bottom: 10px;
}
.likebutton {
  cursor: pointer;
  font-size: 20px !important;
}
</style>
