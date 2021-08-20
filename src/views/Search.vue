<template>
  <div class="row">
    <div class="col-2"></div>
    <div class="col-3 mt-3">
      <recipe-card />
    </div>
    <div class="col-3 mt-3">
      <recipe-card />
    </div>
    <div class="col-3 mt-3">
      <recipe-card />
    </div>
    <div class="col-2"></div>
  </div>
</template>

<script>
import RecipeCard from "@/components/RecipeCard.vue";

export default {
  name: "search",
  components: {
    RecipeCard,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Amatic+SC&family=Dosis&display=swap");

.search {
  display: flex;
  justify-content: center;
  padding-top: 20px;
  border: 0;
}
.search input {
  border: 0;
  font-family: "Amatic SC", cursive;
  font-size: 30px;
  border-bottom: 1px solid blue;
}
.search button {
  margin-left: 10px;
  font-family: "Amatic SC", cursive;
  font-size: 25px;
  font-weight: bold;
  background-color: #7cb9e8;
  border: 0;
  width: 150px;
  color: #165fe3;
  cursor: pointer;
}
.filter__buttons {
  display: flex;
  justify-content: center;
  padding-top: 30px;
}
.filter__buttons {
  gap: 20px; /* ne radi na svim browserima */
  /*margin-right: 20px*/
}
</style>
