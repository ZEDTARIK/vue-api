import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://my-json-server.typicode.com/ZEDTARIK/Fake-data",
    withCredentials: false,
    headers: {
        accept: "application/json",
        "Content-Type": "application/json"
    }

});

export default {
    getvents(perPage, page) {
        return apiClient.get('/events?_limit=' + perPage + '&_page=' + page);
    },
    getEvent(id) {
        return apiClient.get('/events/' + id);
    }
}