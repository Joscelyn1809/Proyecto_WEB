<template>
  <v-data-table :headers="headers" :items="datos" class="elevation-1">
    <template v-slot:top>
      <v-toolbar flat class="toolbar">
        <v-toolbar-title>PROPIETARIOS</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="800px">
          <template v-slot:activator="{ props }">
            <v-btn color="purple" dark class="mb-2" v-bind="props">
              Nuevo propietario
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.id" label="Id"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.rfc" label="RFC"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.nombre"
                      label="Nombre"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.apellido"
                      label="Apellido"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="purple" variant="text" @click="close"> Cancel </v-btn>
              <v-btn color="purple" variant="text" @click="save"> Save </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">¿Estas seguro que deseas borrar?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="purple" variant="text" @click="closeDelete"> Cancel </v-btn>
              <v-btn color="purple" variant="text" @click="deleteItemConfirm"> Ok </v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>

    <template v-slot:item.actions="{ item }">
      <v-icon
        size="small"
        class="me-2"
        @click="editItem(item.raw)"
        icon="mdi-pencil"
      ></v-icon>
      <v-icon
        size="small"
        class="me-2"
        @click="deleteItem(item.raw)"
        icon="mdi-delete"
      ></v-icon>
    </template>

    <template v-slot:no-data>
      <v-btn color="purple" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        title: "Id",
        align: "start",
        sortable: false,
        key: "id",
      },
      { title: "RFC", sortable: false, key: "rfc" },
      { title: "Nombre", sortable: false, key: "nombre" },
      { title: "Apellido", sortable: false, key: "apellido" },
      { title: "Actions", key: "actions", sortable: false },
    ],

    datos: [],
    editedIndex: -1,
    editedItem: {
      id: 0,
      rfc: "",
      nombre: "",
      apellido: "",
    },
    defaultItem: {
      id: 0,
      rfc: "",
      nombre: "",
      apellido: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      onMounted(async () => {
        const a = await fetch("https://localhost:4000/propietarios", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("usuario")}`,
          },
        });
        const pro = await a.json();
        //console.log(arr.value);

        this.datos = pro.map((element) => ({
          id: element.id,
          rfc: element.rfc,
          nombre: element.nombre,
          apellido: element.apellido,
        }));
      });
    },

    editItem(item) {
      this.editedIndex = this.datos.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.datos.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.datos.splice(this.editedIndex, 1);
      this.deletePropietario(this.editedItem);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.datos[this.editedIndex], this.editedItem);
        const pro = JSON.stringify({
          id: this.editedItem.id,
          rfc: this.editedItem.rfc,
          nombre: this.editedItem.nombre,
          apellido: this.editedItem.apellido,
        });
        //console.log(pro);
        this.updatePropietario(pro);
      } else {
        this.datos.push(this.editedItem);
        const pro = JSON.stringify({
          rfc: this.editedItem.rfc,
          nombre: this.editedItem.nombre,
          apellido: this.editedItem.apellido,
        });
        this.postPropietario(pro);
      }
      this.close();
    },

    async postPropietario(pro) {
      const res = await fetch("https://localhost:4000/propietarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("usuario")}`,
        },
        body: pro,
      });
      res.json().then((pro) => {
        console.log(pro);
      });
      this.initialize();
    },

    async updatePropietario(pro) {
      const res = await fetch("https://localhost:4000/propietarios/", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("usuario")}`,
        },
        body: pro,
      });
      res.json().then((pro) => {
        console.log(pro);
      });
      this.initialize();
    },

    async deletePropietario(pro) {
      const res = await fetch("https://localhost:4000/propietarios/" + pro.id, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("usuario")}`,
        },
      });
      res.json().then((res) => {
        console.log(res);
      });
    },
  },
};
</script>
