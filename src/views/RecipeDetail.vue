<template>
  <div class="main">
    <div class="form">
      <div class="recipeIcon" v-if="getRecipeDetail">
        <img :src="getRecipeDetail.image" alt="Snow" style="width:100%" />
        <h5 class="heading_wrapper center">
          {{ getRecipeDetail.name }}
        </h5>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            id="terrible"
            name="radioOptions"
            @click="setRating(1)"
            :checked="getRating >= 0 && getRating <= 1"
          />
          <label class="form-check-label" for="terrible">1</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            id="ok"
            @click="setRating(2)"
            name="radioOptions"
            :checked="getRating > 1 && getRating <= 2"
          />
          <label class="form-check-label" for="ok">2</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            id="good"
            @click="setRating(3)"
            name="radioOptions"
            :checked="getRating > 2 && getRating <= 3"
          />
          <label class="form-check-label" for="good">3</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            id="very-good"
            @click="setRating(4)"
            name="radioOptions"
            :checked="getRating > 3 && getRating <= 4"
          />
          <label class="form-check-label" for="very-good">4</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            id="excellent"
            @click="setRating(5)"
            name="radioOptions"
            :checked="getRating > 4 && getRating <= 5"
          />
          <label class="form-check-label" for="excellent">5</label>
        </div>
        <div>
          <button
            @click="AddRemoveRating"
            type="submit"
            class="btn rateRecipe mt-3"
          >
            Rate recipe
          </button>
        </div>
      </div>
      <br />
      <br />
    </div>
    <div v-if="getRecipeDetail" style="height:auto; margin:60px 420px">
      <div class="row">
        <h5 class="heading_wrapper">
          AVERAGE RATING :
          {{ getRecipeDetail.rating ? getRecipeDetail.rating : 0.0 }}
        </h5>
        <h5 class="heading_wrapper">PREP TIME : {{ "30 min" }}</h5>
        <br />
        <h5 class="heading_wrapper">INGREDIENTS :</h5>
        <p>{{ getRecipeDetail.ingredients }}</p>

        <h5 class="heading_wrapper">HOW TO :</h5>
        <i>{{ getRecipeDetail.how_to }}</i>
        <p class="heading_wrapper">
          <b>Published by :</b> {{ getRecipeDetail.postedBy.username }}
        </p>
        <p class="category_wrapper">
          <b>Category :</b> {{ getRecipeDetail.category }}
        </p>
      </div>
      <div class="form" v-if="getRecipeDetail.postedBy._id === userVal._id">
        <a href="#" @click.prevent="deleteRecipe" class="btn removeRecipe mt-1"
          ><i class="fa fa-trash"></i> Delete this recipe</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { states, RecipeService } from "../service/index";
export default {
  data() {
    return {
      rating: 0,
      recipeDetail: null,
      user: states.user,
    };
  },
  created: async function() {
    // a function to call getposts action
    const _id = this.$route.params._id;
    await RecipeService.GetRecipeDetail(_id);
    this.setRecipeDetial();
  },
  methods: {
    userVal() {
      return states.user;
    },
    setRecipeDetial() {
      this.recipeDetail = states.recipeDetail;
    },
    async deleteRecipe() {
      const result = await RecipeService.DeleteRecipe(this.recipeDetail._id);
      if (result && result.data && result.data.message) {
        this.$router.push("/search");
      }
    },
    async AddRemoveRating() {
      this.user = states.user;
      const index = this.recipeDetail?.ratingData?.findIndex(
        (data) => data._id === this.user._id
      );
      if (index > -1) {
        await RecipeService.RemoveRating(this.recipeDetail._id);
      }
      await RecipeService.AddRating({
        _id: this.recipeDetail._id,
        rating: this.rating,
      });
    },
    setRating(rating) {
      this.rating = rating;
    },
  },
  computed: {
    getRating() {
      return this.rating;
    },
    getRecipeDetail() {
      return this.recipeDetail;
    },
  },
};
</script>

<style scoped>
.recipeIcon {
  width: 280px;
  position: relative;
}
.heading_wrapper {
  padding: 20px 0px 5px;
}
.category_wrapper {
  padding: 5px 0px 5px;
}
.removeRecipe {
  background-color: #fba6a6;
  color: black;
  font-size: 18px;
  border-radius: 25px;
  margin: 0 auto;
}
.rateRecipe {
  background-color: #7cb9e8;
  color: black;
  font-size: 18px;
  border-radius: 25px;
  margin: 0 auto;
}
</style>
