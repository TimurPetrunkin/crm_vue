<script setup lang="ts">
import { cn } from '@/utils';
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
  class?: HTMLAttributes['class'];
}>();
</script>

<template>
  <div
    :class="
      cn('flex flex-col space-y-1.5 p-3', props.class)
    "
  >
    <slot />
  </div>
</template>
