<template>
  <div class="main">
    <div class="form">
      <div class="recipeIcon">
        <img
          src="https://picsum.photos/id/2/500/350"
          alt="Snow"
          style="width:100%"
        />
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="terrible"
            value="option1"
          />
          <label class="form-check-label" for="terrible">1</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="ok"
            value="option2"
          />
          <label class="form-check-label" for="ok">2</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="good"
            value="option3"
          />
          <label class="form-check-label" for="good">3</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="very-good"
            value="option4"
          />
          <label class="form-check-label" for="very-good">4</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="excellent"
            value="option5"
          />
          <label class="form-check-label" for="excellent">5</label>
        </div>
      </div>
      <br />
      <br />
    </div>
    <div style="height:auto; margin:60px 420px">
      <div class="row">
        <h5 class="heading_wrapper">PREP TIME : {{ "30 min" }}</h5>
        <br />
        <h5 class="heading_wrapper">INGREDIENTS :</h5>
        <i>400g Chicken Breasts</i>
        <i>400g Chicken Breasts</i>
        <i>400g Chicken Breasts</i>
        <i>400g Chicken Breasts</i>
        <i>400g Chicken Breasts</i>
        <i>1 Cup Cherry Tomato</i>

        <h5 class="heading_wrapper">HOW TO :</h5>
        <i
          >Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.</i
        >
        <p class="heading_wrapper"><b>Published by :</b> GORDON RAMSAY</p>
        <p class="category_wrapper">
          <b>Category :</b> Dairy free, Sports Diet, Quick and Easy
        </p>
        <h3 class="heading_wrapper">Our Reviews</h3>
        <div class="reviews_wrapper">
          <i class="fa fa-star"></i><i class="fa fa-star"></i
          ><i class="fa fa-star"></i><i class="fa fa-star"></i
          ><i class="fa fa-star"></i>
          <p class="category_wrapper">Nitin : "The Best Recipe of my life."</p>
        </div>
        <div class="reviews_wrapper">
          <i class="fa fa-star"></i><i class="fa fa-star"></i
          ><i class="fa fa-star"></i><i class="fa fa-star"></i
          ><i class="fa fa-star"></i>
          <p class="category_wrapper">Nitin : "The Best Recipe of my life."</p>
        </div>
        <div class="reviews_wrapper">
          <i class="fa fa-star"></i><i class="fa fa-star"></i
          ><i class="fa fa-star"></i><i class="fa fa-star"></i
          ><i class="fa fa-star"></i>
          <p class="category_wrapper">Nitin : "The Best Recipe of my life."</p>
        </div>
      </div>
      <div class="form">
        <a href="#" class="btn removeRecipe mt-1"
          ><i class="fa fa-trash"></i> Delete this recipe</a
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.recipeIcon {
  width: 280px;
  position: relative;
}
.star {
  position: absolute;
  bottom: -44px;
  color: gold;
  left: 126px;
  font-size: 20px;
}
.heading_wrapper {
  padding: 20px 0px 5px;
}
.category_wrapper {
  padding: 5px 0px 5px;
}
.reviews_wrapper {
  padding: 20px 10px 5px;
}
.removeRecipe {
  background-color: #fba6a6;
  color: black;
  font-size: 18px;
  border-radius: 25px;
  margin: 0 auto;
}
</style>
