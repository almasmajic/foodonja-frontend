<template>
  <div class="main-body">
    <div class="col gutters-sm d-flex justify-content-center">
      <div class="col-md-3 mb-3">
        <div class="card">
          <div class="card-body">
            <div class="d-flex flex-column align-items-center text-center">
              <img
                src="../assets/profile_pic.jpg"
                alt="Admin"
                class="rounded-circle"
                width="150"
              />
              <div class="mt-3" v-if="user">
                <h4>{{ user.username }}</h4>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3 mt-3">
          <div class="card-body">
            <form @submit.prevent="updatePassword">
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Password</h6>
                  <input
                    v-model="old_password"
                    type="password"
                    name="current_password"
                  />
                  <div
                    style="font-size:15px; color:red;"
                    v-if="!$v.old_password.required"
                  >
                    Current password is required
                  </div>
                </div>
                <div class="col-sm-9 text-secondary">
                  ******
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">New password</h6>
                  <input
                    v-model="new_password"
                    type="password"
                    name="new_password"
                  />
                  <div
                    style="font-size:15px; color:red;"
                    v-if="!$v.new_password.required"
                  >
                    New password is required
                  </div>
                </div>
                <div class="col-sm-9 text-secondary">
                  ******
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-12 d-flex justify-content-center">
                  <button
                    :disabled="this.isDisabled"
                    type="submit"
                    class="button"
                  >
                    Change password
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { states, AuthService } from "../service/index";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  name: "myProfile",

  data() {
    return {
      old_password: "",
      new_password: "",
      user: states.user,
    };
  },
  validations: {
    new_password: {
      required,
      minLength: minLength(6),
    },
    old_password: {
      required,
      minLength: minLength(6),
    },
  },
  methods: {
    async updatePassword() {
      this.$v.$touch();
      const result = await AuthService.UpdatePassword(
        this.old_password,
        this.new_password
      );
      if (result && result.data && result.data.message) {
        alert(result.data.message);
      }
    },
  },
  computed: {
    isDisabled() {
      return this.$v.$invalid;
    },
  },
};
</script>

<style scoped>
body {
  color: #1a202c;
  text-align: left;
  background-color: #e2e8f0;
}
.main-body {
  padding: 15px;
}
.card {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 0 solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}

.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1rem;
}

.gutters-sm {
  margin-right: -8px;
  margin-left: -8px;
}

.gutters-sm > .col,
.gutters-sm > [class*="col-"] {
  padding-right: 8px;
  padding-left: 8px;
}
.mb-3,
.my-3 {
  margin-bottom: 1rem !important;
}

.bg-gray-300 {
  background-color: #e2e8f0;
}
.h-100 {
  height: 100% !important;
}
.shadow-none {
  box-shadow: none !important;
}
</style>
