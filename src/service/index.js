import axios from "axios";
import $router from "@/router";
import jwt_decode from "jwt-decode";

let states = {
  user: null,
  recipes: null,
  recipeDetail: null,
};

function getBearerToken() {
  const token = localStorage.getItem("user")
    ? `${localStorage.getItem("user")}`
    : null;
  if(token){
    const decoded = jwt_decode(token);
    states.user = decoded;
  }
  const bearer = "Bearer " + token;
  console.log(`checking bearer: `, bearer);
  return bearer;
  ``;
}

let Service = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 3000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: getBearerToken(),
  },
});

const RecipeService = {
  async UploadRecipe(recipe) {
    try {
      await Service.post("/upload-recipe", recipe);
      await RecipeService.GetRecipes(null);
    } catch (error) {
      console.log("checking error: ", error);
    }
  },
  async GetRecipes(data) {
    try {
      const response = await Service.post("/recipes", data);
      states.recipes = response.data;
    } catch (error) {
      console.log("checking error: ", error);
    }
  },
  async GetRecipeDetail(id) {
    try {
      const response = await Service.get(`/recipe/?_id=${id}`);
      states.recipeDetail = response.data;
    } catch (error) {
      console.log("checking error: ", error);
    }
  },
  async DeleteRecipe(id) {
    try {
      const response = await Service.delete(`/recipe/?_id=${id}`);
      return response;
    } catch (error) {
      console.log("checking error: ", error);
    }
  },
  async UpdateRecipe(recipe) {
    try {
      await Service.put("/upload-recipe", recipe);
      await RecipeService.GetRecipes(null);
    } catch (error) {
      console.log("checking error: ", error);
    }
  },
  async AddFavoriteRecipe(id) {
    try {
      await Service.put(`/favorite-recipe/?_id=${id}`);
      await RecipeService.GetRecipes(null);
    } catch (error) {
      console.log("checking error: ", error);
    }
  },
  async DeleteFavoriteRecipe(id) {
    try {
      await Service.put(`/delete-favorite-recipe/?_id=${id}`);
      await RecipeService.GetRecipes(null);
    } catch (error) {
      console.log("checking error: ", error);
    }
  },
  async AddRating(ratingObject) {
    try {
      await Service.put(`/add-rating/?_id=${ratingObject._id}`, {
        rating: ratingObject.rating,
      });
    } catch (error) {
      console.log("checking error: ", error);
    }
  },
  async RemoveRating(id) {
    try {
      await Service.put(`/remove-rating/?_id=${id}`);
    } catch (error) {
      console.log("checking error: ", error);
    }
  },
};

const AuthService = {
  async register(username, email, password) {
    try {
      let response = await Service.put("/register", {
        username: username,
        email: email,
        password: password,
      });
      return response;
    } catch (error) {
      console.log("checking error: ", error);
    }
  },

  async login(email, password) {
    try {
      let response = await Service.post("/login", {
        email: email,
        password: password,
      });
      if (response.data && response.data.token) {
        const user = response.data.token;
        localStorage.setItem("user", user);
        const decoded = jwt_decode(response.data.token);
        states.user = decoded;
      }
      return response;
    } catch (error) {
      console.log("checking error: ", error);
    }
  },
  async UpdatePassword(oldPassword, newPassword) {
    try {
      const result = await Service.patch("/update-password", {
        old_password: oldPassword,
        new_password: newPassword,
      });
      return result;
    } catch (error) {
      console.log("checking error while login: ", error);
    }
  },
  logout() {
    localStorage.removeItem("user");
  },
};

export { AuthService, RecipeService, states };
