<template>
  <v-col cols="12" sm="8">
    <v-card :elevation="5" rounded="lg">
      <v-card-text class="mx-0 px-0">
        <v-card flat>
          <v-card-title class="text-h6">Course one(1)</v-card-title>
          <v-card-text>
            <v-select
              v-model="formCredential.course1.course"
              label="Courses"
              variant="underlined"
              hide-details
              :items="courses"
            />
          </v-card-text>
          <v-card-text>
            <v-slider
              v-model="formCredential.course1.duration"
              label="Duration"
              thumb-label
              :min="0"
              :max="12"
              step="1"
            ></v-slider>
          </v-card-text>
        </v-card>

        <v-divider />
        <v-card flat>
          <v-card-title class="text-h6">Course two(2)</v-card-title>
          <v-card-text>
            <v-select
              v-model="formCredential.course2.course"
              label="Courses"
              variant="underlined"
              hide-details
              :items="courses"
            />
          </v-card-text>
          <v-card-text>
            <v-slider
              v-model="formCredential.course2.duration"
              label="Duration"
              thumb-label
              :min="0"
              :max="12"
              step="1"
            ></v-slider>
          </v-card-text>
        </v-card>

        <v-divider />
        <v-card flat>
          <v-card-title class="text-h6">Course three(3)</v-card-title>
          <v-card-text>
            <v-select
              v-model="formCredential.course3.course"
              label="Courses"
              variant="underlined"
              hide-details
              :items="courses"
            />
          </v-card-text>
          <v-card-text>
            <v-slider
              v-model="formCredential.course3.duration"
              label="Duration"
              thumb-label
              :min="0"
              :max="12"
              step="1"
            ></v-slider>
          </v-card-text>
        </v-card>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    courses: [
      "Frontend developement (web)",
      "Frontend developement (Mobile)",
      "Backend developement (Node)",
      "Backend developement (PHP)",
      "Backend developement (Python)",
      "Robotics / Artificial Intelligence",
      "Internet Of Things",
      "Networking",
      "Clud computing",
      "Digital marketing",
      "Data analysis",
      "Technical writing",
      "Copy writing",
      "Graphic design",
      "UI/UX",
    ],
  }),

  computed: {
    ...mapState(["formCredential"]),
  },
};
</script>