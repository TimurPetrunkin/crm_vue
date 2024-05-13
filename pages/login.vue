<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { v4 as uuid } from 'uuid';
useHead({
  title: 'Login | CRM System',
});
const emailRef = ref('');
const passwordRef = ref('');
const nameRef = ref('');

const isLoadingStore = useIsLoadingStore();
const authStore = useAuthStore();
const router = useRouter();

const login = async () => {
  try {
    isLoadingStore.set(true);
    await account.createEmailPasswordSession(emailRef.value, passwordRef.value);
    const response = await account.get();
    if (response) {
      authStore.set({
        name: response.name,
        email: response.email,
        status: response.status,
      });
    }
    emailRef.value = '';
    passwordRef.value = '';
    nameRef.value = '';
    await router.push('/');
  } catch (error) {
    await router.push('/login');
  } finally {
    isLoadingStore.set(false);
  }
};

const register = async () => {
  await account.create(
    uuid(),
    emailRef.value,
    passwordRef.value,
    nameRef.value
  );
  await login();
};
</script>

<template>
  <div class="flex items-center justify-center min-h-screen w-full">
    <div class="rounded bg-sidebar w-1/4 p-5">
      <h1 class="font-bold text-2xl text-center mb-5">Login</h1>
      <form action="">
        <Input
          placeholder="Email"
          type="email"
          class="mb-3"
          v-model="emailRef"
        />
        <Input
          placeholder="Password"
          type="password"
          class="mb-3"
          v-model="passwordRef"
        />
        <Input placeholder="Name" type="text" class="mb-3" v-model="nameRef" />
        <div class="flex items-center justify-center gap-5">
          <Button type="button" @click="login">Login</Button>
          <Button type="button" @click="register">Register</Button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
