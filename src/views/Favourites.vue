<template>
  <div class="fav">
    <h3 class="favHead">Show all favourites [{{ favoriteRecipes.length }}]</h3>
    <div class="row" v-for="recipe in favoriteRecipes" :key="recipe.id">
      <div class="card">
        <FavRecipeCard :info="recipe" /><a
          href="#"
          @click.prevent="removeFavorite(recipe._id)"
          class="btn remove mt-1"
          >Remove from favourites</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import FavRecipeCard from "@/components/FavRecipeCard.vue";
import { states, RecipeService } from "../service/index";

export default {
  name: "Favourites",
  components: {
    FavRecipeCard,
  },
  data() {
    return {
      recipes: [],
      user: states.user,
    };
  },
  created: async function() {
    await RecipeService.GetRecipes();
    this.setRecipes();
  },
  methods: {
    setRecipes() {
      this.recipes = states.recipes;
    },
    async removeFavorite(_id) {
      await RecipeService.DeleteFavoriteRecipe(_id);
      this.setRecipes();
    },
  },
  computed: {
    favoriteRecipes() {
      let favRecipes = [];
      for (let recipe of this.recipes) {
        const index = recipe?.favorites?.findIndex(
          (el) => el._id === this.user._id
        );
        if (index > -1) {
          favRecipes.push({
            ...JSON.parse(JSON.stringify(recipe)),
          });
        }
      }
      return favRecipes;
    },
  },
};
</script>
<style scoped>
.fav {
  height: auto;
  margin: 50px 220px;
}
.favHead {
  padding: 40px 0px 20px;
}
.card {
  margin: 15px 5px;
  max-width: 532px;
}
.remove {
  position: absolute;
  right: -253px;
  top: 40px;
  background-color: #fba6a6;
  color: white;
  font-size: 18px;
  border-radius: 25px;
  margin: 0 auto;
}
.row,
.favHead {
  display: flex;
  justify-content: center;
}
</style>
