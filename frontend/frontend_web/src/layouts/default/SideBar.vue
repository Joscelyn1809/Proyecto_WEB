<template>
  <v-navigation-drawer
    expand-on-hover
    rail
    permanent
    theme="dark"
    style="background-image: linear-gradient(to bottom, #210440, #fd8095)"
  >
    <v-list>
      <v-list-item
        prepend-avatar="https://avatars.githubusercontent.com/u/82406773?s=400&u=5cb63d44a35c0d41371d205f3c6f135aeef3e07b&v=4"
        title="Joscelyn Covarrubias"
        subtitle="joscelyn.covarrubias@uabc.edu.mx"
      >
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-home-flood"
        title="Home"
        value="home"
        to="/home"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-table"
        title="Propiedades"
        value="propiedades"
        to="/propiedades"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-table"
        title="Propietarios"
        value="propietarios"
        to="/propietarios"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-table"
        title="Arrendatarios"
        value="arrendatarios"
        to="/arrendatarios"
      ></v-list-item>
      <!-- <v-list-item prepend-icon="mdi-bookmark" title="" value="hola"></v-list-item> -->
    </v-list>

    <template v-slot:append>
      <v-list>
        <v-list-item
          prepend-icon="mdi-logout"
          title="Logout"
          value=""
          class="logoutBtn"
          @click="logOut"
        >
          <!-- <v-btn block color="#210440" small>
            <v-icon left>mdi-logout</v-icon>
            <span class="hidden-xs-only">Logout</span>
          </v-btn> -->
        </v-list-item>
      </v-list>
    </template>
  </v-navigation-drawer>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const logOut = () => {
  localStorage.clear();
  console.log(localStorage.getItem("usuario"));
  router.push({ name: "Login" });
};
</script>

<style>
.logoutBtn {
  background-color: #210440;
  margin: 5px 5px 0px 5px;
  border-radius: 25px;
}
</style>
