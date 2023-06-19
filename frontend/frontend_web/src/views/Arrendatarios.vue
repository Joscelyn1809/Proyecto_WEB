<template>
  <div class="arrTable">
    <v-card class="table_card" width="80%" height="80%" rounded="xl">
      <ArrendatariosTable />
    </v-card>
  </div>
</template>

<script setup>
import ArrendatariosTable from "@/components/ArrendatariosTable.vue";
</script>

<style>
.arrTable {
  height: 100%;
  /* background-image: linear-gradient(to bottom, #ffffff, #eacbff); */
  background-color: #210440;
  display: flex;
  justify-content: center;
  align-items: center;
}

.table_card {
  position: absolute;
  display: flex;
  justify-content: center;
}
</style>
