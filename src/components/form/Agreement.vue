<template>
  <p class="text-body-2 text-black">
    I {{formCredential.studentsname == '' ? '____________' : formCredential.studentsname}}, agree that by completing this form, i accept the
    <router-link to="/terms">terms stated behind</router-link>
    and will comply to the best of my ability.
  </p>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState(['formCredential'])
    }
};
</script>
