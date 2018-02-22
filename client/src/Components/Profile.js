import React, { Component } from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import { verifyUser, editUser, deleteUser } from '../redux/authorization'

import InfoForm from '../Components/InfoForm'

import '../CSS/Profile.css'

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
gu
    render() {
        let props = this.props.userState.auth.data
        let { firstName, lastName, comment } = props
        if(this.state.isEditing) {
            return (
                <div className="profile-wrapper">
                    <h2 className="edit-profile-h2">Edit Profile</h2>
                    <button className="return-to-profile" onClick={this.toggleEdit}>Return to Profile</button>
                    <InfoForm edit {...props} submit={this.editProfile} option={{toggle: this.toggleEdit}}/>
                </div>
            )
        }
        if(!this.state.isEditing) {
            return (
                <div className="profile-wrapper">
                    <button className="profile-btn" onClick={this.toggleEdit} >Edit Profile</button>
                    <button className="profile-btn" onClick={this.props.deleteUser}>Delete Account</button>
                    <h1 className="hello">Hello, {firstName} {lastName}</h1>
                    <p className="status">Your current status: {comment}</p>
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
