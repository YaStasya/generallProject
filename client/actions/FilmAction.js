import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/AppConstantsFilm';

import api from '../api/indexFilm';

const FilmActions = {
    loadFilm() {
        AppDispatcher.dispatch({
            type: Constants.LOAD_FILM_REQUEST
        });

        api.listFilm()
            .then(({ data }) =>
                AppDispatcher.dispatch({
                    type: Constants.LOAD_FILM_SUCCESS,
                    film: data
                })
            )
            .catch(err =>
                AppDispatcher.dispatch({
                    type: Constants.LOAD_FILM_FAIL,
                    error: err
                })
            );
    },

    createFilm(film) {
        api.createFilm(film)
            .then(() =>
                this.loadFilm()
            )
            .catch(err =>
                console.error(err)
            );
    },

    deleteFilm(title) {
        api.deleteFilm(title)
            .then(() =>
                this.loadFilm()
            )
            .catch(err =>
                console.error(err)
            );
    }
};

export default FilmActions;
