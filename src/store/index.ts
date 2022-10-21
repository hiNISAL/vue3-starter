import { defineStore } from 'pinia';

const appStore = defineStore('app', {
  state: () => {
    return {
      storeData: 'storeData',
    };
  },
});

export default appStore;
