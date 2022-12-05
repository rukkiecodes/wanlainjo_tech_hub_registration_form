<template>
  <v-col cols="12" sm="8">
    <v-card :elevation="5" rounded="lg">
      <v-card-text>
        <v-text-field
          v-model="formCredential.studentsname"
          label="Full name"
          variant="underlined"
          hide-details
        />
        <v-select
          v-model="formCredential.sex"
          label="Sex"
          variant="underlined"
          class="mt-3"
          :items="['Male', 'Female']"
          hide-details
        />
        <v-text-field
          v-model="formCredential.address"
          label="Address"
          variant="underlined"
          hide-details
        />
        <v-text-field
          v-model="formCredential.dob"
          label="Date of birth"
          variant="underlined"
          density="compact"
          class="mt-5"
          hide-details
          type="date"
        />
        <v-text-field
          v-model="formCredential.state"
          label="State of origin"
          variant="underlined"
          hide-details
          class="mt-3"
        />
        <v-text-field
          v-model="formCredential.phone"
          label="Phone number"
          variant="underlined"
          class="mt-3"
          hide-details
        />
        <v-text-field
          v-model="formCredential.email"
          label="Email address"
          variant="underlined"
          class="mt-3"
          hide-details
        />
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["formCredential"]),
  },
};
</script>