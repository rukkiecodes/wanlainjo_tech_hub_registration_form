<template>
  <v-container class="d-flex flex-column justify-start align-center">
    <v-card class="ma-0 pa-0" width="500" max-width="100%">
      <img
        cover
        src="../assets/images/header.jpg"
        style="width: 100%; object-fit: cover"
      />
    </v-card>

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
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  mounted() {
    this.getRegistrationForms();
  },

  methods: {
    ...mapActions(["getRegistrationForms"]),
  },

  computed: {
    ...mapGetters(["eventRegistration"]),
  },
};
</script>
