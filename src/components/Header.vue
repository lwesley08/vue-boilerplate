<template>
  <v-toolbar class="header">
    <v-toolbar-title>
      <router-link to="/" custom v-slot="{ navigate }">
        <img
          @click="navigate"
          :alt="clientStore.name + ' Logo'"
          :src="clientStore.logoSrc"
          class="header__logo"
        />
      </router-link>
    </v-toolbar-title>
    <v-toolbar-items class="d-none d-md-flex">
      <v-btn v-for="(nav, index) in navStore.navItems" :key="index" :to="nav.to" role="link">{{
        nav.title
      }}</v-btn>
    </v-toolbar-items>
    <v-btn v-if="navStore.hasShopButton" class="header__shop-btn d-none d-md-flex" to="/menu"
      >Shop Now</v-btn
    >
    <v-btn
      class="d-flex d-md-none"
      icon="mdi-menu"
      size="large"
      @click="drawer = !drawer"
      aria-label="Expand Menu"
    ></v-btn>
  </v-toolbar>
  <v-navigation-drawer v-model="drawer" location="right" temporary>
    <v-list :items="navStore.navItems"></v-list>
    <v-btn v-if="navStore.hasShopButton" class="header__shop-btn d-flex" to="/menu">Shop Now</v-btn>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useNavStore } from '@/stores/nav';
import { useClientStore } from '@/stores/client';

const clientStore = useClientStore();
const navStore = useNavStore();

const drawer = ref(false);
</script>

<style scoped lang="scss">
.header {
  @include contentContainer;

  &__logo {
    cursor: pointer;
    height: 70px;
  }

  &__shop-btn {
    background-color: black;
    color: white;
    border-radius: 10px;
    padding: 20px 28px !important;

    @include mobile {
      width: 100%;
    }
  }
}

.v-toolbar {
  background-color: black;
  color: white;
  height: 100px;

  &:deep {
    .v-toolbar__content {
      height: 100px !important;
    }
  }
}

.v-navigation-drawer {
  background-color: black;
  color: white;

  &:deep {
    .v-navigation-drawer__content {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      margin-bottom: 20px;
      height: 100%;
      padding-left: 5px;
      padding-right: 5px;
    }
  }
}
</style>
