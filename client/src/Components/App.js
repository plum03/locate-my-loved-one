import React, { Component } from 'react'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { verifyUser } from '../redux/authorization'

// Components import
import Navbar from './Navbar'
import Profile from './Profile'
// import InfoForm from './InfoForm'
import Search from './Search'
import Login from './Login'
import SignUp from './SignUp'
import Protected from './Protected' 


class App extends Component {

    componentDidMount() {
        console.log('app props=', this.props);
        this.props.verifyUser();
    }

    render() {
        const { isAuthenticated, loading } = this.props.auth
        let style = { backgroundColor: 'white' }

        return (
            loading ? 
                <div>
                    <Navbar />
                </div>
                :
                <div className='app-wrapper' style={style}>
                    <Navbar />
                    <Switch>
                        <Route exact path ="/" component={Search} />

                        <Route path="/login" render={(props) => {
                            return isAuthenticated ?
                            <Redirect to="/profile" />
                            :
                            <Login {...props} />
                        }} />

                        <Protected path="/profile" component={Profile} />

                        <Route path='/signup' component={SignUp} />
                        <Route path='/login' component={Login} />
                    </Switch>
                </div>
        )
    }
}


const mapStateToProps = (state) => {
    return state
}

export default withRouter(connect(mapStateToProps, { verifyUser })(App))
