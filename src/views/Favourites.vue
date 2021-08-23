<template>
  <div class="fav">
    <h3 class="favHead">Show all favourites [{{ recipes.length }}]</h3>
    <div class="row" v-for="recipe in recipes" :key="recipe.id">
      <div class="card">
        <FavRecipeCard :info="recipe" /><a href="#" class="btn remove mt-1"
          >Remove from favourites</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import FavRecipeCard from "@/components/FavRecipeCard.vue";
let recipes = [
  {
    url: "https://picsum.photos/id/1/500/350",
    description: "The Best Recipe even you eat, Please taste once.",
    time: "Just now",
    publishedBy: "GORDAN RAMSAY",
    liked: true,
  },
  {
    url: "https://picsum.photos/id/2/500/350",
    description: "office",
    time: "A day ago",
    publishedBy: "GORDAN RAMSAY",
    liked: false,
  },
  {
    url: "https://picsum.photos/id/1/500/350",
    description: "new pc",
    time: "Just now",
    publishedBy: "GORDAN RAMSAY",
    liked: true,
  },
  {
    url: "https://picsum.photos/id/2/500/350",
    description: "office",
    time: "A day ago",
    publishedBy: "GORDAN RAMSAY",
    liked: false,
  },
  {
    url: "https://picsum.photos/id/1/500/350",
    description: "new pc",
    time: "Just now",
    publishedBy: "GORDAN RAMSAY",
    liked: false,
  },
  {
    url: "https://picsum.photos/id/2/500/350",
    description: "office",
    time: "A day ago",
    publishedBy: "GORDAN RAMSAY",
    liked: false,
  },
];
export default {
  name: "Favourites",
  components: {
    FavRecipeCard,
  },

  data() {
    return {
      recipes,
    };
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
</style>
