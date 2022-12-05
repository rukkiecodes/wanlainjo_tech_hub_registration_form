<template>
  <div class="card">
    <div class="left">
      <div class="leftCard">
        <img src="../assets/images/logo.png" class="logo" alt="" />
        <!-- <p class="logo">Wanlainjo</p> -->

        <div class="middleDiv">
          <p>Making tech easy for all</p>
          <p>
            Discover the world's best community of freelancers and business
            owners.
          </p>
        </div>

        <div class="bottomDiv">
          <p class="testimony">
            Simply unbelivable! I am really satisfied with my projects and
            business. This is Absolutly wonderful!
          </p>
          <div class="list">
            <img
              src="https://res.cloudinary.com/rukkiecodes/image/upload/v1668519308/Black_Minimalist_and_Elegant_Boutique_Logo_1_omcgcu.png"
              alt=""
            />
            <div class="listLeft">
              <p>Terry Ochuko</p>
              <p>Software developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="right">
      <Form />
    </div>
  </div>
</template>

<script setup>
import HeroVue from "@/components/form/Hero.vue";
import Form from "@/components/form/Form.vue";
</script>

<style scoped>
@import "../assets/style/main.css";
</style>