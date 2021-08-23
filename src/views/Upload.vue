<template>
  <div class="main">
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
                :style="{ width: field.width }"
                :placeholder="field.placeholder"
              />
              <template v-else-if="field.type === 'textarea'">
                <textarea
                  :rows="field.rows"
                  v-model="field.value"
                  :style="{ width: field.width }"
                  :placeholder="field.placeholder"
                ></textarea>
              </template>
              <template v-else-if="field.type === 'dropdown'">
                <button
                  :class="
                    renderFieldValue(field) == 'Category' ? 'category' : ''
                  "
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
        <input
          type="button"
          class="uploadButton"
          @click="getData()"
          value="Upload a recipe"
        />
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
          width: "400px",
          placeholder: "Image URL",
        },
        {
          id: 2,
          type: "textarea",
          rows: 3,
          value: "",
          width: "400px",
          placeholder: "Ingredients",
        },
        {
          id: 3,
          type: "textarea",
          rows: 5,
          value: "",
          width: "400px",
          placeholder: "How to",
        },
        {
          id: 4,
          type: "input",
          value: "",
          width: "400px",
          placeholder: "Prep time",
        },
        {
          id: 5,
          type: "dropdown",
          value: "Category",
          width: "400px",
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

    getData() {
      console.log(this.fields);
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
.form input,
.form textarea {
  background-color: #99c7ea;
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
  color: black;
  font-size: 18px;
}

::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #276ce4;
  opacity: 1; /* Firefox */
}

.fields__list-item input:focus {
  outline: none;
}

.fields__list-item textarea:focus {
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
  top: 0px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.dropdown__list-item {
  background-color: rgba(0, 0, 0, 0.2);
  padding: 5px 10px;
  font-size: 16px;
  text-transform: uppercase;
  border-radius: 10px;
  cursor: pointer;
}

.uploadButton {
  margin-top: 201px;
  margin-left: 120px;
  padding: 10px 26px;
  border-radius: 15px !important;
  color: #000 !important;
}

.category {
  color: #165fe3 !important;
}

textarea {
  resize: none;
}
</style>
