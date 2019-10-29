// http://qaru.site/questions/183141/how-to-implement-authenticated-routes-in-react-router-4
// https://tylermcginnis.com/react-router-protected-routes-authentication/

import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRouter = ({ component: Component, logged, ...rest }) => {
    // console.log('PrivateRouter says: ', logged)
    return < Route {...rest} render={props => {
        if (!logged) return <Redirect to='/login' />
        return <Component {...props} />
    }} />
}

const mapStateToProps = ({ loginReducer }) => {
    return {
        logged: loginReducer.logged
    }
}

export default connect(mapStateToProps)(PrivateRouter)