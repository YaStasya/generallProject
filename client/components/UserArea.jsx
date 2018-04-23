import UserStore from "../stores/UserStores";
import React from "react";
import UserActions from "../actions/UserAction";
import OrderHystory from "./UserHystory.jsx";

function getStateFromFlux(){
    return {
        isLoading: UserStore.isLoading(),
        user: UserStore.getUser(),
        status: UserStore.getStatus()
    }
}
export default class UserArea extends React.Component {
    constructor(props) {
        super(props);

        this._onChange = this._onChange.bind(this);
        this.state = getStateFromFlux();

    }
    componentWillMount() {
        UserActions.profileUser();
    };

    componentDidMount() {
        UserStore.addChangeListener(this._onChange);
    };

    componentWillUnmount() {
        UserStore.removeChangeListener(this._onChange);
    };

    /*<FormRegistr onUserAdd={this.handleUserAdd}/>*/
    render(){
        if(this.state.status == '200'){
            return (
                    <div className="AppUser container">
                        <h1>Мой профиль</h1>
                        {this.state.user.map(user =>
                            <div><p>Имя: {user.userName}</p><p>Email: {user.email}</p></div>

                        )
                        }
                        <OrderHystory userEmail={this.state.user.map(user =>user.email)}/>
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