<script lang="ts" setup>
import { CONFIG } from "~/src/config";

const fileInputRef = ref<HTMLInputElement | null>(null);

const state = reactive({
    number: "",
    firstTitle: "",
    secondTitle: "",
    description: "",
    thumbnailFile: null as File | null,
});

const handleOnChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    if (target.files) {
        state.thumbnailFile = target.files[0];
    }
};

const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("number", state.number);
    formData.append("firstTitle", state.firstTitle);
    formData.append("secondTitle", state.secondTitle);
    formData.append("description", state.description);
    formData.append("thumbnailFile", state.thumbnailFile!);

    const response = await addAlbum(formData);

    if (response) {
        state.description = "";
        state.firstTitle = "";
        state.secondTitle = "";
        state.number = "";
        state.thumbnailFile = null;

        if (fileInputRef.value) {
            fileInputRef.value.value = "";
        }
    }
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
                        required
                        maxlength="2"
                    />
                </div>

                <div class="form-item">
                    <label for="first-title">First Title</label>
                    <input
                        id="first-title"
                        v-model="state.firstTitle"
                        type="text"
                        required
                        placeholder="Autofest"
                    />
                </div>

                <div class="form-item">
                    <label for="second-title">Second Title</label>
                    <input
                        id="second-title"
                        v-model="state.secondTitle"
                        type="text"
                        required
                        placeholder="Bucharest"
                    />
                </div>

                <div class="form-item">
                    <label for="date">Date</label>
                    <input
                        id="date"
                        v-model="state.description"
                        type="text"
                        required
                        placeholder="APRIL 6, 2024"
                    />
                </div>

                <div class="form-item">
                    <label for="upload">Upload Thumbnail</label>
                    <input
                        id="upload"
                        type="file"
                        ref="fileInputRef"
                        required
                        accept="image/png, image/jpg, image/jpeg"
                        @change="handleOnChange"
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
