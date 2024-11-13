import type { AboutSection } from '@/types/aboutSection';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAboutStore = defineStore('about', () => {
  const aboutSections = ref<Array<AboutSection> | undefined>([
    {
      title: 'Lorem Ipsum',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, iusto.'
    }
  ]);

  return { aboutSections };
});
