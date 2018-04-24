import React from 'react';
import { Link } from 'react-router-dom';

export default class FormAuth extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                email    : '',
                password    : '',
            }
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleUserLogin = this.handleUserLogin.bind(this);
    }
    handleEmailChange(event){
        this.setState({email:event.target.value})
    };
    handlePasswordChange(event){
        this.setState({password:event.target.value})
    };
    handleUserLogin(event){
        const user = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.onUserLogin(user);
    };
    render(){
       // const style = { display: display };
        return (
            <div >
                <div>
                    <div className="form-group" >
                        <input type="text" placeholder="Email" onChange={this.handleEmailChange} value={this.state.email} />
                        <input type="password" placeholder="Password" onChange={this.handlePasswordChange} value={this.state.password}/>
                    </div>
                    <button  onClick={this.handleUserLogin}>Вход</button>
                </div>
                <div className="infoUser"><p>Если у Вас нет аккаунта, то <Link to="/registration">зарегистрируйтесь</Link>.</p></div>
            </div>

        )
    }
};