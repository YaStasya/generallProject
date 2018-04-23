import { EventEmitter } from 'events';

import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstantsOrder';

const CHANGE_EVENT = 'change';

let _order = [];
let _loadingError = null;
let _isLoading = true;

function formatOrder(order) {
    return {
        id              : order._id,
        email           : order.email,
        id_film         : order.id_film,
        name_film       : order.name_film,
        date            : order.date,
        time            : order.time,
        places          : order.places,
        row             : order.row,
        createdAt   : order.createdAt
    };
}

const TasksStore4 = Object.assign({}, EventEmitter.prototype, {
    isLoading() {
        return _isLoading;
    },

    getOrder() {
        return _order;
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
        case AppConstants.LOAD_ORDER_REQUEST: {
            _isLoading = true;

            TasksStore4.emitChange();
            break;
        }

        case AppConstants.LOAD_ORDER_SUCCESS: {
            _isLoading = false;
            _order = action.order.map( formatOrder );
            _loadingError = null;

            TasksStore4.emitChange();
            break;
        }

        case AppConstants.LOAD_ORDER_FAIL: {
            _loadingError = action.error;

            TasksStore4.emitChange();
            break;
        }

        default: {
            console.log('No such handler');
        }
    }
});

export default TasksStore4;