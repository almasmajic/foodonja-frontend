<template>
  <div class="main">
    <div class="form">
      <div class="fields__list">
        <label>Please fill out the following:</label><br />
        <form @submit.prevent="uploadRecipe">
          <div class="form-group col-md-12">
            <input
              v-model="photo"
              type="url"
              class="form-control"
              id="uploadPhoto"
              placeholder="Image URL"
            />
          </div>
          <div class="form-group col-md-12 mt-2">
            <input
              v-model="name"
              type="text"
              class="form-control"
              id="provideName"
              placeholder="Recipe name"
              required
            />
          </div>
          <div class="form-group col-md-12 mt-2">
            <textarea
              v-model="ingredients"
              class="form-control"
              id="listIngredients"
              rows="5"
              placeholder="Ingredients"
              required
            ></textarea>
          </div>
          <div class="form-group col-md-12 mt-2">
            <textarea
              v-model="howTo"
              class="form-control"
              id="howTo"
              rows="12"
              placeholder="How to"
              required
            ></textarea>
          </div>
          <div class="form-group col-md-12 mt-2">
            <input
              v-model="prepTime"
              type="text"
              class="form-control"
              placeholder="Prep time"
            />
          </div>
          <div class="form-group col-md-12 mt-2">
            <select
              v-model="category"
              id="provideCategory"
              class="form-control"
              placeholder="Category"
              ><option value="" disabled selected hidden>Category</option>
              <option v-for="i in provideCategory" v-bind:key="i">
                {{ i }}
              </option>
            </select>
          </div>

          <div class="text-center my-4">
            <button type="submit" class="button">Upload a recipe</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { RecipeService } from "../service/index";
export default {
  data() {
    return {
      /*   errorMessage: "", */
      photo: "",
      name: "",
      ingredients: "",
      howTo: "",
      prepTime: "",
      provideCategory: [
        "Gluten Free",
        "Dairy free",
        "Vegetarian",
        "Sports meal",
        "Quick and Easy",
      ],
      category: "",
    };
  },
  methods: {
    async uploadRecipe() {
      let newRecipe = {
        image: this.photo,
        name: this.name,
        ingredients: this.ingredients,
        how_to: this.howTo,
        prep_time: this.prepTime,
        category: this.category,
      };
      await RecipeService.UploadRecipe(newRecipe);
      alert("Recipe uploaded");
    },
  },
};
</script>

<style>
.upload {
  display: flex;
  justify-content: center;
  padding-top: 40px;
}
.form {
  padding-top: 20px;
  display: flex;
  justify-content: center;
}
.form input,
.form textarea,
select {
  background-color: rgba(124, 185, 232, 0.75) !important;
  border: 0;
  border-radius: 3%;
  font-family: "Dosis";
  font-size: 20px;
  color: #165fe3;
}
.fields__list {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
}

.fields__list-item input,
.fields__list-item button,
.fields__list-item textarea {
  width: 100%;
  text-align: left;
  background-color: #9ac7ea;
  border: none;
  padding: 10px 5px;
  border-radius: 10px;
  color: white;
  font-size: 18px;
}

.fields__list-item input:focus {
  outline: none;
}

.fields__list-item button {
  cursor: pointer;
}

.field__box {
  position: relative;
}

.dropdown__list {
  position: absolute;
  z-index: 10;
  right: 20px;
  top: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.dropdown__list-item {
  background-color: rgba(0, 0, 0, 0.2);
  padding: 10px 5px;
  font-size: 16px;
  text-transform: uppercase;
  border-radius: 10px;
  cursor: pointer;
}
option {
  background-color: white;
}
</style>
