<script lang="ts" setup>
import Menu from '@/components/layout/SideBar/Menu/Menu.vue';
import { useAuthStore } from '@/stores/auth.store';
import { useIsLoadingStore } from '@/stores/loading.store';

const authStore = useAuthStore();
const isLoadingStore = useIsLoadingStore();
const router = useRouter();

const logout = async () => {
  isLoadingStore.set(true);
  await account.deleteSession('current');
  authStore.clear()
  await router.push('/login');
  isLoadingStore.set(false);
};
</script>

<template>
  <aside class="px-5 py-8 bg-sidebar h-full relative w-full">
    <NuxtLink to="/" class="mb-10 block">
      <NuxtImg src="/logo.png" alt="" width="140px" class="mx-auto" />
    </NuxtLink>
    <button
      class="absolute top-2 right-5 transition-colors hover:text-primary"
      @click="logout"
    >
      <Icon name="line-md:logout" size="20px" />
    </button>
    <Menu />
  </aside>
</template>

