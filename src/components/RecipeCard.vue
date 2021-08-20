<template>
  <div>
    <div class="card text-center">
      <div class="card-header text-muted">2 DAYS AGO</div>
      <div class="card-body">
        <h5 class="card-title">Recipe name</h5>
        <img :src="info" />
        <a href="#" class="btn btn-primary mt-2">View recipe</a>
      </div>
      <div class="card-footer">
        Published by: DOHVATI IME
      </div>
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
