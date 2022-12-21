<template>
  <v-col cols="12" sm="8">
    <v-card :elevation="5" rounded="lg">
      <v-card-text>
        <v-card class="pa-0" flat v-show="activeCardOne">
          <v-card-title>Course one(1)</v-card-title>
          <v-card-text class="pa-0">
            <v-list lines="three" density="compact" class="pa-0">
              <v-list-item density="compact">
                <v-list-item-title class="text-body-2 font-weight-bold">{{
                  formCredential.course1.course
                }}</v-list-item-title>
                <v-list-item-subtitle
                  >Duration of {{ formCredential.course1.duration }}
                  {{
                    formCredential.course1.duration == 1 ? "Month" : "Months"
                  }}</v-list-item-subtitle
                >
                <v-list-item-subtitle>
                  For the price of ₦{{ 50000 }} only</v-list-item-subtitle
                >
                <template v-slot:append>
                  <v-btn
                    @click="payWithPaystack(formCredential.course1, 10000)"
                    flat
                    class="bg-indigo text-body-2"
                    size="small"
                  >
                    <span class="font-weight-lighter text-caption"
                      >Pay now</span
                    >
                  </v-btn>
                </template>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>

        <v-divider class="my-5" v-if="activeCardTwo" />

        <v-card class="pa-0" flat v-show="activeCardTwo">
          <v-card-title class="pb-0">Course one(2)</v-card-title>
          <v-card-text class="pa-0">
            <v-list lines="three" density="compact" class="pa-0">
              <v-list-item density="compact">
                <v-list-item-title class="text-body-2 font-weight-bold">{{
                  formCredential.course2.course
                }}</v-list-item-title>
                <v-list-item-subtitle
                  >Duration of {{ formCredential.course2.duration }}
                  {{
                    formCredential.course2.duration == 1 ? "Month" : "Months"
                  }}</v-list-item-subtitle
                >
                <v-list-item-subtitle>
                  For the price of ₦{{ 50000 }} only</v-list-item-subtitle
                >
                <template v-slot:append>
                  <v-btn
                    @click="payWithPaystack(formCredential.course2, 30000)"
                    flat
                    class="bg-indigo text-body-2"
                    size="small"
                  >
                    <span class="font-weight-lighter text-caption"
                      >Pay now</span
                    >
                  </v-btn>
                </template>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>

        <v-divider class="my-5" v-if="activeCardThree" />

        <v-card class="pa-0" flat v-show="activeCardThree">
          <v-card-title class="pb-0">Course one(3)</v-card-title>
          <v-card-text class="pa-0">
            <v-list lines="three" density="compact" class="pa-0">
              <v-list-item density="compact">
                <v-list-item-title class="text-body-2 font-weight-bold">{{
                  formCredential.course3.course
                }}</v-list-item-title>
                <v-list-item-subtitle
                  >Duration of {{ formCredential.course3.duration }}
                  {{
                    formCredential.course3.duration == 1 ? "Month" : "Months"
                  }}</v-list-item-subtitle
                >
                <v-list-item-subtitle>
                  For the price of ₦{{ 50000 }} only</v-list-item-subtitle
                >
                <template v-slot:append>
                  <v-btn
                    @click="payWithPaystack(formCredential.course3, 50000)"
                    flat
                    class="bg-indigo text-body-2"
                    size="small"
                  >
                    <span class="font-weight-lighter text-caption"
                      >Pay now</span
                    >
                  </v-btn>
                </template>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
import { mapState } from "vuex";
import { uuid } from "vue-uuid";
export default {
  methods: {
    payWithPaystack(course, price) {
      var handler = PaystackPop.setup({
        key: `${import.meta.env.VITE_PAYSTACK_KEY}`,
        email: "rukkiecodes@gmail.com",
        amount: price,
        ref: `Wanlainjo-course--${uuid.v1()}`,
        onClose: () => {},
      });
      handler.openIframe();
    },
  },

  computed: {
    ...mapState([
      "formCredential",
      "activeCardOne",
      "activeCardTwo",
      "activeCardThree",
      "formCredential",
    ]),
  },
};
</script>