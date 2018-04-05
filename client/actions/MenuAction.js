import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/AppConstants';

import api from '../api';

const MenuActions = {
    loadMenu() {
        AppDispatcher.dispatch({
            type: Constants.LOAD_MENU_REQUEST
        });

        api.listMenu()
            .then(({ data }) =>
                AppDispatcher.dispatch({
                    type: Constants.LOAD_MENU_SUCCESS,
                    menu: data
                })
            )
            .catch(err =>
                AppDispatcher.dispatch({
                    type: Constants.LOAD_MENU_FAIL,
                    error: err
                })
            );
    },

    createMenu(menu) {
        api.createMenu(menu)
            .then(() =>
                this.loadMenu()
            )
            .catch(err =>
                console.error(err)
            );
    },

    deleteMenu(menuId) {
        api.deleteMenu(menuId)
            .then(() =>
                this.loadMenu()
            )
            .catch(err =>
                console.error(err)
            );
    }
};

export default MenuActions;
