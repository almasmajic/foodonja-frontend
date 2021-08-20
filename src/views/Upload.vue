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
        <label>Please fill out the following:</label><br /><br />
        <ul class="fields__list">
          <li class="fields__list-item" v-for="field in fields" :key="field.id">
            <div class="field__box">
              <input
                v-if="field.type === 'input'"
                :type="field.type"
                v-model="field.value"
                :placeholder="field.placeholder"
              />
              <template v-else-if="field.type === 'dropdown'">
                <button
                  type="button"
                  @click="field.show = !field.show"
                  v-text="renderFieldValue(field)"
                />
                <div v-if="field.show && field.items.length" class="dropdown">
                  <ul class="dropdown__list">
                    <li
                      class="dropdown__list-item"
                      v-for="item in field.items"
                      :key="item.id"
                      @click="onSelectItem(field, item.name)"
                    >
                      <i :class="item.icon" /> <span v-text="item.name" />
                    </li>
                  </ul>
                </div>
              </template>
            </div>
          </li>
        </ul>
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
      fields: [
        {
          id: 1,
          type: "input",
          value: "",
          placeholder: "Ingredients",
        },
        {
          id: 2,
          type: "input",
          value: "",
          placeholder: "How to",
        },
        {
          id: 3,
          type: "dropdown",
          value: "Category",
          selectedValues: [],
          show: false,
          items: [
            {
              id: 1,
              icon: "gluten-free",
              name: "Gluten Free",
            },
            {
              id: 2,
              icon: "dairy-free",
              name: "Dairy Free",
            },
            {
              id: 3,
              icon: "vegeterian",
              name: "Vegeterian",
            },
            {
              id: 4,
              icon: "sports-meal",
              name: "Sports Meal",
            },
            {
              id: 5,
              icon: "quick-and-easy",
              name: "Quick and Easy",
            },
          ],
        },
      ],
    };
  },
  methods: {
    onSelectItem(field, name) {
      if (field.selectedValues.includes(name)) {
        field.selectedValues = field.selectedValues.filter(
          (obj) => obj !== name
        );
      } else {
        field.selectedValues.push(name);
      }
      field.show = false;
    },
    renderFieldValue(field) {
      if (field.selectedValues.length) {
        return field.selectedValues.toString();
      }
      return field.value;
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
.fields__list {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
}

.fields__list-item input,
.fields__list-item button {
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
</style>
