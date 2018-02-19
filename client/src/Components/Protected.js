import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

class Protected extends Component {

    render() {

        const { isAuthenticated } = this.props.auth
        const Component = this.props.component;
        const path = this.props.path;
        console.log(isAuthenticated);

        // if(isAuthenticated) {     return this.props.children }  else {     return
        // null } function mapStateToProps(state, ownProps) {     console.log(state)
        // console.log(this.state)     return {         isAuthenticated:
        // state.user.isAuthenticated,         currentURL: ownProps.location.pathname
        //    } }
        return (
            isAuthenticated
                ? <Route
                    path={path}
                    component={Component} />
                : <Redirect to="/" />
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, {})(Protected);

