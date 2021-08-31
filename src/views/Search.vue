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
      <div class="row" v-if="filteredRecipes">
        <div
          class="col-4 mt-4 recipeWrapper"
          v-for="recipe in filteredRecipes"
          :key="recipe._id"
        >
          <div class="card" :key="recipe._id">
            <recipe-card
              :info="recipe"
              :addFavorite="addFavorite"
              :removeFavorite="removeFavorite"
            />
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
import { states, RecipeService } from "../service/index";

export default {
  name: "search",

  data() {
    return {
      store,
      recipes: [],
      user: states.user,
    };
  },
  methods: {
    setRecipes() {
      this.recipes = states.recipes;
    },
    async addFavorite(id) {
      await RecipeService.AddFavoriteRecipe(id);
      this.setRecipes();
    },
    async removeFavorite(id) {
      await RecipeService.DeleteFavoriteRecipe(id);
      this.setRecipes();
    },
  },
  created: async function() {
    await RecipeService.GetRecipes();
    this.setRecipes();
  },
  computed: {
    filteredRecipes() {
      this.user = states.user;
      let condition = this.store.searchTerm;
      let newRecipes = [];
      for (let recipe of this.recipes) {
        const index = recipe?.favorites?.findIndex(
          (el) => el._id === this.user._id
        );
        if (
          (recipe.name &&
            recipe.name?.toUpperCase().includes(condition?.toUpperCase())) ||
          (recipe.category &&
            recipe.category?.toUpperCase().includes(condition?.toUpperCase()))
        ) {
          const filterRecipe = JSON.parse(JSON.stringify(recipe));
          newRecipes.push({
            ...filterRecipe,
            liked: index > -1 ? true : false,
          });
        }
      }
      return newRecipes.reverse();
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
