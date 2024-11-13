<template>
  <v-app>
    <Header />
    <v-main style="min-height: 300px">
      <RouterView />
    </v-main>
    <Footer />
  </v-app>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
</script>

<style lang="scss">
.v-main .coming-soon {
  background-color: #759f9d;
  color: white;
}

html {
  font-family: $body-font-family !important;
}

.v-main {
  min-height: 650px !important;
}
</style>
