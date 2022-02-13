import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Login extends Component {

    handleSubmit = e => {
        e.preventDefault();
        console.log("submitted");
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username">Username</label>
                        <input autoFocus id='username' type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">Password</label>
                        <input id='password' type="password" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}

export default Login;