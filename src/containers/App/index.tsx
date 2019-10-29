import React, { useEffect } from 'react'
import { Switch, Route, Redirect } from "react-router-dom"
import { connect } from 'react-redux'

import MainPage from '../MainPage'
import RegistrationForm from '../RegistrationForm'
import ProfilePage from '../ProfilePage'
import ContactsPage from '../ContactsPage'
import ContactCard from '../../components/ContactCard'
import PrivateRouter from '../../components/PrivateRouter'
import { autnFromLs } from '../../actions'
import { routes } from '../../router'
import Header from '../../components/header/index'

const App = props => {

    useEffect(() => {
        const isUserInfo = localStorage.getItem('userKey')
        if (isUserInfo) {
            props.autnFromLs(JSON.parse(isUserInfo))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {
                props.logged && props.userInfo
                    ? <Header userInfo={props.userInfo} />
                    : null
            }
            <Switch>
                <PrivateRouter exact path={routes.index} component={MainPage} />
                <PrivateRouter path={routes.profile} component={ProfilePage} />
                <PrivateRouter path={routes.contactsDetail} component={ContactCard} />
                <PrivateRouter path={routes.contacts} component={ContactsPage} />
                <Route path={routes.login} component={RegistrationForm} />
                <Redirect to={routes.index} />
            </Switch>
        </>
    )
}


const mapStateToProps = ({ loginReducer }) => {
    return {
        logged: loginReducer.logged,
        userInfo: loginReducer.userInfo
    }
}

const mapDispatchToProps = {
    autnFromLs
}

export default connect(mapStateToProps, mapDispatchToProps)(App)