<template>
  <v-main>
    <SideBar v-if="$route.path !== '/'" />
    <AppBar v-if="$route.path !== '/'" />
    <v-app>
      <router-view />
    </v-app>
  </v-main>
</template>

<script setup>
import SideBar from "@/layouts/default/SideBar.vue";
import AppBar from "@/layouts/default/AppBar.vue";
//
</script>
