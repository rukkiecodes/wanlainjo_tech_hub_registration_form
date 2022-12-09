<template>
  <v-container>
    <v-toolbar class="mb-5" color="transparent" flat floating>
      <v-btn @click="$router.go(-1)" rounded variant="tonal" color="indigo" size="x-large">
        <v-icon class="mr-4">mdi-arrow-left</v-icon>
        Go back
      </v-btn>
    </v-toolbar>
    <v-row v-if="viewStudent" justify="space-between" align="start">
      <v-col cols="12" sm="6" md="4">
        <v-card class="ma-0 pa-0" flat>
          <v-img cover :src="viewStudent.displayPicture" />
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="8">
        <v-card flat>
          <v-card-title
            class="text-h5 mb-4"
            v-text="viewStudent.studentsname"
          />
          <v-card-text class="py-2" v-if="viewStudent.sex != ''"
            ><v-icon class="mr-4">mdi-gender-male-female</v-icon
            >{{ viewStudent.sex }}</v-card-text
          >
          <v-card-text class="py-2" v-if="viewStudent.address != ''"
            ><v-icon class="mr-4">mdi-google-maps</v-icon
            >{{ viewStudent.address }}</v-card-text
          >
          <v-card-text class="py-2" v-if="viewStudent.dob != ''"
            ><v-icon class="mr-4">mdi-baby</v-icon
            >{{ viewStudent.dob }}</v-card-text
          >
          <v-card-text class="py-2" v-if="viewStudent.state != ''"
            ><v-icon class="mr-4">mdi-globe-model</v-icon
            >{{ viewStudent.state }}</v-card-text
          >
          <v-card-text class="py-2" v-if="viewStudent.phone != ''"
            ><v-icon class="mr-4">mdi-phone</v-icon
            >{{ viewStudent.phone }}</v-card-text
          >
          <v-card-text class="py-2" v-if="viewStudent.email != ''"
            ><v-icon class="mr-4">mdi-at</v-icon
            >{{ viewStudent.email }}</v-card-text
          >

          <v-divider />
          <v-card-subtitle class="mt-5 text-black"
            >Sponsors Information</v-card-subtitle
          >
          <v-card-title class="text-h5 mb-4" v-text="viewStudent.sponsorName" />
          <v-card-text class="py-2" v-if="viewStudent.sponsorAddress != ''"
            ><v-icon class="mr-4">mdi-google-maps</v-icon
            >{{ viewStudent.sponsorAddress }}</v-card-text
          >
          <v-card-text class="py-2" v-if="viewStudent.sponsorPhone != ''"
            ><v-icon class="mr-4">mdi-phone</v-icon
            >{{ viewStudent.sponsorPhone }}</v-card-text
          >

          <v-divider />
          <v-card-subtitle class="mt-5 text-black">Courses</v-card-subtitle>
          <v-list
            lines="two"
            v-if="
              viewStudent.course1 != undefined || viewStudent.course1 != null
            "
          >
            <v-list-item
              title="First choice"
              :subtitle="viewStudent.course1.course"
            >
              <template v-slot:prepend>
                <v-avatar color="grey-lighten-1">
                  <v-icon color="white">mdi-account-school</v-icon>
                </v-avatar>
              </template>

              <template v-slot:append>
                <v-chip
                  >{{ viewStudent.course1.duration }}
                  {{
                    viewStudent.course1.duration == 1 ? "Month" : "Months"
                  }}</v-chip
                >
              </template>
            </v-list-item>
          </v-list>
          <v-list
            lines="two"
            v-if="
              viewStudent.course2 != undefined || viewStudent.course2 != null
            "
          >
            <v-list-item
              title="Second choice"
              :subtitle="viewStudent.course2.course"
            >
              <template v-slot:prepend>
                <v-avatar color="grey-lighten-1">
                  <v-icon color="white">mdi-account-school</v-icon>
                </v-avatar>
              </template>

              <template v-slot:append>
                <v-chip
                  >{{ viewStudent.course2.duration }}
                  {{
                    viewStudent.course2.duration == 1 ? "Month" : "Months"
                  }}</v-chip
                >
              </template>
            </v-list-item>
          </v-list>
          <v-list
            lines="two"
            v-if="
              viewStudent.course3 != undefined || viewStudent.course3 != null
            "
          >
            <v-list-item
              title="Second choice"
              :subtitle="viewStudent.course3.course"
            >
              <template v-slot:prepend>
                <v-avatar color="grey-lighten-1">
                  <v-icon color="white">mdi-account-school</v-icon>
                </v-avatar>
              </template>

              <template v-slot:append>
                <v-chip
                  >{{ viewStudent.course3.duration }}
                  {{
                    viewStudent.course3.duration == 1 ? "Month" : "Months"
                  }}</v-chip
                >
              </template>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  mounted() {
    this.getStudent(this.$route.params.form);
  },

  methods: {
    ...mapActions(["getStudent"])
  },

  computed: {
    ...mapState(["viewStudent"]),
  },
};
</script>
