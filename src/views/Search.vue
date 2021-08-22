<template>
  <div class="app">
    <div class="search">
      <input v-model="searchText" type="search" placeholder="MMMM..." />
      <button @click="search" type="submit">Sniff around</button>
    </div>
    <div class="filter__buttons">
      <SearchFilterButton
        :key="buttonfilter.id"
        v-for="buttonfilter in filter"
        :info="buttonfilter"
      />
    </div>
    <div style="height:auto; margin:10px 200px">
      <div class="row">
        <div class="col-4 mt-4" v-for="recipe in recipes" :key="recipe.id">
          <div class="card"><recipe-card :info="recipe" /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchFilterButton from "../components/SearchFilterButton.vue";
import RecipeCard from "@/components/RecipeCard.vue";
import { Filters } from "@/service";

let recipes = [
  {
    url: "https://picsum.photos/id/1/500/500",
    description: "new pc",
    time: "Just now",
  },
  {
    url: "https://picsum.photos/id/2/500/500",
    description: "office",
    time: "A day ago",
  },
  {
    url: "https://picsum.photos/id/1/500/500",
    description: "new pc",
    time: "Just now",
  },
  {
    url: "https://picsum.photos/id/2/500/500",
    description: "office",
    time: "A day ago",
  },
  {
    url: "https://picsum.photos/id/1/500/500",
    description: "new pc",
    time: "Just now",
  },
  {
    url: "https://picsum.photos/id/2/500/500",
    description: "office",
    time: "A day ago",
  },
];

/*let filterss = [
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
];*/

export default {
  name: "search",

  data() {
    return {
      recipes,
      filter: { type: Array },
      searchText: "",
    };
  },

  created() {
    this.filtersBck();
  },

  methods: {
    search() {},

    async filtersBck(term) {
      this.filter = await Filters.getAll(term);
    },
  },
  components: {
    RecipeCard,
    SearchFilterButton,
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
