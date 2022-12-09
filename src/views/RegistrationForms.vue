<template>
  <router-view />
</template>

<script>
import { mapActions } from "vuex";
export default {
  mounted() {
    this.getRegistrationForms();
  },

  methods: {
    ...mapActions(["getRegistrationForms"]),
  }
};
</script>
