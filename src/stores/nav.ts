import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Ref } from 'vue';

export const useNavStore = defineStore('nav', () => {
  const navItems = [{ title: 'About', props: { to: '/about' } }];
  const footerNavItems = [
    { section: 'Company', links: [{ title: 'About', props: { to: '/about' } }] }
  ];
  const hasShopButton: Ref<boolean> = ref(false);

  return {
    navItems,
    footerNavItems,
    hasShopButton
  };
});
