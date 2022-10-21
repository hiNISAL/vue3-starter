<script setup lang="ts">
// import { ref } from 'vue';
import useStore from '@/store';
import api from '@/api';

api.test();

defineProps<{ msg: string }>();

const store = useStore();
</script>

<template>
  <div>{{ store.storeData }}</div>
</template>
