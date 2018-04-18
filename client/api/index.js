import axios from 'axios';

//import { apiPrefix } from '../../etc/config.json';

export default {
    listMenu() {
        return axios.get(`http://localhost:3005/menu`);
    },

    createMenu(data) {
        return axios.post(`http://localhost:3005/menu`, data);
    },

    deleteMenu(menuId) {
        return axios.delete(`http://localhost:3005/menu/${menuId}`);
    }
}
