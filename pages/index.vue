<template>
  <v-container class="mt-16 d-flex flex-column align-center">
    <Header />
    <Form />
  </v-container>
</template>

<script>
import Form from '../components/Form.vue'
import Header from '../components/Header.vue'
export default {
  name: "IndexPage",
  components: { Form, Header }
}
</script>