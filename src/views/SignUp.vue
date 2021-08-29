<template>
  <section class="vh-100" style="background-color: #eee;">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black" style="border-radius: 25px;">
            <div class="card-body p-md-5">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Sign up
                  </p>

                  <form
                    novalidate
                    @submit.prevent="registerUsers"
                    class="mx-1 mx-md-4"
                  >
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input
                          v-model="username"
                          type="text"
                          id="form3Example1c"
                        />
                        <div
                          style="font-size:15px; color:red;"
                          v-if="!$v.username.required"
                        >
                          Username is required
                        </div>
                        <label class="form-label" for="form3Example1c"
                          >Masterchef's name (Username)</label
                        >
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input
                          v-model="email"
                          type="email"
                          id="form3Example3c"
                        />
                        <div
                          style="font-size:15px; color:red;"
                          v-if="!$v.email.required"
                        >
                          Email is required
                        </div>
                        <div
                          style="font-size:15px; color:red;"
                          v-if="email && !$v.email.email"
                        >
                          Enter valid email address
                        </div>
                        <label class="form-label" for="form3Example3c"
                          >Email address</label
                        >
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input
                          v-model="password"
                          type="password"
                          id="form3Example4c"
                        />
                        <div
                          style="font-size:15px; color:red;"
                          v-if="!$v.password.minLength"
                        >
                          Password should have at least
                          {{ $v.password.$params.minLength.min }} characters.
                        </div>
                        <div
                          style="font-size:15px; color:red;"
                          v-if="!$v.password.required"
                        >
                          Password is required
                        </div>
                        <label class="form-label" for="form3Example4c"
                          >Secret ingredient (Password)</label
                        >
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input
                          v-model="repPassword"
                          type="password"
                          id="form3Example4cd"
                        />
                        <div
                          style="font-size:15px; color:red;"
                          v-if="!$v.repPassword.required"
                        >
                          Repeated password is required
                        </div>

                        <div
                          style="font-size:15px; color:red;"
                          v-if="repPassword && !$v.repPassword.sameAsPassword"
                        >
                          Password and Confirm Password should match
                        </div>

                        <label class="form-label" for="form3Example4cd"
                          >Repeat your password</label
                        >
                      </div>
                    </div>

                    <div class="form-check d-flex justify-content-center mb-5">
                      <input
                        v-model="checked"
                        class="form-check-input me-2"
                        type="checkbox"
                        id="form2Example3c"
                        @change="$v.checked.$touch()"
                      />

                      <label class="form-check-label" for="form2Example3">
                        I accept <b>terms of cooking</b>
                      </label>

                      <div class="invalid-feedback">
                        cekiraj
                      </div>
                    </div>

                    <span class="text-center" v-if="showError"
                      ><p style="color:red;">E-mail already exist</p></span
                    >

                    <div
                      class="d-flex justify-content-center mx-4 mb-3 mb-lg-4"
                    >
                      <button
                        type="submit"
                        class="btn btn-primary btn-lg"
                        :disabled="this.isDisabled"
                      >
                        Register
                      </button>
                    </div>
                  </form>
                </div>
                <div
                  class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2"
                >
                  <img
                    src="../assets/signup.png"
                    class="img-fluid"
                    alt="Sample image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { AuthService } from "../service/index";
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      showError: false,
      showError1: false,
      showError2: false,
      checked: false,

      username: "",
      email: "",
      password: "",
      repPassword: "",

      submitted: false,
    };
  },

  validations: {
    password: {
      required,
      minLength: minLength(6),
    },
    repPassword: { required, sameAsPassword: sameAs("password") },

    email: {
      required,
      email,
    },

    username: {
      required,
    },

    checked: {
      sameAs: sameAs(() => true),
    },
  },

  created() {
    this.submitted = true;
    return this.$v.$touch();
  },
  computed: {
    isDisabled() {
      return this.$v.$invalid;
    },
  },

  methods: {
    async registerUsers() {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return false; // stop here if form is invalid
      } else {
        try {
          const result = await AuthService.register(
            this.username,
            this.email,
            this.password
          );
          if (result && result.data && result.data.id) {
            this.$router.push("/login");
          }
        } catch (e) {
          console.log(e);
          this.showError = true;
        }
      }
    },
  },
};
</script>

<style>
.container {
  background-color: white;
  font-size: 30px;
}
</style>
