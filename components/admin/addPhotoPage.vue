<template>
    <section class="adminpage-section">
        <div class="adminpage-div card">
            <h1 class="adminpage-title">Add Photos</h1>

            <form action="">
                <div class="form-item">
                    <label for=""></label>
                    <input type="text" />
                </div>

                <div class="form-item">
                    <label for=""></label>
                    <input type="text" />
                </div>

                <div class="form-item">
                    <label for="upload">Upload Photos</label>
                    <input
                        id="upload"
                        type="file"
                        multiple
                        accept="image/jpeg, image/jpg, image/png"
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

<script lang="ts" setup></script>

<style scoped lang="scss">
@use "/assets/styles/adminpage.scss";
</style>
