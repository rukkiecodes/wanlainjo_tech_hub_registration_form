<template>
  <v-container style="margin-top: 10vh; width: 600px; max-width: 90%;">
    <v-card
      v-if="project"
      width="600"
      max-height="350"
      flat
      class="overflow-hidden my-5 pl-0 ml-0 red"
    >
      <v-img
        :src="project?.cover"
        class="pl-0 ml-0"
      />
    </v-card>
    <v-card
      v-if="project"
      width="700"
      max-height="350"
      flat
      class="overflow-hidden my-5"
    >
      <v-card-title class="post font-weight-bold text-h5 text-sm-h4 text-md-h3 text-lg-h2 pl-0">{{ project?.title }}</v-card-title>
      <v-card-text
        class="post postBody grey--text text--darken-3 pl-0"
        v-html="JSON.parse(project?.post)"
      />
    </v-card>
  </v-container>
</template>

<script>
import { doc, getDoc } from '@firebase/firestore'
import { db } from '~/plugins/firebase'

export default {
  data: () => ({
    project: null
  }),

  mounted () {
    this.$nextTick(() => {
      this.getPosts()
    })
  },

  methods: {
    async getPosts () {
      const project = await (await getDoc(doc(db, 'blog', this.$route.params.project))).data()

      this.project = project
    }
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Abyssinica+SIL&display=swap");
.post {
  font-family: "Abyssinica SIL", serif !important;
}
.postBody {
  font-size: 1.2em;
}
</style>