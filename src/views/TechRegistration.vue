<template>
  <v-responsive>
    <v-container class="d-flex flex-column justify-start align-center">
      <v-card class="ma-0 pa-0" width="500" max-width="100%">
        <img
          cover
          src="../assets/images/header.jpg"
          style="width: 100%; object-fit: cover"
        />
      </v-card>

      <v-card class="mt-5" width="500" max-width="100%">
        <v-card-text>
          <v-text-field
            label="Full name"
            prepend-inner-icon="mdi-account"
            variant="outlined"
            color="indigo darken-4"
            v-model="evenForm.name"
          ></v-text-field>
          <v-text-field
            label="Email"
            prepend-inner-icon="mdi-email"
            variant="outlined"
            color="indigo darken-4"
            v-model="evenForm.email"
          ></v-text-field>
          <v-text-field
            label="Phone"
            prepend-inner-icon="mdi-phone"
            variant="outlined"
            color="indigo darken-4"
            hide-details
            v-model="evenForm.phone"
          ></v-text-field>
        </v-card-text>

        <v-card-text class="pt-0 pr-2">
          <v-card-actions>
            <v-spacer />
            <v-btn
              :loading="evenFormLoading"
              @click="submitEventForm"
              variant="flat"
              color="indigo darken-4"
              >Submit</v-btn
            >
          </v-card-actions>
        </v-card-text>
      </v-card>
      <v-snackbar v-model="snackbar" :timeout="2000" :color="color">
        {{ text }}

        <template v-slot:actions>
          <v-btn :color="textColor" icon variant="text" @click="closeSnackbar">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </template>
      </v-snackbar>
    </v-container>
  </v-responsive>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  methods: {
    ...mapActions(["submitEventForm"]),
    ...mapMutations(["closeSnackbar"]),
  },

  computed: {
    ...mapState(["evenFormLoading", "evenForm", "snackbar", "text", "color", "textColor"]),
  },
};
</script>
