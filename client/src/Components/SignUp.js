import React, { Component } from 'react'
import { connect } from 'react-redux'

import { signup } from '../redux/authorization'
import InfoForm from './InfoForm'

class SignUp extends Component {
    signUpSubmit = (user) => {
        this.props.signup(user, this.props.history)
    }

    render() {
        return (
            <div>
                <InfoForm submit={this.signUpSubmit} />
            </div>
        )
    }
}

export default connect(null, { signup })(SignUp);
