<script setup lang="ts">
import * as z from "zod";

const state = reactive({ email: "", password: "" });
const schema = z.object({
    email: z.email("invalid Email"),
    password: z
        .string("Password is required")
        .min(8, "Must be 8 characters long"),
});

const handleSubmit = () => {};
</script>

<template>
    <section class="adminpage-section">
        <div class="adminpage-div">
            <h1 class="adminpage-title">CONTROL PANEL</h1>
            <form @submit.prevent="handleSubmit" action="">
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
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
@use "/assets/styles/adminpage.scss";
</style>
