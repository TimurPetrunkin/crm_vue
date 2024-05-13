<script lang="ts" setup>
import Loader from '@/components/layout/Loader.vue';
import SideBar from '@/components/layout/SideBar/SideBar.vue';
import { useAuthStore } from '@/stores/auth.store';
import { useIsLoadingStore } from '@/stores/loading.store';
import { account } from '@/utils/appwrite';

const isLoadingStore = useIsLoadingStore();
const authStore = useAuthStore();
const router = useRouter();

onMounted(async () => {
  try {
		isLoadingStore.set(true);
    const user = await account.get();
    if (user) authStore.set(user);
  } catch (error) {
    router.push('/login');
  } finally {
    isLoadingStore.set(false);
  }
});
</script>

<template>
  <Loader v-if="isLoadingStore.isLoading" />
  <section v-else :class="{ grid: authStore.isAuth }" style="min-height: 100vh">
    <SideBar v-if="authStore.isAuth" />
    <div>
      <slot />
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 6fr;
}
</style>
