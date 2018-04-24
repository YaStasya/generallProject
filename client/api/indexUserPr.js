import axios from 'axios';

export default {
    profileUser(data) {
        return axios.post(`http://localhost:3005/profile`, data)
    },
}