import React from 'react'
import { NavLink } from 'react-router-dom'
import { routes } from '../../router';
import './header.css'
import { connect } from 'react-redux'
import { logout } from '../../actions'

const header = props => (
    <header>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink exact to={routes.index} className='nav-link' activeClassName="active">Main</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to={routes.profile} className='nav-link' activeClassName="active">Profile</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={routes.contacts} className='nav-link' activeClassName="active">Contacts</NavLink>
                    </li>
                    <li className="nav-item nav-link" >
                        <img className="avatar" src={props.userInfo.photo} alt="USER_AVATAR" title="Logout" onClick={props.logout} />
                    </li>
                </ul>
            </div>
        </nav>
    </header>
)


const mapDispatchToProps = {
    logout
}

export default connect(null, mapDispatchToProps)(header)