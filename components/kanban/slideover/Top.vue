<template>
  <div class="border-border bg-black/20 rounded p-3">
    <div class="uppercase bold text-xl mb-4">О сделке</div>
    <Label label-text="Name">
      <h2>{{ store.card?.name }}</h2></Label
    >
    <Label label-text="Price">
      {{ convertCurrency(store.card?.price || 0) }}</Label
    >
    <Label label-text="Status"
      >	<UiBadge variant="outline"> {{ store.card?.status }}</UiBadge></Label
    >
    <Label label-text="Client">
      {{ store.card?.companyName }}
    </Label>
		<Label label-text="Date">
      {{ dayjs(store.card?.$createdAt).format('DD MMMM YYYY') }}</Label
    </Label>
  </div>
</template>

<script setup lang="ts">
import Label from '@/components/kanban/slideover/Label.vue';
import { useDealSlideStore } from '@/stores/deal-slide.store';
import dayjs from 'dayjs';
const store = useDealSlideStore();
</script>
