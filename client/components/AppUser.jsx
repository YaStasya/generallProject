import React from 'react';

import UserActions from '../actions/UserAction.js';
import UserStore from "../stores/UserStores";

import FormAuth from './FormAuth.jsx';
import FormRegistr from './Registration.jsx';
import User from './AllUser.jsx';

function getStateFromFlux(){
    return {
        isLoading: UserStore.isLoading(),
        user: UserStore.getUser()
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
    }
    render(){
        return (
            <div className="AppAuth">
                <FormAuth  onUserLogin={this.handleUserLogin}/>
                <FormRegistr  onUserAdd={this.handleUserAdd}/>
                <User user={this.state.user}/>
            </div>
        )
    }
    _onChange(){
        this.setState(getStateFromFlux());
    }
};
