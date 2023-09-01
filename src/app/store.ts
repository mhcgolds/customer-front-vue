import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
    const token = ref<string>('');
    const isAuthenticated = ref<boolean>(false);

    return { token, isAuthenticated }
})