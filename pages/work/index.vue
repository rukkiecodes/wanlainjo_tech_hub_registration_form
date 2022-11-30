<template>
  <v-container style="margin-top: 40vh;">
    <p class="text-h5 text-sm-h4 text-md-h3 text-lg-h2">work <span class="font-weight-bold deep-purple--text text--accent-4 font-weight-light">selected</span></p>

    <v-list-item
      three-line
      v-for="(project, i) in projects[0]"
      :key="i"
    >
      <v-list-item-avatar :size="size">
        <v-img :src="project.cover" />
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="mb-md-n10 mb-lg-n15">
          <nuxt-link
            class="text-decoration-none deep-purple--text text--accent-4 font-weight-bold text-h5 text-sm-h4 text-md-h3 text-lg-h2"
            :to="project.id"
          >{{project.title}}</nuxt-link>
        </v-list-item-title>
        <v-list-item-subtitle class="mt-md-n10 mt-lg-n15">
          <span
            class="text-body-1"
            v-html="JSON.parse(project.post)"
          />
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-container>
</template>

<script>
import { collection, getDocs } from '@firebase/firestore'
import { db } from '~/plugins/firebase'

export default {
  data: () => ({
    projects: [],
  }),

  computed: {
    size () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 50
        case 'sm': return 100
        case 'md': return 150
        case 'lg': return 300
        case 'xl': return 300
      }
    },
  },

  mounted () {
    this.$nextTick(() => {
      this.getPosts()
    })
  },

  methods: {
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
