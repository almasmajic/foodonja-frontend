<template>
  <div>
    <div class="card text-center">
      <div class="card-header">Published by: DOHVATI IME</div>
      <div class="card-body">
        <h5 class="card-title">Recipe name</h5>
        <img :src="info.url" />
        <p class="mt-3">{{ info.description }}</p>
        <a href="#" class="btn btn-primary mt-1">View recipe</a>
      </div>
      <div class="card-footer text-muted">
        {{ info.time }}
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
