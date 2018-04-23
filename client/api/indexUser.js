import axios from 'axios';

export default {
    listUser() {
       return axios.get(`http://localhost:3005/user`)
    },
    findUser(data) {
        return axios.post(`http://localhost:3005/user`, data)
    },
    createUser(data) {
        return axios.post(`http://localhost:3005/user`, data);
    },
    logout() {
        return axios.get(`http://localhost:3005/logout`);
    },
    profileUser(data) {
        return axios.get(`http://localhost:3005/profile`, data)
    },
}