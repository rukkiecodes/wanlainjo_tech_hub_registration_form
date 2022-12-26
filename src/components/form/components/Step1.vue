<template>
  <v-col cols="12" sm="8">
    <v-card :elevation="5" rounded="lg">
      <v-card-text>
        <v-text-field
          v-model="formCredential.studentsname"
          label="Full name"
          variant="underlined"
          density="compact"
        />
        <v-select
          v-model="formCredential.sex"
          label="Sex"
          variant="underlined"
          class="mt-3"
          :items="['Male', 'Female']"
          density="compact"
        />
        <v-text-field
          v-model="formCredential.address"
          label="Address"
          variant="underlined"
          density="compact"
          />
          <v-text-field
          v-model="formCredential.dob"
          label="Date of birth"
          variant="underlined"
          density="compact"
          class="mt-5"
          type="date"
          />
          <v-text-field
          v-model="formCredential.state"
          label="State of origin"
          variant="underlined"
          density="compact"
          class="mt-3"
          />
          <v-text-field
          v-model="formCredential.phone"
          label="Phone number"
          variant="underlined"
          class="mt-3"
          density="compact"
          />
          <v-text-field
          v-model="formCredential.email"
          label="Email address"
          variant="underlined"
          class="mt-3"
          density="compact"
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