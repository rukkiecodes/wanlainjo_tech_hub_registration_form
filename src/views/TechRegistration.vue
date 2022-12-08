<template>
  <v-responsive>
    <v-container class="d-flex flex-column justify-start align-center">
      <v-card class="ma-0 pa-0" height="200" width="600" max-width="100%">
        <v-img
          cover
          src="https://res.cloudinary.com/rukkiecodes/image/upload/v1663800564/Screenshot_from_2022-09-21_23-48-03_rzxjmn.png"
        ></v-img>
      </v-card>

      <v-card class="mt-5" width="600" max-width="100%">
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
    </v-container>
  </v-responsive>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  methods: {
    ...mapActions(['submitEventForm'])
  },

  computed: {
    ...mapState(["evenFormLoading", "evenForm"]),
  },
};
</script>
