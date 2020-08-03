import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8000',
});

export default {
    getEvents() {
        return apiClient.get('/events');
    },
    getEvent(id) {
        return apiClient.get('/events/' + id);
    },
};
