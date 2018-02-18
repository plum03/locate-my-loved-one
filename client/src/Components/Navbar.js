import React, { Component } from 'react'
import {logout} from "../redux/authorization"
import {connect} from "react-redux"
import {Link} from "react-router-dom"

import '../CSS/Navbar.css';

//Links are still not reflecting whether user is logged in or out - only showing signup/login links

class Nav extends Component {
   
    render() {
        const isAuthenticated = this.props.auth.isAuthenticated
        console.log('navbar props', this.props)
        return (
            <div className="nav-wrapper" >
                <Link className="nav-links" to="/">Home</Link>
                <div className="nav-right">
                    {isAuthenticated ? null : <div><Link className="nav-links" to="/signup">Sign Up</Link></div>}
                    {isAuthenticated ? null : <div><Link className="nav-links" to="/login">Log In</Link></div>}
                    {isAuthenticated ? <div><Link className="nav-links" to="/profile">Profile</Link></div> : null}
                    {isAuthenticated ? <div><button onClick={this.props.logout}>Log Out</button></div> : null}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, {logout})(Nav)