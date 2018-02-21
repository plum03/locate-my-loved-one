import React, { Component } from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import { verifyUser, editUser, deleteUser } from '../redux/authorization'

import InfoForm from '../Components/InfoForm'

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditing: false
        }
    }

    toggleEdit = () => {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    editProfile = (user) => {
        let userID = this.props.userState.auth.data._id
        this.props.editUser(user, userID)
        this.toggleEdit()
    }

    render() {
        let props = this.props.userState.auth.data
        let { firstName, lastName, comment } = props
        if(this.state.isEditing) {
            return (
                <div>
                    <InfoForm {...props} submit={this.editProfile} option={{toggle: this.toggleEdit}}/>
                    <button onClick={this.toggleEdit}>Return to Profile</button>
                </div>
            )
        }
        if(!this.state.isEditing) {
            return (
                <div>
                    <button onClick={this.toggleEdit} >Edit Profile</button>
                    <button onClick={this.props.deleteUser}>Delete Account</button>
                    <h1>Hello {firstName} {lastName}</h1>
                    <p>Your current status: {comment}</p>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        userState: state
    }
}

export default withRouter(connect(mapStateToProps, { verifyUser, editUser, deleteUser })(Profile))