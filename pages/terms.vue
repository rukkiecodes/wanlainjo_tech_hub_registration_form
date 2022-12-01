<template>
  <v-container class="d-flex justify-center">
    <v-card width="600" flat>
      <v-card-title>Students guide</v-card-title>

      <ol>
        <li
          v-for="(guide, i) in guides"
          :key="i"
          class="mb-5 grey--text text--darken-3 text-body-2"
        >{{ guide }}</li>
      </ol>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    guides: [
      'All students should maintain the scheduled lecture period with their department',
      'No absenting of self without proved resons',
      'Maximum absenting of students allowed during the period is two (2) days',
      'All students should comply with their respective departments as regards tp assesments during the course',
      'Students who absent themselves more then three(3) times and still want to meet up the course curriculum will have to make seperate arrangement with his/her department'
    ]
  })
}
</script>

<style>
</style>