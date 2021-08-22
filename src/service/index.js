import axios from "axios";
import $router from "@/router";

let Service = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 3000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

let Filters = {
  async getAll(filter) {
    let response = await Service.get(`/filters?${filter}`);
    let data = response.data;
    data = data.map((doc) => {
      return {
        img: doc.img,
        filterName: doc.filterName,
      };
    });
    return data;
  },
};

let Auth = {
  async register(username, email, password) {
    let response = await Service.post("/users", {
      username: username,
      email: email,
      password: password,
    });

    console.log(response);

    let user = response.data;

    localStorage.setItem("user", JSON.stringify(user));

    return true;
  },

  async login(email, password) {
    let response = await Service.post("/auth", {
      email: email,
      password: password,
    });

    let user = response.data;

    localStorage.setItem("user", JSON.stringify(user));

    return true;
  },

  logout() {
    localStorage.removeItem("user");
  },

  getUser() {
    return JSON.parse(localStorage.getItem("user"));
  },

  getToken() {
    let user = Auth.getUser();
    if (user && user.token) {
      return user.token;
    } else {
      return false;
    }
  },

  logged() {
    let user = Auth.getUser();
    if (user && user.token) {
      return true;
    }
    return false;
  },

  state: {
    get logged() {
      return Auth.logged();
    },

    get userEmail() {
      let user = Auth.getUser();
      if (user) {
        return user.email;
      }
    },
  },
};

export { Auth, Filters };
