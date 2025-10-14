<script lang="ts" setup>
import { CONFIG } from "~/src/config";

const state = reactive({
    number: "",
    firstTitle: "",
    secondTitle: "",
    description: "",
});

const handleSubmit = async () => {
    try {
        const response = await $fetch<{ sucess: boolean }>(
            `${CONFIG.API_BASE_URL}albums/addnew`
        );
    } catch {}
};
</script>

<template>
    <section class="adminpage-section">
        <div class="adminpage-div card">
            <h1 class="adminpage-title">Create Album</h1>
            <form action="" @submit.prevent="handleSubmit">
                <div class="form-item">
                    <label for="number">Number (e.g '01', '02')</label>
                    <input
                        id="number"
                        v-model="state.number"
                        pattern="\d*"
                        type="text"
                        placeholder="00"
                        maxlength="2"
                    />
                </div>

                <div class="form-item">
                    <label for="first-title">First Title</label>
                    <input
                        id="first-title"
                        v-model="state.firstTitle"
                        type="text"
                        placeholder="Autofest"
                    />
                </div>

                <div class="form-item">
                    <label for="second-title">Second Title</label>
                    <input
                        id="second-title"
                        v-model="state.secondTitle"
                        type="text"
                        placeholder="Bucharest"
                    />
                </div>

                <div class="form-item">
                    <label for="description">Description</label>
                    <input
                        id="description"
                        v-model="state.description"
                        type="text"
                        placeholder="Type your description here..."
                    />
                </div>

                <div class="submit-div">
                    <button @click.prevent="goToControlPanel">Back</button>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use "/assets/styles/adminpage.scss";
</style>
