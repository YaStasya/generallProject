import React from 'react';

import UserActions from '../actions/UserAction.js';
import UserStore from "../stores/UserStores";

import FormAuth from './FormAuth.jsx';
import FormRegistr from './Registration.jsx';
import User from './AllUser.jsx';

import { BrowserRouter, Link, Route } from 'react-router-dom';

function getStateFromFlux(){
    return {
        isLoading: UserStore.isLoading(),
        user: UserStore.getUser(),
        status: UserStore.getStatus()
    }
}


export default class AppAuth extends React.Component {
    constructor(props) {
        super(props);

        this._onChange = this._onChange.bind(this);
        this.state = getStateFromFlux();
    }
    componentWillMount() {
        UserActions.loadUser();
    };

    componentDidMount() {
        UserStore.addChangeListener(this._onChange);
    };

    componentWillUnmount() {
        UserStore.removeChangeListener(this._onChange);
    };

    handleUserAdd(userData) {
        UserActions.createUser(userData);
    }
    handleUserLogin(userData) {
        UserActions.loginUser(userData);
        location.reload();
    }
    handleUserLogout(userData) {
        UserActions.logoutUser();
        location.reload();
    }
/*<FormRegistr onUserAdd={this.handleUserAdd}/>*/
    render(){
        if(this.state.status == '200'){
            return (
                <div className="AppAuth">
                    <i className="fa fa-user-circle-o"></i>
                    <div className="hiddenBlock">
                            <div>
                                <ul>
                                    <li><Link to="/profile">Мой профиль</Link></li>
                                    <li><a onClick={this.handleUserLogout}>Выход</a></li>
                                </ul>
                                <div>

                                </div>
                            </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="AppAuth">
                    <i className="fa fa-user-circle-o"></i>
                    <div className="hiddenBlock">
                        <FormAuth display={this.state.visibleAuth} onUserLogin={this.handleUserLogin}/>
                        <User user={this.state.user}/>
                    </div>
                </div>
            )
        }

    }
    _onChange(){
        this.setState(getStateFromFlux());
    }
};
