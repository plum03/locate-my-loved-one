import React, { Component } from 'react'
import { connect } from 'react-redux'

import { signup } from '../redux/authorization'
import Authform from './AuthForm'

class SignUp extends Component {
    signUpSubmit = (user) => {
        this.props.signup(user)
    }

    render() {
        return (
            <div>
                <Authform submit={this.signUpSubmit} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { signup })(SignUp);
