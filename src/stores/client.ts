import { defineStore } from 'pinia';

export const useClientStore = defineStore('client', () => {
  const name = 'Cool Website';
  const logoSrc = '';
  const fbUrl = 'https://www.facebook.com';
  const igUrl = 'https://www.instagram.com';

  const addressLineOne = '123 Sesame St';
  const addressLineTwo = 'Apt 1';
  const cityStateZip = 'New York, NY 10001';
  const phone = '555-555-5555';
  const email = 'test@test.com';

  return {
    addressLineOne,
    addressLineTwo,
    cityStateZip,
    phone,
    email,
    logoSrc,
    fbUrl,
    igUrl,
    name
  };
});
