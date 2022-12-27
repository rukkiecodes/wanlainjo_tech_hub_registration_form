<template>
  <v-container class="d-flex flex-column justify-start align-center">
    <v-card class="ma-0 pa-0" width="500" max-width="100%">
      <v-card-text>
        <img
          cover
          src="../assets/images/header.jpg"
          style="width: 100%; object-fit: cover"
        />
      </v-card-text>
    </v-card>

    <v-card class="mt-10">
      <v-card-text>
        <v-toolbar density="compact" color="transparent">
          <v-spacer />
          <v-btn @click="downloadForm" class="bg-indigo">
            <v-icon class="mr-2">mdi-download</v-icon>
            Download
          </v-btn>
        </v-toolbar>

        <v-table fixed-header>
          <thead>
            <tr>
              <th class="text-left">Id</th>
              <th class="text-left">Name</th>
              <th class="text-left">Email</th>
              <th class="text-left">Phone</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(form, i) in eventRegistration" :key="i">
              <td>{{ i + 1 }}</td>
              <td>{{ form.name }}</td>
              <td>{{ form.email }}</td>
              <td>{{ form.phone }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
export default {
  mounted() {
    this.getRegistrationForms();
  },

  methods: {
    ...mapActions(["getRegistrationForms"]),

    downloadForm() {
      const DEFAULT_FILENAME = "Wanlainjo even attendees";

      const fileType =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
      const fileExtension = ".xlsx";

      const ws = XLSX.utils.json_to_sheet(this.eventRegistration);
      const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
      const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
      const data = new Blob([excelBuffer], { type: fileType });
      FileSaver.saveAs(data, DEFAULT_FILENAME + fileExtension);
    },
  },

  computed: {
    ...mapGetters(["eventRegistration"]),
  },
};
</script>
