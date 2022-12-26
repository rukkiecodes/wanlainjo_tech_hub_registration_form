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
                density="compact"
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
                @update:model-value="setCourseOnePrice"
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
      { title: "Frontend developement (web)", price: 30000 },
      { title: "Frontend developement (Mobile)", price: 30000 },
      { title: "Backend developement (Node)", price: 30000 },
      { title: "Backend developement (PHP)", price: 30000 },
      { title: "Backend developement (Python)", price: 30000 },
      { title: "Robotics / Artificial Intelligence", price: 30000 },
      { title: "Internet Of Things", price: 30000 },
      { title: "Networking", price: 30000 },
      { title: "Clud computing", price: 30000 },
      { title: "Digital marketing", price: 30000 },
      { title: "Data analysis", price: 30000 },
      { title: "Technical writing", price: 30000 },
      { title: "Copy writing", price: 30000 },
      { title: "Graphic design", price: 30000 },
      { title: "UI/UX", price: 30000 },
    ],
  }),

  methods: {
    ...mapMutations([
      "toggleActiveCardOne",
      "toggleActiveCardTwo",
      "toggleActiveCardThree",
      "setCourseOnePrice"
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