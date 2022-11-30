<template>
  <v-card
    height="500"
    color="#22272E"
    class="rounded-xl overflow-hidden"
  >
    <v-row no-gutters>
      <v-col
        cols="12"
        sm="0"
        lg="3"
      >
        <!-- :permanent="permanent" -->
        <v-navigation-drawer
          v-model="drawer"
          width="200"
          color="#22272E"
          dark
          absolute
        >
          <template v-slot:prepend>
            <v-card
              color="transparent"
              flat
            >
              <v-card-text class="d-flex flex-column justify-start px-0">
                <v-avatar
                  size="100"
                  class="mx-auto"
                >
                  <v-img src="https://res.cloudinary.com/rukkiecodes/image/upload/v1664138243/WhatsApp_Image_2022-09-25_at_9.31.40_PM_oivbqx.jpg" />
                </v-avatar>
                <v-card-text class="text-body-1 font-weight-bold">Akere Dumale</v-card-text>
              </v-card-text>
              <span class="text-caption ml-2">
                <v-icon size="15 ">mdi-map-marker-outline</v-icon>Nigeria
              </span>
              <br>
              <span class="text-caption ml-2">
                <v-icon size="15 ">mdi-link-variant</v-icon><a
                  class="white--text ml-1 text-decoration-none"
                  href="/"
                >https://akeredumale.com</a>
              </span>
              <br>
              <span class="text-caption ml-2">
                <v-icon size="15 ">mdi-twitter</v-icon><a
                  class="white--text ml-1 text-decoration-none"
                  href="https://twitter.com/Akeredumale"
                >@Akeredumale</a>
              </span>
            </v-card>
          </template>
        </v-navigation-drawer>
      </v-col>
      <v-col
        cols="12"
        sm="9"
      >
        <v-sheet
          width="100%"
          height="500"
          class="ma-0 pa-0"
          color="transparent"
        >
          <v-toolbar
            dense
            flat
            dark
            color="#22272E"
          >
            <v-app-bar-nav-icon
              @click="drawer = !drawer"
              class="hidden-lg-and-up"
            />
            <v-app-bar-title class="ml-0 pl-0">Recent projects</v-app-bar-title>
            <v-spacer />
            <v-btn
              small
              depressed
              dark
              color="deep-purple accent-4"
              class="rounded-lg text-capitalize"
              to="/work"
            >work</v-btn>
          </v-toolbar>

          <v-sheet
            dark
            width="100%"
            height="452"
            color="transparent"
            style="overflow: hidden; overflow-y: auto;"
          >
            <v-list-item
              three-line
              v-for="(project, i) in projects[0]"
              :key="i"
            >
              <v-list-item-avatar size="60">
                <v-img :src="project.cover"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  <nuxt-link
                    class="text-decoration-none"
                    :to="project.id"
                  >{{project.title}}</nuxt-link>
                </v-list-item-title>
                <v-list-item-subtitle>
                  <span class="text-caption" v-html="JSON.parse(project.post)" />
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-sheet>
        </v-sheet>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { collection, getDocs } from '@firebase/firestore';
import { db } from '~/plugins/firebase';

export default {
  data: () => ({
    drawer: true,
    projects: [],
  }),

  mounted () {
    this.$nextTick(() => {
      this.removeBorder()
      this.drawerVisibility()
      this.getPosts()
    })
  },

  methods: {
    gotoGithub () {
      window.open("https://github.com/rukkiecodes");
    },

    removeBorder () {
      const border = document.querySelector(".v-navigation-drawer__border")
      if (border) border.style.display = "none"
    },

    drawerVisibility () {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return (this.drawer = false)
        case "sm":
          return (this.drawer = false)
        case "md":
          return (this.drawer = false)
        case "lg":
          return (this.drawer = true)
        case "xl":
          return (this.drawer = true)
      }
    },

    async getPosts () {
      const snapshot = await getDocs(collection(db, 'blog'))

      this.projects.push(
        snapshot?.docs?.map(doc => ({
          id: doc?.id,
          ...doc?.data()
        }))
      )
    }
  }
}
</script>

<style scoped>
::-webkit-scrollbar {
  width: 0px;
}

.repo-bar {
  background: #2d333b65 !important;
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
}
</style>