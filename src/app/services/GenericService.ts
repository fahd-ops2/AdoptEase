import { apiClient } from './apiClient';

// Use environment variable for the API URL
const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL;

class GenericService<T> {
    private apiUrl: string;

    constructor(endpoint: string) {
        // Combine base URL with the endpoint
        this.apiUrl = `${BASE_API_URL}${endpoint}`;
    }

    // Get all data
    async getAll(): Promise<T[]> {
        const response = await apiClient.get(this.apiUrl);
        return response.json();
    }

    // Get data by ID
    async getById(id: number | string): Promise<T> {
        const response = await apiClient.get(`${this.apiUrl}/${id}`);
        return response.json();
    }

    // Add new data
    async add(data: T): Promise<T> {
        const response = await apiClient.post(this.apiUrl, data);
        return response.json();
    }

    // Update data by ID
    async update(id: number | string, data: T): Promise<T> {
        const response = await apiClient.put(`${this.apiUrl}/${id}`, data);
        return response.json();
    }

    // Delete data by ID
    async delete(id: number | string): Promise<void> {
        await apiClient.delete(`${this.apiUrl}/${id}`);
    }
}

export default GenericService;
