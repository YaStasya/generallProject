import axios from 'axios';

//import { apiPrefix } from '../../etc/config.json';

export default {
    listOrder(data) {
        return axios.post(`http://localhost:3005/orderShow`, data);
    },

    createOrder(data) {
        return axios.post(`http://localhost:3005/order`, data);
    }
}