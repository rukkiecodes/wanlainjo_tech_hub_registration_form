<template>
  <v-container fluid>
    <!-- <Header />
    <Form /> -->
    <div class="card">
      <div class="left">
        <div class="leftCard">
          <img
            src="../assets/images/logo.png"
            class="logo"
            alt=""
          >
          <!-- <p class="logo">Wanlainjo</p> -->

          <div class="middleDiv">
            <p>Making tech easy for all</p>
            <p>Discover the world's best community of freelancers and business owners.</p>
          </div>

          <div class="bottomDiv">
            <p class="testimony">Simply unbelivable! I am really satisfied with my projects and business. This is
              Absolutly wonderful!</p>
            <div class="list">
              <img
                src="https://res.cloudinary.com/rukkiecodes/image/upload/v1668519308/Black_Minimalist_and_Elegant_Boutique_Logo_1_omcgcu.png"
                alt=""
              >
              <div class="listLeft">
                <p>Terry Ochuko</p>
                <p>Software developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="right">
        <v-card
          max-height="100%"
          flat
          class="overFlowCard d-flex justify-center"
          style="overflow-y: scroll;"
        >
          <Form />
        </v-card>
      </div>
    </div>
    <v-snackbar
      v-model="snackbar"
      top
      right
      color="white"
      dark
    >
      <span class="grey--text text-darken-4">{{ text }}</span>

      <template v-slot:action="{ attrs }">
        <v-btn
          color="deep=purple accent-4"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import Form from '../components/Form.vue'
import Header from '../components/Header.vue'
export default {
  name: "IndexPage",
  components: { Form, Header },
  computed: {
    ...mapState(['snackbar', 'text']),

    snackbar: {
      get () {
        return this.$store.state.snackbar;
      },
      set (new_value) {
        this.$store.state.snackbar = new_value;
      }
    },

    text: {
      get () {
        return this.$store.state.text;
      },
      set (new_value) {
        this.$store.state.text = new_value;
      }
    },
  }
}
</script>

<style lang="scss" scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css";
@import "../assets/style/main.scss";
</style>