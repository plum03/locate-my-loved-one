import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
import { verifyUser } from '../redux/authorization'

import InfoForm from '../Components/InfoForm'

class Profile extends Component {

    render() {
        return (
            <div>
                <InfoForm />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default withRouter(connect(mapStateToProps, { verifyUser })(Profile))