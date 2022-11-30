<template>
  <v-app dark>
    <v-app-bar
      app
      flat
      fixed
      dense
      class="app-bar"
    >
      <nuxt-link
        to="/"
        class="deep-purple--text text--accent-4 text-decoration-none text-sm-h6"
      >Wanlainjo Tech hub</nuxt-link>
      <v-spacer />
    </v-app-bar>
    <v-main>
      <transition
        name="fade"
        mode="out-in"
      >
        <Nuxt />
      </transition>
    </v-main>
    <v-footer
      absolute
      app
      color="transparent"
      class="d-flex justify-center"
    >
      <span>rukkiecodes &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
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
.app-bar {
  background: #ffffff8a !important;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

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
