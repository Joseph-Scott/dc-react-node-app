import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {

    constructor(props) {
        super(props);

        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);

        this.state = {
            user: null
        };
    }

    render() {
        return (
        <div className="login-form">
            {this.state.user ? (
                <div className="user">
                    <span className="username">User: {this.state.user.username}</span>
                    <button onClick={this.logout}>Log Out</button>
                </div>
            ) : (
                <form onSubmit={this.login}>
                    <div className="form-field">
                        <label htmlFor="username">Username:</label>
                        <input name="username" type="text" />
                    </div>
                    <div className="form-field">
                        <label htmlFor="password">Password:</label>
                        <input name="password" type="password" />
                    </div>
                    <button type="submit">Login</button>
                </form>
            )
            }
        </div>
        );
    }

    login = (event) => {
        event.preventDefault();
        axios({
            method: 'post',
            url: '/auth/login',
            data: {
                username: event.target.username.value,
                password: event.target.password.value,
            }
        })
        .then((res) => {
            this.setState({
                user: res.data.user,
            })
            console.log(res);
        })
        .catch((res) => {
            console.log(res);
        });
    }

    logout = () => {
        axios({
            method: 'post',
            url: '/auth/logout'
        })
        .then(() => {
            this.setState({
                user: null,
            })
        })
        .catch((res) => {
            console.log(res);
        });
    }
}

export default Login;
