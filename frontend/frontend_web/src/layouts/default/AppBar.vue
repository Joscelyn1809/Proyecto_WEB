<template>
  <v-app-bar
    :elevation="4"
    dark
    style="background-image: linear-gradient(to right, #210440, #fd8095)"
    prominent
    density="compact"
    shrink-on-scroll
    scroll-target="scrolling-techniques-4"
  >
    <template v-slot:img="{ props }">
      <v-img
        v-bind="props"
        gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
      ></v-img>
    </template>

    <v-toolbar-title style="color: white">
      <v-icon icon="mdi-human-greeting" color="white"></v-icon>
      Buenos Dias
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon="mdi-dots-vertical"></v-btn>

    <!-- <template v-slot:extension>
      <v-tabs align-tabs="title">
        <v-tab>Tab 1</v-tab>
        <v-tab>Tab 2</v-tab>
      </v-tabs>
    </template> -->
  </v-app-bar>

  <v-sheet id="scrolling-techniques-3" class="overflow-y-auto" max-height="600">
  </v-sheet>
</template>

<script></script>
