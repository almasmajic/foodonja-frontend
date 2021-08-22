<template>
  <div class="container">
    <img src="../assets/splash_screen.png" alt="Snow" style="width:100%" />
    <button class="btn loginbtn" @click="login">LOGIN</button>
    <button class="btn registerbtn" @click="register">REGISTER</button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },

  methods: {
    login() {
      this.$router.push({ name: "Login" });
    },

    register() {
      this.$router.push({ name: "SignUp" });
    },
  },
};
</script>

<style scoped>
.container {
  position: relative;
  width: 100%;
  max-width: 100%;
}

.container img {
  width: 100%;
  height: auto;
}

.container .btn {
  position: absolute;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  color: white;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  border-radius: 35px;
  text-align: center;
}

.loginbtn {
  top: 85%;
  left: 10%;
  background-color: #0e2bf9;
}

.registerbtn {
  top: 85%;
  left: 20%;
  background-color: #555;
}
</style>
