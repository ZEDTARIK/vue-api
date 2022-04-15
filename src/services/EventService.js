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
    getvents() {
        return apiClient.get("/events");
    },
    getEvent(id) {
        return apiClient.get(`/events/${id}`);
    }
}