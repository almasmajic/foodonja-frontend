<template>
  <div class="main">
    <div class="upload">
      <croppa
        class="croppa__frame"
        :width="450"
        :height="350"
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

        <br /><br />

        <input type="submit" value="Upload a recipe" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: null,
      options: [
        { title: "Gluten free", img: "../assets/filter/gluten.png" },
        "Dairy free",
        "Vegetarian",
        "Sports meals",
        "Quick and Easy",
      ],
    };
  },
};
</script>

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
  padding-top: 20px;
  display: flex;
  justify-content: center;
}
.form input {
  background-color: rgba(124, 185, 232, 0.75);
  border: 0;
  border-radius: 3%;
  font-family: "Dosis";
  font-size: 20px;
  color: #165fe3;
}
</style>
