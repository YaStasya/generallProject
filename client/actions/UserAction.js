import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/AppConstantsUser';

import api from '../api/indexUser';

const UserActions = {
    loadUser() {
        AppDispatcher.dispatch({
            type: Constants.LOAD_USER_REQUEST
        });

        api.listUser()
            .then(({ data }) =>
                AppDispatcher.dispatch({
                    type: Constants.LOAD_USER_SUCCESS,
                    user: data
                })
            )
            .catch(err =>
                AppDispatcher.dispatch({
                    type: Constants.LOAD_USER_FAIL,
                    error: err
                })
            );
    },

    loginUser(user) {
        AppDispatcher.dispatch({
            type: Constants.LOAD_USER_REQUEST
        });

        api.findUser(user)
            .then(() =>
                this.loadUser()
            )
            .catch(err =>
                console.error(err)
            );
    },

    createUser(user) {
        api.createUser(user)
            .then(() =>
                this.loadUser()
            )
            .catch(err =>
                console.error(err)
            );
    }

};

export default UserActions;
