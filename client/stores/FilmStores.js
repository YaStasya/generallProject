import { EventEmitter } from 'events';

import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstantsFilm';

const CHANGE_EVENT = 'change';

let _film = [];
let _loadingError = null;
let _isLoading = true;

function formatFilm(film) {
    return {
        id          : film._id,
        title       : film.title,
        decrition   : film.decrition,
        urlTitle    : film.urlTitle,
        directedBy  : film.directedBy,
        country     : film.country,
        genre       : film.genre,
        roles       : film.roles,
        img         : film.img,
        time        : film.time,
        createdAt: film.createdAt
    };
}

const TasksStore1 = Object.assign({}, EventEmitter.prototype, {
    isLoading() {
        return _isLoading;
    },

    getFilm() {
        return _film;
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function(action) {
    switch(action.type) {
        case AppConstants.LOAD_FILM_REQUEST: {
            _isLoading = true;

            TasksStore1.emitChange();
            break;
        }

        case AppConstants.LOAD_FILM_SUCCESS: {
            _isLoading = false;
            _film = action.film.map( formatFilm );
            _loadingError = null;

            TasksStore1.emitChange();
            break;
        }

        case AppConstants.LOAD_FILM_FAIL: {
            _loadingError = action.error;

            TasksStore1.emitChange();
            break;
        }

        default: {
            console.log('No such handler');
        }
    }
});

export default TasksStore1;