<template>
  <div>
    <img :src="info.image" alt="Avatar" style="width:100%" />
    <div class="container">
      <h5>
        <i>{{ info.name }}</i>
      </h5>
      <p class="publishby">
        RECIPE PUBLISHED BY : {{ info.postedBy.username }}
      </p>
      <a class="btn viewRecipe mt-1" @click="showRecipe()">RECIPE</a>
      <span v-show="info.liked" @click="removeFavorite(info._id)"
        ><i class="fa fa-heart likebutton"></i
      ></span>
      <span v-show="!info.liked" @click="addFavorite(info._id)"
        ><i class="far fa-heart likebutton"></i
      ></span>
      <div class="time">{{ info.time }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["info", "addFavorite", "removeFavorite"],
  name: "RecipeCard",
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
<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 40%;
  border-radius: 5px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

img {
  border-radius: 5px 5px 0 0;
}

.container {
  padding: 23px 16px 14px;
  color: white;
  background-color: #2c7bff;
}

.publishby {
  padding: 10px 0px;
  font-size: 16px;
}

.viewRecipe {
  background-color: #77b5e8;
  color: white;
  font-size: 18px;
  border-radius: 25px;
  display: table;
  margin: 0 auto;
  padding: 7px 17px;
}
.time {
  padding-top: 10px;
  float: right;
  font-size: 15px;
  margin-bottom: 10px;
}
.likebutton {
  cursor: pointer;
  font-size: 20px !important;
}
</style>
