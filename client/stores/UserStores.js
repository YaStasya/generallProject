import { EventEmitter } from 'events';

import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstantsUser';

const CHANGE_EVENT = 'change';

let _user = [];
let _status = [];
let _loadingError = null;
let _isLoading = true;

function formatUser(user) {
    return {
        id: user._id,
        userName: user.userName,
        email: user.email,
        password: user.password,
        createdAt: user.createdAt
    };
}

const TasksStore2 = Object.assign({}, EventEmitter.prototype, {
    isLoading() {
        return _isLoading;
    },

    getUser() {
        return _user;
    },
    getStatus() {
        return _status;
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
        case AppConstants.LOAD_USER_REQUEST: {
            _isLoading = true;

            TasksStore2.emitChange();
            break;
        }

        case AppConstants.LOAD_USER_SUCCESS: {
            _isLoading = false;
            _user = action.user.map( formatUser );
            _loadingError = null;
            _status = action.status;

            TasksStore2.emitChange();
            break;
        }

        case AppConstants.LOAD_USER_FAIL: {
            _loadingError = action.error;

            TasksStore2.emitChange();
            break;
        }

        default: {
            console.log('No such handler');
        }
    }
});

export default TasksStore2;