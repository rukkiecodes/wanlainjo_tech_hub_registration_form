<template>
  <v-col cols="12" sm="8">
    <v-card :elevation="5" rounded="lg">
      <v-card-text>
        <v-text-field v-model="formCredential.sponsorName" label="Full name" variant="underlined" class="mt-3" hide-details />
        <v-text-field v-model="formCredential.sponsorAddress" label="Address" variant="underlined" class="mt-3" hide-details />
        <v-text-field v-model="formCredential.sponsorPhone" label="Phone number" variant="underlined" class="mt-3" hide-details />
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['formCredential'])
  }
}
</script>