<template>
  <v-card width="500">
    <v-card-title>Students details</v-card-title>
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
          />
        </v-col>
        <v-col cols="12">
          <v-select
            dense
            outlined
            label="Sex"
            :items="['Male', 'Female']"
          />
        </v-col>
        <v-col cols="12">
          <v-text-field
            dense
            outlined
            label="Address"
          />
        </v-col>
        <v-col cols="12">
          <v-text-field
            dense
            outlined
            type="date"
            label="date of birth"
          />
        </v-col>
        <v-col cols="12">
          <v-text-field
            dense
            outlined
            label="State of origin"
          />
        </v-col>
        <v-col cols="12">
          <v-text-field
            dense
            outlined
            label="Phone number"
          />
        </v-col>
        <v-col cols="12">
          <v-text-field
            dense
            outlined
            type="email"
            label="Email address"
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
          />
        </v-col>
        <v-col cols="12">
          <v-text-field
            dense
            outlined
            label="Address"
          />
        </v-col>
        <v-col cols="12">
          <v-text-field
            dense
            outlined
            label="Phone number"
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
          />
        </v-col>
        <v-col cols="12">
          <v-select
            dense
            outlined
            label="Courses"
            :items="courses"
          />
        </v-col>
        <v-col cols="12">
          <v-select
            dense
            outlined
            label="Courses"
            :items="courses"
          />
        </v-col>
      </v-row>
    </v-card-text>

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
export default {
  data: () => ({
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

  components: { Agreement, SubmitButton }
}
</script>

<style>
</style>