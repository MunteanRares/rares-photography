import { CONFIG } from "~/src/config";

export const addAlbum = async (formData: FormData) => {
    const res = await $fetch<{ success: boolean }>(
        `${CONFIG.API_BASE_URL}albums/addnew`,
        {
            method: "POST",
            body: formData,
            credentials: "include",
        }
    );

    return res.success;
};

export const getAlbums = () => {
    const {
        data: albums,
        pending,
        error,
    } = useAsyncData<Album[]>("albums", () =>
        $fetch(`${CONFIG.API_BASE_URL}albums`)
    );

    return { albums, pending, error };
};
