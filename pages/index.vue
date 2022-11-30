<template>
  <v-container
    class="ma-0"
    fluid
  >
    <v-row
      justify="center"
      align="center"
    >
      <v-col
        cols="12"
        sm="8"
        md="4"
      >
        <v-card
          color="transparent"
          class="d-flex justify-space-between align-center"
          width="100%"
          height="100vh"
          flat
        >
          <v-card-text class="text-center">
            <v-avatar size="150">
              <v-img src="https://res.cloudinary.com/rukkiecodes/image/upload/v1664138243/WhatsApp_Image_2022-09-25_at_9.31.40_PM_oivbqx.jpg" />
            </v-avatar>
            <v-card-text class="text-h4 font-weight-bold grey--text text--darken-4">Akere Dumale</v-card-text>
            <span class="grey--text text--darken-4">Creative frontend developer, designer and illustrator.</span>
            <v-card-actions class="d-flex justify-center">
              <v-btn
                icon
                depressed
                class="mr-2"
                @click="gotoFacebook"
              >
                <v-icon>mdi-facebook</v-icon>
              </v-btn>
              <v-btn
                icon
                depressed
                class="ml-2"
                @click="gotoTwitter"
              >
                <v-icon>mdi-twitter</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row id="work">
      <v-col
        cols="12"
        sm="6"
        md="4"
      >
        <v-card
          color="transparent mx-0"
          flat
        >
          <v-card-title class="mx-0 px-0 text-h4">
            about me
            <v-btn
              @click="gotoResume"
              rounded
              small
              dark
              depressed
              class="text-capitalize ml-4"
              color="deep-purple accent-4"
            >
              My Resume
              <v-icon
                small
                class="ml-2"
              >mdi-link-variant</v-icon>
            </v-btn>
          </v-card-title>
          <v-row>
            <v-col cols="12">
              <span class="blue-grey--text text--darken-1">
                10-20 second!
                <br>
                That's all you need to capture the interest of your reader.
                <br>
                <br>
                Hi my name is Akere a direct Response copywriter, having gained experience in sales copywriting and being able to work with diverse clients
                <br>
                <br>
                I know selling is all about being able to satisfy the psychological need of customers to persuade them to act
                <br>
                Through my words, I will help you drive more traffic leads and create a strong enough desire in the mind of your prospects to act
                <br>
                Niches as specified in but not limited to are health, beauty e-commerce, affiliate content etc….
              </span>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <v-col
        cols="12"
        sm="6"
        md="8"
      >
        <Repo />
      </v-col>
    </v-row>

    <v-row class="mt-16">
      <v-col
        cols="12"
        sm="4"
      >
        <SkillsImage />
      </v-col>
      <v-col
        cols="12"
        sm="8"
      >
        <Skills />
      </v-col>
    </v-row>

    <v-row class="mt-16">
      <v-col cols="12">
        <v-card
          width="900"
          color="transparent"
          flat
        >
          <p>Thanks for checking my website!</p>
          <p class="blue-grey--text text--darken-1">It's a work in progress so check back often!</p>
          <p class="font-weight-bold text-h5 text-sm-h4 text-md-h3 text-lg-h2">Check out my <router-link
              to="/work"
              class="deep-purple--text text--accent-4"
              style="cursor: pointer;"
            >Selcted works</router-link> for more details.</p>
          <p>I am available for new projects and a coffee <span class="deep-purple--text text--accent-4">;)</span></p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Repo from "../components/Repo.vue";
import SkillsImage from "../components/SkillsImage.vue";
import Skills from "~/components/Skills.vue";
export default {
  name: "IndexPage",
  data: () => ({}),
  methods: {
    gotoFacebook () {
      window.open("https://www.facebook.com/peace.christain.98");
    },
    gotoTwitter () {
      window.open("https://twitter.com/Akeredumale");
    },
    gotoResume () {
      window.open("https://docs.google.com/document/d/1VOFordnMhqUqPV4W18j3R9xEW6OAvtAF/edit?usp=sharing&ouid=118220414778609688788&rtpof=true&sd=true");
    }
  },

  components: { Repo, SkillsImage, Skills }
}
</script>