<template>
  <v-btn
    class="text-capitalize white--text"
    color="#3C37FF"
    depressed
    block
    :loading="loading"
    @click="submitForm"
  >Register Now</v-btn>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  methods: {
    ...mapActions(['submitForm'])
  },
  computed: {
    ...mapState(['loading'])
  }
}
</script>
