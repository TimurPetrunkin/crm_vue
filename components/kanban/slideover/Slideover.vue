<template>
  <div>
    <USlideover v-model="isLocalOpen">
      <UCard
        class="flex flex-col flex-1 overflow-y-auto"
        :ui="{
          body: { base: 'flex-1' },
          ring: '',
          divide: 'divide-y divide-border',
        }"
      >
        <template #header>
          <Top />
        </template>
        <Comments />
      </UCard>
    </USlideover>
  </div>
</template>

<script setup lang="ts">
import Comments from './Comments.vue';
import Top from './Top.vue';
const store = useDealSlideStore();

const isLocalOpen = computed({
  get: () => store.isOpen,
  set: value => {
    store.isOpen = value;
  },
});
</script>

<style scoped></style>
