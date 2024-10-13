export const apiClient = {
    async get(url: string) {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        return response;
    },

    async post(url: string, body: any) {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        return response;
    },

    async put(url: string, body: any) {
        const response = await fetch(url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        return response;
    },

    async delete(url: string) {
        const response = await fetch(url, { method: 'DELETE' });
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        return response;
    },
};
