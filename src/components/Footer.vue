<template>
  <v-footer class="flex-column" name="footer">
    <div class="client-footer w-100 d-flex justify-space-between" v-if="!isComingSoon">
      <div class="client-footer__left d-flex flex-column">
        <img
          class="client-footer__logo"
          :alt="clientStore.name + ' Logo'"
          :src="clientStore.logoSrc"
        />
        <div class="client-footer__socials">
          <v-btn
            v-if="clientStore.igUrl"
            aria-label="Instagram"
            icon="mdi-instagram"
            size="x-large"
            :href="clientStore.igUrl"
            target="_blank"
            flat
          ></v-btn>
          <v-btn
            v-if="clientStore.fbUrl"
            aria-label="Facebook"
            icon="mdi-facebook"
            size="x-large"
            :href="clientStore.fbUrl"
            target="_blank"
            flat
          ></v-btn>
        </div>
        <div class="client-footer__address">
          <a :href="clientStore.addressMapsLink" target="_blank">
            <p>{{ clientStore.addressLineOne }}</p>
            <p>{{ clientStore.addressLineTwo }}</p>
          </a>
          <a :href="'tel:' + clientStore.phone" target="_blank">
            <p class="mt-2">{{ clientStore.phone }}</p>
          </a>
          <a :href="'mailto:' + clientStore.email" target="_blank">
            <p class="mt-2">{{ clientStore.email }}</p>
          </a>
        </div>
      </div>
      <div class="client-footer__right d-flex">
        <div v-for="(navSection, index) in navStore.footerNavItems" :key="index">
          <p class="section-header">{{ navSection.section }}</p>
          <v-list :items="navSection.links" density="compact"> </v-list>
        </div>
      </div>
    </div>
  </v-footer>
</template>

<script setup lang="ts">
import { useNavStore } from '@/stores/nav';
import { useClientStore } from '@/stores/client';

const navStore = useNavStore();
const clientStore = useClientStore();
</script>

<style lang="scss" scoped>
.v-footer {
  background-color: black;
  color: white;
}

.client-footer {
  padding-top: 40px;
  padding-bottom: 40px;
  flex-direction: column;
  row-gap: 40px;
  @include contentContainer;

  @include laptopAndAbove {
    flex-direction: row;
  }

  &__logo {
    max-height: 100px;
    width: 100px;
  }

  .section-header {
    padding-inline: 16px;
    text-transform: uppercase;
    font-weight: 900;
  }

  .v-list {
    background-color: black;
    color: white;
  }

  &__right {
    column-gap: 40px;
    row-gap: 40px;
    flex-wrap: wrap;
  }

  &__left {
    row-gap: 20px;
  }

  &__address {
    a {
      &:hover {
        opacity: 80%;
      }
    }
  }

  &__socials {
    transform: translateX(-18px);

    .v-btn {
      background-color: transparent;
      color: white;
    }
  }
}
</style>
