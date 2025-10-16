import { CONFIG } from "~/src/config";

export const addPhotosToAlbum = async (formData: FormData) => {
    const res = await $fetch<{ success: boolean }>(
        `${CONFIG.API_BASE_URL}photos/addPhotos`,
        {
            method: "POST",
            body: formData,
            credentials: "include",
        }
    );

    return res.success;
};
