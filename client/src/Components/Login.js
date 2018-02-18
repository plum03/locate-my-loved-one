import React, { Component } from 'react'
import {connect} from 'react-redux'
import { login } from '../redux/authorization'

import '../CSS/Login.css'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                email: '',
                password: ''
            }
        }
    }

    clearInputs = () => {
        this.setState({
            inputs: {
                email: '',
                password: ''
            }
        })
    }
    
    handleChange = (e) => {
        let {name, value} = e.target;
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state.inputs, this.props.history);
        this.clearInputs();
    }

    render() {
        let { email, password } = this.state.inputs;
        return (
            <div>
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" name="email" value={email} placeholder="Email address"/>
                    <input onChange={this.handleChange} type="password" name="password" value={password} placeholder="Password"/>
                    <button className="login-submit" type="submit">submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { login })(Login);