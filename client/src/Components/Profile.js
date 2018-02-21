import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
import { verifyUser, editUser, deleteUser } from '../redux/authorization'

import InfoForm from '../Components/InfoForm'

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditing: false
        }
    }
    componentDidMount(){
        console.log(this.props.userState.auth.data._id)
       let userID = this.props.userState.auth.data._id
    }
   toggleEdit = () => {
       this.setState({
           isEditing: !this.state.isEditing
       })
   }

   editProfile = (user) => {
    console.log(this.props.userState.auth.data._id)
    let userID = this.props.userState.auth.data._id
       console.log(user)
        this.props.editUser(user, userID)
   }

   deleteUser = () => {
    console.log(this.props.userState.auth.data._id)
    let userID = this.props.userState.auth.data._id
       this.props.deleteUser(userID)
   }

    render() {
        console.log(this.props.userState.auth.data)
        let props = this.props.userState.auth.data
        let { firstName, lastName, email, city, state, comment, _id } = props

        if(this.state.isEditing) {
            return (
                <div>
                    <InfoForm {...props} submit={this.editProfile} option={{toggle: this.toggleEdit}}/>
                    <button onClick={this.toggleEdit} >Discard Changes and Return to Profile</button>
                </div>
            )
        }
        if(!this.state.isEditing) {
            return (
                <div>
                    <button onClick={this.toggleEdit} >Edit Profile</button>
                    <button onClick={this.deleteUser}>Delete Account</button>
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