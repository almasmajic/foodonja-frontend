<template>
  <div class="app">
    <div class="search">
      <input
        v-model="store.searchTerm"
        type="search"
        placeholder="Sniff around..."
      />
    </div>
    <div style="height:auto; margin:40px 220px">
      <div class="row">
        <div
          class="col-4 mt-4 recipeWrapper"
          v-for="recipe in filteredRecipes"
          :key="recipe.id"
        >
          <div class="card">
            <recipe-card :info="recipe" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import SearchFilterButton from "../components/SearchFilterButton.vue";
import RecipeCard from "@/components/RecipeCard.vue";

let recipes = [
  {
    url: "https://picsum.photos/id/1/500/350",
    description: "The Best Recipe ever, you have to try.",
    time: "Just now",
    publishedBy: "GORDON RAMSAY",
    liked: true,
  },
  {
    url: "https://picsum.photos/id/2/500/350",
    description: "office",
    time: "A day ago",
    publishedBy: "GORDON RAMSAY",
    liked: false,
  },
  {
    url: "https://picsum.photos/id/1/500/350",
    description: "new pc",
    time: "Just now",
    publishedBy: "GORDON RAMSAY",
    liked: true,
  },
  {
    url: "https://picsum.photos/id/2/500/350",
    description: "office",
    time: "A day ago",
    publishedBy: "GORDON RAMSAY",
    liked: false,
  },
  {
    url: "https://picsum.photos/id/1/500/350",
    description: "new pc",
    time: "Just now",
    publishedBy: "GORDON RAMSAY",
    liked: false,
  },
  {
    url: "https://picsum.photos/id/2/500/350",
    description: "office",
    time: "A day ago",
    publishedBy: "GORDON RAMSAY",
    liked: false,
  },
];

export default {
  name: "search",

  data() {
    return {
      store,
      recipes,
    };
  },
  computed: {
    filteredRecipes() {
      //filtriranje recepata
      let condition = this.store.searchTerm; //condition je varijabla ciji se uvjet mora ispunit kako bi se trazili samo odredeni recepti
      //console.log(condition);
      let newRecipes = [];

      for (let recipe of this.recipes) {
        //console.log(recipe.description);
        if (recipe.description.indexOf(condition) >= 0) {
          newRecipes.push(recipe);
        }
      }
      return newRecipes;
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
.card {
  width: auto !important;
}
.recipeWrapper {
  padding-left: 20px;
  padding-top: 29px;
}
</style>
