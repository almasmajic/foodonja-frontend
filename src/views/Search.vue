<template>
  <div class="app">
    <div class="search">
      <input type="text" placeholder="MMMM..." />
      <button type="submit">Sniff around</button>
    </div>

    <div class="filter__buttons">
      <SearchFilterButton
        :key="filter.id"
        v-for="filter in filters"
        :info="filter"
      />
    </div>

    <div class="recipe__cards">
      <RecipeCard
        :key="recipeImage.id"
        v-for="recipeImage in recipes"
        :data="recipeImage"
      />
    </div>
  </div>
</template>

<script>
import SearchFilterButton from "../components/SearchFilterButton.vue";
import RecipeCard from "../components/RecipeCard.vue";

let filters = [];

filters = [
  {
    img: require("../assets/filter/gluten.png"),
    filterName: "GLUTEN FREE",
  },
  {
    img: require("../assets/filter/lactose.png"),
    filterName: "DAIRY FREE",
  },
  {
    img: require("../assets/filter/vege.png"),
    filterName: "VEGETARIAN",
  },
  {
    img: require("../assets/filter/sports.png"),
    filterName: "SPORTS MEALS",
  },
  {
    img: require("../assets/filter/finger-snap.png"),
    filterName: "QUICK AND EASY",
  },
];

export default {
  name: "Search",
  components: {
    SearchFilterButton,
    RecipeCard,
  },
  data: function() {
    return {
      filters,
      recipes: [
        {
          img: require("../assets/kuglice.jpg"),
          title: "Energetske kuglice sa suhim voćem",
          author: "Nastasja Chiara Petrić",
          favourite: true,
        },
      ],
    };
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
