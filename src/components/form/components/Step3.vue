<template>
  <v-col cols="12" sm="8">
    <v-card :elevation="5" rounded="lg">
      <v-card-text class="mx-0 px-0">
        <v-card flat>
          <v-toolbar density="compact" color="transparent">
            <v-checkbox
              @change="toggleActiveCardOne"
              label="Course one(1)"
            ></v-checkbox>
          </v-toolbar>
          <v-card :disabled="!activeCardOne" flat>
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
        </v-card>

        <v-divider class="mb-5" />
        <v-card flat>
          <v-toolbar density="compact" color="transparent">
            <v-checkbox
              @change="toggleActiveCardTwo"
              label="Course two(2)"
            ></v-checkbox>
          </v-toolbar>

          <v-card :disabled="!activeCardTwo" flat>
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
        </v-card>

        <v-divider class="mb-5" />
        <v-card flat>
          <v-toolbar density="compact" color="transparent">
            <v-checkbox
              @change="toggleActiveCardThree"
              label="Course three(3)"
            ></v-checkbox>
          </v-toolbar>

          <v-card :disabled="!activeCardThree" flat>
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
        </v-card>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
import { mapMutations, mapState } from "vuex";
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

  methods: {
    ...mapMutations([
      "toggleActiveCardOne",
      "toggleActiveCardTwo",
      "toggleActiveCardThree",
    ]),
  },

  computed: {
    ...mapState([
      "formCredential",
      "activeCardOne",
      "activeCardTwo",
      "activeCardThree",
    ]),
  },
};
</script>