import React from 'react';
import UserActions from "../actions/UserAction";

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
       if(this.state.userName || this.state.email || this.state.password){
           if(this.state.userName == '' || this.state.email == '' || this.state.password == ''){
               alert('Заполните все поля!')
           } else {
               const newUser = {
                   userName: this.state.userName,
                   email: this.state.email,
                   password: this.state.password
               };

               UserActions.createUser(newUser);
               this.setState({userName:'',email:'',password:''});
           }
       } else {
           alert('Заполните все поля!')
       }
    };
    render(){
        return (
            <div className="container registBlock">
                <h1>Регистрация</h1>
                    <div className="form-group">
                        <input type="text" name="userName" placeholder="Имя" onChange={this.handleUserNameChange} value={this.state.userName} requied/>
                        <input type="email" name="email" placeholder="Email" onChange={this.handleEmailChange} value={this.state.email} requied/>
                        <input type="password" name="password" placeholder="Пароль" minlength="6" onChange={this.handlePasswordChange} value={this.state.password} requied/>
                    </div>
                    <button onClick={this.handleUserAdd}>Зарегистрироваться</button>
            </div>

        )
    }
};