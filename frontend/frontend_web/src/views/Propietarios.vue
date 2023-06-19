<template>
  <div class="propietariosTable">
    <v-card class="table_card" width="80%" height="80%" rounded="xl">
      <PropietariosTable />
    </v-card>
  </div>
</template>

<script setup>
import PropietariosTable from "@/components/PropietariosTable.vue";
</script>

<style>
.propietariosTable {
  height: 100%;
  /* background-image: linear-gradient(to bottom, #ffffff, #eacbff); */
  background-color: #210440;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
