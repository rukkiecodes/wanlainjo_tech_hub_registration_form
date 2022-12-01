<template>
  <v-card
    width="100%"
    flat
  >
    <v-card-title>Students details</v-card-title>
    <v-row
      no-gutters
      align="start"
      justify="space-between"
    >
      <v-col
        cols="12"
        sm="8"
        order="1"
        order-sm="0"
      >
        <v-card-text>
          <v-row
            dense
            align="start"
            justify="space-between"
          >
            <v-col cols="12">
              <v-text-field
                dense
                outlined
                label="Full name"
                v-model="formCredential.studentsname"
              />
            </v-col>
            <v-col cols="12">
              <v-select
                dense
                outlined
                label="Sex"
                :items="['Male', 'Female']"
                v-model="formCredential.sex"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                dense
                outlined
                label="Address"
                v-model="formCredential.address"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                dense
                outlined
                type="date"
                label="date of birth"
                v-model="formCredential.dob"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                dense
                outlined
                label="State of origin"
                v-model="formCredential.state"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                dense
                outlined
                label="Phone number"
                v-model="formCredential.phone"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                dense
                outlined
                type="email"
                label="Email address"
                v-model="formCredential.email"
              />
            </v-col>
          </v-row>
        </v-card-text>

        <v-divider />
        <v-card-title>Sponsorship</v-card-title>

        <v-card-text>
          <v-row
            dense
            align="start"
            justify="space-between"
          >
            <v-col cols="12">
              <v-text-field
                dense
                outlined
                label="Name"
                v-model="formCredential.sponsorName"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                dense
                outlined
                label="Address"
                v-model="formCredential.sponsorAddress"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                dense
                outlined
                label="Phone number"
                v-model="formCredential.sponsorPhone"
              />
            </v-col>
          </v-row>
        </v-card-text>

        <v-divider />
        <v-card-title>Courrses registerd</v-card-title>

        <v-card-text>
          <v-row
            dense
            align="start"
            justify="space-between"
          >
            <v-col cols="12">
              <v-select
                dense
                outlined
                label="Courses"
                :items="courses"
                v-model="formCredential.course1"
              />
            </v-col>
            <v-col cols="12">
              <v-select
                dense
                outlined
                label="Courses"
                :items="courses"
                v-model="formCredential.course2"
              />
            </v-col>
            <v-col cols="12">
              <v-select
                dense
                outlined
                label="Courses"
                :items="courses"
                v-model="formCredential.course3"
              />
            </v-col>
          </v-row>
        </v-card-text>
      </v-col>
      <v-col
        cols="12"
        sm="4"
      >
        <v-card
          min-height="200"
          flat
          outlined
          class="d-flex justify-center align-center"
          @click="clickOnFileInput"
        >
          <img
            v-if="url"
            :src="url"
            style="width: 100%;"
          />
          <v-icon
            v-else
            large
          >mdi-account</v-icon>
        </v-card>
        <input
          type="file"
          id="fileInput"
          @change="onFileChange"
          style="display: none;"
        />
      </v-col>
    </v-row>
    <Agreement />

    <v-card-actions>
      <v-spacer />
      <SubmitButton />
    </v-card-actions>
  </v-card>
</template>

<script>
import Agreement from './Agreement.vue'
import SubmitButton from './SubmitButton.vue'
import { mapActions, mapState } from 'vuex'
export default {
  data: () => ({
    url: null,
    courses: [
      'Frontend developement (web)',
      'Frontend developement (Mobile)',
      'Backend developement (Node)',
      'Backend developement (PHP)',
      'Backend developement (Python)',
      'Robotics / Artificial Intelligence',
      'Internet Of Things',
      'Networking',
      'Clud computing',
      'Digital marketing',
      'Data analysis',
      'Technical writing',
      'Copy writing',
      'Graphic design',
      'UI/UX'
    ]
  }),

  components: { Agreement, SubmitButton },

  methods: {
    onFileChange (e) {
      const file = e.target.files[0]

      if (!file) return

      this.url = URL.createObjectURL(file)
      this._image = file
    },

    clickOnFileInput () {
      document.querySelector('#fileInput').click()
    },

  },

  computed: {
    ...mapState(['formCredential', 'image']),

    _image: {
      get () {
        return this.$store.state.image;
      },
      set (new_value) {
        this.$store.state.image = new_value;
      }
    },
  }
}
</script>

<style>
</style>