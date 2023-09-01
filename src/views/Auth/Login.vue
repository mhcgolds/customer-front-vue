<template>
    <!-- template taken(and simplified) from: https://tailwind-elements.com/docs/standard/forms/login-form/#v-3 -->
    <section class="h-screen">
        <div class="container h-full px-6 py-24">
            <div class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                <!-- Left column container with background-->
                <div class="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                    <img
                    src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                    class="w-full"
                    alt="Phone image" />
                </div>

                <!-- Right column container with form -->
                <div class="md:w-8/12 lg:ml-6 lg:w-5/12">
                    <form ref="form" v-on:submit.prevent="doAuth($event)">
                        <!-- Email input -->
                        <div class="relative mb-6" data-te-input-wrapper-init>
                            <input
                            type="text"
                            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="login-email"
                            :placeholder="t('auth.login.email-input')"
                            required="required" />
                            <label
                            for="login-email"
                            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            >{{ t('auth.login.email-input') }}
                            </label>
                        </div>

                        <!-- Password input -->
                        <div class="relative mb-6" data-te-input-wrapper-init>
                            <input
                            type="password"
                            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="login-password"
                            :placeholder="t('auth.login.password-input')"
                            required="required" />
                            <label
                            for="login-password"
                            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            >{{ t('auth.login.password-input') }}
                            </label>
                        </div>

                        <!-- Submit button -->
                        <button
                            type="submit"
                            class="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            Sign in
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { getI18n } from '../../app/i18n';
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/app/store'
import { useRouter } from 'vue-router'
import axios from 'axios'

let router;

export default {
    name: 'AuthLogin',
    props: {
        router: null
    },
    methods: {
        doAuth: ($event) => {
             // TODO: Change url to env variable
            axios.post('http://127.0.0.1:8081/api/sanctum/token', { 
                email: $event.target.querySelector('#login-email').value,
                password: $event.target.querySelector('#login-password').value,
                token_name: 'front-vue'
            })
            .then(data => {
                const store = useAuthStore();
                const { token, isAuthenticated } = storeToRefs(store);
                store.token = data.data;
                store.isAuthenticated = true;
                router.push('/');
            });
        }
    },
    setup() {
        router = useRouter();
        return getI18n();
    }
  }
</script>