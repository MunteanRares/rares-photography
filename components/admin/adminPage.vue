<script setup lang="ts">
import { CONFIG } from "~/src/config";

const state = reactive({ email: "", password: "" });
const isLoggedIn = ref(false);
const isCheckingLoggin = ref(false);

const checkLoggedIn = async () => {
    try {
        const res = await $fetch<{ valid: boolean }>(
            `${CONFIG.API_BASE_URL}admin/verifytoken`,
            {
                credentials: "include",
            }
        );
        isLoggedIn.value = res.valid;
    } catch (err) {
        isLoggedIn.value = false;
    }
};

onMounted(() => {
    checkLoggedIn();
});

const handleSubmit = async () => {
    isCheckingLoggin.value = true;

    try {
        const res = await $fetch<{ success: boolean }>(
            `${CONFIG.API_BASE_URL}admin/loginadmin`,
            {
                method: "POST",
                body: {
                    email: state.email,
                    password: state.password,
                },
                credentials: "include",
            }
        );

        if (res.success) {
            await checkLoggedIn();
        }
    } catch (err) {
        isLoggedIn.value = false;
    } finally {
        isCheckingLoggin.value = false;
    }
};

const handleLogout = async () => {
    try {
        await $fetch<{ success: boolean }>(
            `${CONFIG.API_BASE_URL}admin/logoutadmin`,
            {
                method: "POST",
                credentials: "include",
            }
        );
    } catch {}
    isLoggedIn.value = false;
};
</script>

<template>
    <section class="adminpage-section">
        <div class="adminpage-div card">
            <h1 class="adminpage-title">CONTROL PANEL</h1>

            <form v-if="!isLoggedIn" @submit.prevent="handleSubmit">
                <div class="form-item">
                    <label for="email">Email</label>
                    <input id="email" v-model="state.email" type="email" />
                </div>

                <div class="form-item">
                    <label for="password">Password</label>
                    <input
                        id="password"
                        v-model="state.password"
                        type="password"
                    />
                </div>

                <div class="submit-div">
                    <button type="submit">Submit</button>
                    <p class="loading" v-show="isCheckingLoggin">Loading...</p>
                </div>
            </form>

            <div v-else class="logged-in-div">
                <p>You are logged in!</p>
                <div class="button-div">
                    <button @click="handleLogout">Logout</button>
                    <button @click="goToCreateAlbumPage">Create Album</button>
                    <button @click="">Add Photos</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
@use "/assets/styles/adminpage.scss";
</style>
