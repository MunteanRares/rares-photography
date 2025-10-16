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

export const getPhotos = async (albumId: string) => {
    const {
        data: photos,
        pending,
        error,
    } = await useAsyncData<Photo[]>(
        `photos-${albumId}`,
        () => $fetch(`${CONFIG.API_BASE_URL}photos/getPhotos/${albumId}`),
        {
            default: () => [],
        }
    );

    return { photos, pending, error };
};
