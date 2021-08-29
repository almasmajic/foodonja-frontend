<template>
  <div class="row">
    <div class="column1">
      <img :src="info.image" alt="Snow" style="width:100%" />
    </div>
    <div class="column2">
      <p>
        <i>{{ info.name }}</i>
      </p>
      <p class="publish">RECIPE PUBLISHED BY : {{ info.postedBy.username }}</p>
      <a class="btn viewRecipes mt-1" @click="showRecipe()">See Recipe</a>
    </div>
  </div>
</template>
<script>
export default {
  props: ["info"],
  name: "FavRecipeCard",
  data() {
    return {};
  },
  methods: {
    showRecipe() {
      this.$router.push(`/recipe-detail/${this.info._id}`);
    },
  },
};
</script>
<style scoped>
.column1 {
  float: left;
  width: 40%;
  max-width: 250px;
  padding: 0px;
}
.column2 {
  color: white;
  float: left;
  background-color: #94c4ea;
  width: 60%;
  padding: 5px 10px;
  min-width: 280px;
}
.column3 {
  float: left;
  width: 20%;
  padding-left: 40px;
}

/* Clearfix (clear floats) */
.row::after {
  content: "";
  clear: both;
  display: table;
}

.publish {
  font-size: 13px;
}

.viewRecipes {
  background-color: #1e66e3;
  color: white;
  font-size: 10px;
  border-radius: 25px;
  float: right;
}
</style>
