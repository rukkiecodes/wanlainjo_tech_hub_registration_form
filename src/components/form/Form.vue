<template>
  <v-card width="100%" height="100%" class="overflow-auto" flat>
    <v-card-text>
      <v-toolbar
        color="white"
        :elevation="0"
        density="comfortable"
        rounded="lg"
      >
        <v-toolbar-title>{{
          step == 1
            ? "Student's details"
            : step == 2
            ? "Sponsorship"
            : step == 3
            ? "Courses registerd"
            : "Register"
        }}</v-toolbar-title>
      </v-toolbar>

      <v-row align="start" justify="start" class="mt-5">
        <v-col cols="12" sm="4">
          <v-card
            :elevation="5"
            min-height="150"
            class="d-flex flex-column justify-center align-center"
            rounded="lg"
            @click="clickOnFileInput"
            :loading="loading"
          >
            <img v-if="url" :src="url" style="width: 100%" v-show="image" />
            <v-card-text v-show="!image">
              <v-icon size="100" color="grey">mdi-account</v-icon>
            </v-card-text>

            <v-card-text class="text-caption" v-show="!image">
              Please Upload a picture
            </v-card-text>
          </v-card>
          <input
            type="file"
            id="fileInput"
            @change="onFileChange"
            style="display: none"
          />
        </v-col>

        <Step1Vue v-show="step == 1" />
        <Step2Vue v-show="step == 2" />
        <Step3Vue v-show="step == 3" />
        <Step4Vue v-show="step == 4" />
      </v-row>
    </v-card-text>

    <v-card-text class="py-0">
      <v-card-actions>
        <v-spacer />
        <v-btn v-show="step > 1" @click="prev" color="warning" variant="tonal"
          >Go back</v-btn
        >
        <v-btn v-show="step < 3" @click="next" color="#3C37FF" variant="tonal"
          >Next</v-btn
        >

        <v-btn
          v-show="step == 3"
          @click="submitForm"
          :loading="loading"
          color="#3C37FF"
          variant="tonal"
          >Register</v-btn
        >
      </v-card-actions>
    </v-card-text>

    <v-card-text class="py-0">
      <Agreement />
    </v-card-text>
    <v-snackbar v-model="snackbar" :timeout="2000" :color="color">
      {{ text }}

      <template v-slot:actions>
        <v-btn :color="textColor" icon variant="text" @click="closeSnackbar">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-card>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import Step1Vue from "./components/Step1.vue";
import Step2Vue from "./components/Step2.vue";
import Step3Vue from "./components/Step3.vue";
import Step4Vue from "./components/Step4.vue";
import Agreement from "./Agreement.vue";
export default {
  data: () => ({
    url: null,
  }),

  components: { Step1Vue, Step2Vue, Step3Vue, Step4Vue, Agreement },

  methods: {
    onFileChange(e) {
      const file = e.target.files[0];

      if (!file) return;

      this.url = URL.createObjectURL(file);
      this._image = file;
    },

    clickOnFileInput() {
      document.querySelector("#fileInput").click();
    },

    ...mapMutations(["next", "prev", "closeSnackbar"]),

    ...mapActions(["submitForm"]),
  },

  computed: {
    ...mapState([
      "formCredential",
      "loading",
      "image",
      "snackbar",
      "text",
      "step",
      "color",
      "textColor",
    ]),

    _image: {
      get() {
        return this.$store.state.image;
      },
      set(new_value) {
        this.$store.state.image = new_value;
      },
    },
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  width: 0;
}
</style>