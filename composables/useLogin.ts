import { CONFIG } from "~/src/config";

export const checkLoggedIn = async () => {
    try {
        const res = await $fetch<{ valid: boolean }>(
            `${CONFIG.API_BASE_URL}admin/verifytoken`,
            {
                credentials: "include",
            }
        );
        return res.valid;
    } catch (err) {
        return false;
    }
};

export const login = async (email: string, password: string) => {
    const res = await $fetch<{ success: boolean }>(
        `${CONFIG.API_BASE_URL}admin/loginadmin`,
        {
            method: "POST",
            body: {
                email: email,
                password: password,
            },
            credentials: "include",
        }
    );

    return res.success;
};

export const logout = async () => {
    await $fetch<{ success: boolean }>(
        `${CONFIG.API_BASE_URL}admin/logoutadmin`,
        {
            method: "POST",
            credentials: "include",
        }
    );
};
