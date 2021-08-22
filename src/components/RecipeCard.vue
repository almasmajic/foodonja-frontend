<template>
  <div class="card text-center">
    <div class="card-body">
      <img :src="info.url" class="recipeimg" />
      <h5 class="card-title">Recipe name</h5>
      <p class="mt-3">Recipe published by: DOHVATI IME</p>
      <a href="#" class="btn btn-primary mt-1">RECIPE</a>
    </div>
    <div class="card-footer text-muted">
      {{ info.time }}
    </div>
  </div>
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
};
</script>
<style>
.recipeimg {
  max-width: 200px;
}
</style>
