import AppDispatcherUser from '../dispatcher/AppDispatcherUser';
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
        AppDispatcherUser.dispatch({
            type: Constants.LOAD_USER_REQUEST
        });

        api.listUser()
            .then(({ data, status }) =>
                AppDispatcherUser.dispatch({
                    type: Constants.LOAD_USER_SUCCESS,
                    user: data,
                    status: status
                })
            )
            .catch(err =>
                AppDispatcherUser.dispatch({
                    type: Constants.LOAD_USER_FAIL,
                    error: err
                })
            );
    },

    loginUser(user) {
        AppDispatcherUser.dispatch({
            type: Constants.LOAD_USER_REQUEST
        });

        api.findUser(user)
            .then(({status}) =>
                AppDispatcherUser.dispatch({
                    type: Constants.LOAD_USER_SUCCESS_2,
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
        AppDispatcherUser.dispatch({
            type: Constants.LOAD_USER_REQUEST
        });

        api.logout()
            .then(({status })=>
                AppDispatcherUser.dispatch({
                    type: Constants.LOAD_USER_SUCCESS,
                    user: '',
                    status: status
                })
            )
            .catch(err =>
                console.log(err)
            );
    }

};

export default UserActions;
