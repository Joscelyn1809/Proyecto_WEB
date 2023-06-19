<template>
  <div class="propiedadesTable">
    <v-card class="table_card" width="80%" height="80%" rounded="xl">
      <PropiedadesTable />
    </v-card>
  </div>
</template>

<script setup>
import PropiedadesTable from "@/components/PropiedadesTable.vue";
</script>

<style>
.propiedadesTable {
  height: 100%;
  /* background-image: linear-gradient(to bottom, #ffffff, #eacbff); */
  background-color: #210440;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
