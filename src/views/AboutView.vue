<template>
  <PageTitle title="About Us" />
  <div class="about__outer-container">
    <div class="about__content">
      <div v-for="(section, key) in aboutStore.aboutSections" :key="key">
        <h2 v-if="section.title" class="title-two">{{ section.title }}</h2>
        <p v-if="section.content" class="text">{{ section.content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PageTitle from '@/components/PageTitle.vue';
import { useAboutStore } from '@/stores/about';

const aboutStore = useAboutStore();
</script>

<style lang="scss" scoped>
.about {
  &__outer-container {
    padding-bottom: 90px;
    @include contentContainerSmall;
  }

  &__content {
    text-align: left;
    border-radius: 20px;
    background: none;
    padding: 0px;
    color: inherit;
  }
}

.intro-text {
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
}

h2 {
  margin-top: 50px;
  color: inherit;
}

p {
  margin-top: 20px;

  &:first-child {
    margin-top: 30px;

    @include tabletAndAbove {
      margin-top: 50px;
    }
  }
}

ul {
  margin-left: 16px;

  @include tabletAndAbove {
    margin-left: 0px;
  }
}
</style>
