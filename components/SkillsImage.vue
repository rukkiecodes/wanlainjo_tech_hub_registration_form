<template>
    <v-img class="skillImage rounded-lg" src="https://res.cloudinary.com/rukkiecodes/image/upload/v1664138243/WhatsApp_Image_2022-09-25_at_9.31.40_PM_oivbqx.jpg" />
</template>

<style scoped>
.skillImage {
  position: relative;
}

.skillImage::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
}
</style>