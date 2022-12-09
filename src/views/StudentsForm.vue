<template>
  <v-container>
    <v-row justify="start" align="start">
      <v-col v-for="(form, i) in registration" :key="i" cols="12" sm="6" md="4">
        <v-card :to="`/registrationForms/${form.id}`">
          <v-card-text
            class="d-flex justify-center pa-0"
            style="max-height: 240px"
          >
            <v-img cover :src="form.displayPicture" alt="" />
          </v-card-text>
          <v-list>
            <v-list-item density="compact">
              <template v-slot:prepend>
                <v-icon icon="mdi-account"></v-icon>
              </template>

              <v-list-item-title v-text="form.studentsname"></v-list-item-title>
            </v-list-item>
            <v-list-item density="compact">
              <template v-slot:prepend>
                <v-icon
                  :color="form.sex == 'Male' ? 'indigo' : 'pink'"
                  icon="mdi-gender-male-female"
                ></v-icon>
              </template>

              <v-list-item-title v-text="form.sex"></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(["registration"]),
  },
};
</script>
