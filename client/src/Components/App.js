import React, { Component } from 'react'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'

import verifyUser from '../redux/authorization'

// Components import
import Navbar from './Navbar'
// import Profile from './Profile'
// import InfoForm from './InfoForm'
// import Search from './Search'
import Login from './Login'
import SignUp from './SignUp'
// import AuthForm from './AuthForm' 
// What is this, how is it different from Login/SignUp?


class App extends Component {

    componentDidMount() {
        console.log(this.props);
        // this.props.verifyUser()       
    }
    
    render () {
        // const {isAuthenticated} = this.props.auth.isAuthenticated
        let style ={backgroundColor: 'white'}

        return (
            <div className='app-wrapper' style={style}>
                <Navbar />
                <Switch>
                    {/* <Route exact path ="/" component={Search} />

                    <Route path="/login" render={(props) => {
                        return isAuthenticated ?
                        <Redirect to="/profile" />
                        :
                        <Login {...props} />
                    }} /> */}
                    
                    {/* <ProtectedPath path="/profile" component={Profile} /> */}
                    {/* <ProtectedPath path="/edit" component={InfoForm} /> */}
                    
                    <Route path='/signup' component={SignUp}/>
                    <Route path='/login' component={Login}/>
                    {/* What is the function of our AuthForm and where should it go? */}
                </Switch>
               
            </div>
        )
}
}


const mapStateToProps = (state) => {
    return state
}

export default withRouter(connect(mapStateToProps, {verifyUser})(App))
