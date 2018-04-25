import UserProfileStore from "../stores/UserProfileStores";
import React from "react";
import UserProfileActions from "../actions/UserPrAction";
import OrderHystory from "./UserHystory.jsx";

function getStateFromFlux(){
    return {
        isLoading: UserProfileStore.isLoading(),
        userF: UserProfileStore.getUserF(),
        status: UserProfileStore.getStatus()
    }
}
export default class UserArea extends React.Component {
    constructor(props) {
        super(props);

        this._onChange = this._onChange.bind(this);
        this.state = getStateFromFlux();

    }
    componentWillMount() {
        UserProfileActions.profileUser();
    };

    componentDidMount() {
        UserProfileStore.addChangeListener(this._onChange);
    };

    componentWillUnmount() {
        UserProfileStore.removeChangeListener(this._onChange);
    };

    /*<FormRegistr onUserAdd={this.handleUserAdd}/>*/
    render(){
        if(this.state.status == '200'){
            return (
                    <div className="AppUser container">
                        <h1>Мой профиль</h1>
                        {this.state.userF.map(userF =>
                            <div><p>Имя: {userF.userName}</p><p>Email: {userF.email}</p></div>

                        )
                        }
                        <OrderHystory userEmail={this.state.userF.map(userF =>userF.email)}/>
                </div>

            )
        } else {
            return (
                <div className="AppUser">
                  <p>К сожалнию, Вы не вошли в свой личный кабинет. </p>
                </div>
            )
        }

    }
    _onChange(){
        this.setState(getStateFromFlux());
    }
};