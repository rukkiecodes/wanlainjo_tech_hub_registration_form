<template>
  <v-card-text>
    I
    <v-text-field
      dense
      hide-details
      placeholder="Students name"
      v-model="formCredential.agrement"
    />,
    agree that by completing this form, i accept the <nuxt-link
      to="/terms"
      class="font-weight-bold"
    >terms stated behind</nuxt-link> and will comply to the best of my ability.
  </v-card-text>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['formCredential'])
  }
}
</script>
