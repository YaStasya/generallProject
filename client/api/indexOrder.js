import axios from 'axios';

//import { apiPrefix } from '../../etc/config.json';

export default {
    listOrder() {
        return axios.get(`http://localhost:3005/order`);
    },

    createOrder(data) {
        return axios.post(`http://localhost:3005/order`, data);
    }
}