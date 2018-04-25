import { EventEmitter } from 'events';

import AppDispatcherUserPr from '../dispatcher/AppDispatcherUserPr';
import AppConstantsUsPr from '../constants/AppConstantsUserPr';

const CHANGE_EVENT = 'change';

let _userF = [];
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

const TasksStore5 = Object.assign({}, EventEmitter.prototype, {
    isLoading() {
        return _isLoading;
    },

    getUserF() {
        return _userF;
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

AppDispatcherUserPr.register(function(action) {
    switch(action.type) {
        case AppConstantsUsPr.LOAD_USERPR_REQUEST: {
            _isLoading = true;

            TasksStore5.emitChange();
            break;
        }

        case AppConstantsUsPr.LOAD_USERPR_SUCCESS: {
            _isLoading = false;
            _userF = action.userF.map( formatUser );
            _loadingError = null;
            _status = action.status;

            TasksStore5.emitChange();
            break;
        }

        case AppConstantsUsPr.LOAD_USERPR_FAIL: {
            _loadingError = action.error;

            TasksStore5.emitChange();
            break;
        }

        default: {
            console.log('No such handler');
        }
    }
});

export default TasksStore5;