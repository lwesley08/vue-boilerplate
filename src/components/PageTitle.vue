<template>
  <div class="page-title__header-container">
    <div class="page-title__header-content d-flex align-end pb-7">
      <h1 class="title-one">{{ props.title }}</h1>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  }
});
</script>
<style scoped lang="scss">
.page-title {
  &__header-container {
    height: 90px;
    background: $primary-900;
    color: $secondary-200;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    @include contentContainerSmall;

    @include tabletAndAbove {
      height: 170px;
    }
  }

  &__header-content {
    width: 730px;
    display: flex;
    justify-content: center;
    text-align: center;
  }
}
</style>
