<template>
  <div class="home">
    <v-layout class="wrapper fadeInDown">
      <v-card
        class="flex-column d-inline-flex justify-center"
        width="28rem"
        height="30rem"
        rounded="xl"
      >
        <v-card-title
          class="d-flex flex-column justify-center"
          style="position: absolute; top: 1.5rem; left: 0; right: 0"
        >
          <h2
            class="text-uppercase text-center text-medium-emphasis"
            style="font-size: 1.8rem"
          >
            Sistema de Renta
          </h2>
          <text-logo style="font-size: 2.7rem" />
        </v-card-title>
        <v-card-item
          class="d-flex justify-center"
          style="position: sticky; top: 0rem; left: 0; right: 0"
        >
          <v-img
            src="src\assets\LoginLogoPink.png"
            width="200"
            height="200"
            contain
          ></v-img>
        </v-card-item>
        <v-card-actions
          class="d-flex justify-center"
          style="position: absolute; bottom: 3.8rem; left: 0; right: 0"
        >
          <!-- <v-btn class="login_button" color="#210440" dark variant="tonal" @click="">
            <v-icon class="mx-2" left>mdi-google</v-icon>
            <v-spacer class="px-0 py-3"></v-spacer>
            <span class="login_button_text px-2">Iniciar sesión</span>
          </v-btn> -->

          <btnGoogle></btnGoogle>
        </v-card-actions>
      </v-card>
    </v-layout>
  </div>
</template>

<script setup>
import btnGoogle from "@/components/GoogleButton.vue";
</script>

<style scoped>
/* BASIC */

.home {
  height: 100vh;
  background-image: linear-gradient(to bottom, #210440, #fd8095);
}

html {
  background-color: #fd8095;
}

body {
  height: 100vh;
}

a {
  color: #fd8095;
  display: inline-block;
  text-decoration: none;
  font-weight: 400;
}

h2 {
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  display: inline-block;
  margin: 40px 8px 10px 8px;
  color: #cccccc;
}

/* STRUCTURE */

.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 20px;
}

/* ANIMATIONS */

/* Simple CSS3 Fade-in-down Animation */
.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

/* Simple CSS3 Fade-in Animation */
.underlineHover:after {
  display: block;
  left: 0;
  bottom: -10px;
  width: 0;
  height: 2px;
  background-color: #56baed;
  content: "";
  transition: width 0.2s;
}

.underlineHover:hover {
  color: #0d0d0d;
}

.underlineHover:hover:after {
  width: 100%;
}

/* OTHERS */

*:focus {
  outline: none;
}

#icon {
  width: 45%;
}
</style>
