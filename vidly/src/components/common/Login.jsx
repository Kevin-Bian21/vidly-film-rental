import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Joi from "joi-browser";
import { join } from 'lodash';

class Login extends Component {

    state= {
        account : {
            username : '',
            password : ''
        },
        errors : { }
    }

    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate();
        console.log(errors);
        this.setState({ errors : errors || {} });

        if (errors)
            return;
        console.log("submitted");
    }

    schema = {
        username : Joi.string().required().label('Usename'),
        password : Joi.string().required().label('Password')
    }

    validate = () => {
        const options = { abortEarly : false }; //遇到错误不用提前终止
        const result = Joi.validate(this.state.account, this.schema, options);
        if (!result.error)
            return null;

        const errors = {};
        for (let item of result.error.details)
            errors[item.path[0]] = item.message;
        return errors;
    }

    validateProperty = ({ name, value }) => {
        const obj = { [name] : value };
        const schema = { [name] : this.schema[name]};
        Joi.validate(obj, schema );
        const { error } = Joi.validate(obj, schema);
        return error ? null : error.details[0].message;
    }

    //当输入框中的内容发生改变时就会触发该方法
    handleChange = e => {
        console.log(e)
        const account = {...this.state.account};
        account[e.currentTarget.name] = e.currentTarget.value;  // 通过input框中的 name 属性获取当前具体输入的标签然后将其赋值给state
        this.setState({account })
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username">Username</label>
                        <input value={this.state.account.username} onChange={this.handleChange} name='username' autoFocus id='username' type="text" className="form-control" />
                        {  this.state.errors.username && <div className='alert alert-danger'>{this.state.errors.username}</div> }
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">Password</label>
                        <input value={this.state.account.password} onChange={this.handleChange} name='password' id='password' type="password" className="form-control" />
                        {  this.state.errors.password && <div className='alert alert-danger'>{this.state.errors.password}</div> }
                    </div>
                    <button disabled={this.validate()} type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}

export default Login;