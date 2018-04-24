import AppDispatcherUserPr from '../dispatcher/AppDispatcherUserPr';
import Constants from '../constants/AppConstantsUserPr';

import api from '../api/indexUserPr';
import UserProfileStore from "../stores/UserProfileStores";

function getStateFromFlux(){
    return {
        isLoading: UserProfileStore.isLoading(),
        user: UserProfileStore.getUser(),
        status: UserProfileStore.getStatus()
    }
}
const UserPrActions = {
    profileUser(user) {
        AppDispatcherUserPr.dispatch({
            type: Constants.LOAD_USERPR_REQUEST
        });

        api.profileUser()
            .then(({ data, status}) =>
                AppDispatcherUserPr.dispatch({
                    type: Constants.LOAD_USERPR_SUCCESS,
                    userF: data,
                    status: status
                })
            )
            .catch(err =>
                AppDispatcherUserPr.dispatch({
                    type: Constants.LOAD_USERPR_FAIL,
                    error: err
                })
            );
    },
};

export default UserPrActions;
