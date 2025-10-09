<script setup lang="ts">
const state = reactive({ email: "", password: "" });
const isLoggedIn = ref(false);
const isChecking = ref(false);

const checkLoggedIn = async () => {
    isChecking.value = true;
    console.log(isChecking.value);
    try {
        const res = await $fetch<{ valid: boolean }>(
            "http://localhost:5121/api/admin/verifytoken",
            {
                credentials: "include",
            }
        );
        isLoggedIn.value = res.valid;
    } catch (err) {
        isLoggedIn.value = false;
    } finally {
        isChecking.value = false;
        console.log(isChecking.value);
    }
};

onMounted(() => {
    checkLoggedIn();
});

const handleSubmit = async () => {
    try {
        const res = await $fetch<{ success: boolean }>(
            `http://localhost:5121/api/admin/loginadmin`,
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
        console.error(err);
        isLoggedIn.value = false;
    }
};

const handleLogout = async () => {
    try {
        await $fetch<{ success: boolean }>(
            "http://localhost:5121/api/admin/logoutadmin",
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
        <div class="adminpage-div">
            <h1 class="adminpage-title">CONTROL PANEL</h1>

            <div v-if="isChecking" class="loading">
                <p>Loading...</p>
            </div>

            <form
                v-else-if="!isLoggedIn && !isChecking"
                @submit.prevent="handleSubmit"
                action=""
            >
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

                <button type="submit">Submit</button>
            </form>

            <div v-else class="logged-in-div">
                <p>You are logged in!</p>
                <div class="button-div">
                    <button @click="handleLogout">Logout</button>
                    <button @click="">Create Album</button>
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
