import axios from 'axios';

//import { apiPrefix } from '../../etc/config.json';

export default {
    listFilm() {
        return axios.get(`http://localhost:3005/films`);
    },

    createFilm(data) {
        return axios.post(`http://localhost:3005/films`, data);
    },

    deleteFilm(filmId) {
        return axios.delete(`http://localhost:3005/films/${filmId}`);
    }
}
