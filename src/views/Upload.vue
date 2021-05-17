<template>
  <div class="main">
    <div class="upload">
      <croppa
        class="croppa__frame"
        :width="250"
        :height="250"
        :canvas-color="'rgba(255, 193, 7, 0.3)'"
        placeholder="Upload a photo"
        v-model="imageReference"
      ></croppa>
    </div>

    <div class="form">
      <form>
        <label>Please fill out the following:</label><br />
        <input type="text" name="Ingredients" placeholder="Ingredients" /><br />
        <br />
        <input type="text" name="How to" placeholder="How to" /><br /><br />
        <!-- <input type="text" name="Category" placeholder="Category" /> -->
        <select name="categories" id="categories">
          <option value="gluten__free">Gluten free</option>
          <option value="dairy__free">Dairy free</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="sports__meal">Sports meal</option>
          <option value="quick__and__easy">Quick and easy</option>
        </select>
        <br /><br />
        <input type="submit" value="Upload a recipe" />
      </form>
    </div>
  </div>
</template>

<style>
.upload {
  display: flex;
  justify-content: center;
  padding-top: 40px;
}
.croppa__frame {
  background: rgba(255, 193, 7, 0.3);
}
.form {
  display: flex;
  justify-content: center;
}
</style>
