import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/AppConstantsOrder';

import api from '../api/indexOrder';

const OrderActions = {
    loadOrder(email) {
        AppDispatcher.dispatch({
            type: Constants.LOAD_ORDER_REQUEST
        });

        api.listOrder(email)
            .then(({ data }) =>
                AppDispatcher.dispatch({
                    type: Constants.LOAD_ORDER_SUCCESS,
                    order: data
                })
            )
            .catch(err =>
                AppDispatcher.dispatch({
                    type: Constants.LOAD_ORDER_FAIL,
                    error: err
                })
            );
    },

    createOrder(order) {
        api.createOrder(order)
            .then(() =>
                this.loadOrder()
            )
            .catch(err =>
                console.error(err)
            );
    }
};

export default OrderActions;
