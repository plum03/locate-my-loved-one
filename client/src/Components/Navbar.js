import React, { Component } from 'react'
import {logout} from "../../redux/authorization"
import {connect} from "react-redux"
import {Link} from "react-router-dom"



class Nav extends Component {
   
    render() {
        
        const isAuthenticated = this.props.user.isAuthenticated
        console.log(isAuthenticated)
        return (
            <div className="nav-wrapper" >
                <Link to="/">Home</Link>
                {isAuthenticated ? null : <div><Link to="/signup">Sign Up</Link></div>}
                {isAuthenticated ? null : <div><Link to="/login">Log In</Link></div>}
                {isAuthenticated ? <div><Link to="/profile">Profile</Link></div> : null}
                {isAuthenticated ? <div><button onClick={this.props.logout}>Log Out</button></div> : null}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, {logout})(Nav)