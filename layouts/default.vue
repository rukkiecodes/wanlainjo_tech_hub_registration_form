<template>
  <v-app dark>
    <v-main style="background-color: #D9DFE8;">
      <transition
        name="fade"
        mode="out-in"
      >
        <Nuxt />
      </transition>
    </v-main>
  </v-app>
</template>

<script>
import Contact from '~/components/Contact.vue';
export default {
  name: "DefaultLayout",
  data () {
    return {
      routes: [
        { title: 'Home', to: '/' },
        { title: 'Work', to: '/work' },
      ]
    };
  },

  components: { Contact }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.8s;
  transition-property: opacity;
  transition-timing-function: ease-in-out;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
