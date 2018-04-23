import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/AppConstantsUser';

import api from '../api/indexUser';
import UserStore from "../stores/UserStores";

function getStateFromFlux(){
    return {
        isLoading: UserStore.isLoading(),
        user: UserStore.getUser(),
        status: UserStore.getStatus()
    }
}
const UserActions = {
    loadUser() {
        AppDispatcher.dispatch({
            type: Constants.LOAD_USER_REQUEST
        });

        api.listUser()
            .then(({ data, status }) =>
                AppDispatcher.dispatch({
                    type: Constants.LOAD_USER_SUCCESS,
                    user: data,
                    status: status
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
            .then(({status}) =>
                AppDispatcher.dispatch({
                    type: Constants.LOAD_USER_SUCCESS,
                    status: status
                })
            )
            .catch(err =>
                console.log(err)
            );
    },

    createUser(user) {
        api.createUser(user)
            .then(() =>
                this.loadUser()
            )
            .catch(err =>
                console.log(err)
            );
    },

    logoutUser(user) {
        AppDispatcher.dispatch({
            type: Constants.LOAD_USER_REQUEST
        });

        api.logout()
            .then(({status })=>
                AppDispatcher.dispatch({
                    type: Constants.LOAD_USER_SUCCESS,
                    user: '',
                    status: status
                })
            )
            .catch(err =>
                console.log(err)
            );
    },
    profileUser(user) {
        AppDispatcher.dispatch({
            type: Constants.LOAD_USER_REQUEST
        });

        api.profileUser()
            .then(({ data, status }) =>
                AppDispatcher.dispatch({
                    type: Constants.LOAD_USER_SUCCESS,
                    user: data,
                    status: status
                })
            )
            .catch(err =>
                AppDispatcher.dispatch({
                    type: Constants.LOAD_USER_FAIL,
                    error: err
                })
            );
    },
};

export default UserActions;
