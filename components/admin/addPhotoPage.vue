<script lang="ts" setup>
const { albums, pending, error } = getAlbums();

const state = reactive({
    selectedAlbum: "",
    photos: null as File[] | null,
});

const handleOnSubmit = async () => {
    const formData = new FormData();
    formData.append("selectedAlbum", state.selectedAlbum);
    state.photos?.forEach((photo) => {
        formData.append("thumbnailFiles", photo);
    });

    const response = await addPhotosToAlbum(formData);

    if (response) {
        state.selectedAlbum = "";
    }
};

const handleOnChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    if (target.files) {
        state.photos = Array.from(target.files);
    }
    console.log(state.photos);
};
</script>

<template>
    <section class="adminpage-section">
        <div class="adminpage-div card">
            <h1 class="adminpage-title">Add Photos</h1>

            <form action="" @submit.prevent="handleOnSubmit">
                <div class="form-item">
                    <label for="">Select Album</label>
                    <select
                        id="album"
                        v-model="state.selectedAlbum"
                        class="input-select"
                        required
                    >
                        <option disabled value="">None</option>
                        <option
                            v-for="album in albums"
                            :key="album.thumbnailUrl"
                            :value="album.thumbnailUrl"
                        >
                            {{
                                album.firstTitle +
                                " " +
                                album.secondTitle +
                                " (" +
                                album.number +
                                ")"
                            }}
                        </option>
                    </select>
                </div>

                <div class="form-item">
                    <label for="upload">Upload Photos</label>
                    <input
                        id="upload"
                        type="file"
                        multiple
                        accept="image/jpeg, image/jpg, image/png"
                        required
                        @change="handleOnChange"
                    />
                </div>

                <div class="submit-div">
                    <button @click.prevent="goToControlPanel">back</button>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use "/assets/styles/adminpage.scss";
</style>
