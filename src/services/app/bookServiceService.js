import axios from 'axios';

class bookServiceService {
    // Define your service methods here
    getAllData() {
        return axios.get('YOUR_API_ENDPOINT');
    }

    getDataById(id) {
        return axios.get(`YOUR_API_ENDPOINT/${id}`);
    }

    addData(data) {
        return axios.post('YOUR_API_ENDPOINT', data);
    }

    updateData(id, data) {
        return axios.put(`YOUR_API_ENDPOINT/${id}`, data);
    }

    deleteData(id) {
        return axios.delete(`YOUR_API_ENDPOINT/${id}`);
    }
}

export default new bookServiceService();
