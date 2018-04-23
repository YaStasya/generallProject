import React from 'react';

export default class FormRegistr extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                userName    : '',
                email       : '',
                password    : ''
            }
        };

        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleUserAdd = this.handleUserAdd.bind(this);
    }
    handleUserNameChange(event){
        this.setState({userName:event.target.value})
    };
    handleEmailChange(event){
        this.setState({email:event.target.value})
    };
    handlePasswordChange(event){
        this.setState({password:event.target.value})
    };
    handleUserAdd(event){
        const newUser = {
            userName: this.state.userName,
            email: this.state.email,
            password: this.state.password
        };

        this.props.onUserAdd(newUser);
        this.setState({userName:'',email:'',password:''});
    };
    render(){
        return (
            <div>
                    <div className="form-group">
                        <input type="text" name="userName" placeholder="User Name" onChange={this.handleUserNameChange} value={this.state.userName}/>
                        <input type="text" name="email" placeholder="Email" onChange={this.handleEmailChange} value={this.state.email}/>
                        <input type="password" name="password" placeholder="Пароль" onChange={this.handlePasswordChange} value={this.state.password}/>
                    </div>
                    <button onClick={this.handleUserAdd}>Зарегистрироваться</button>
            </div>

        )
    }
};