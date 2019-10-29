import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import './contactPageCard.css'

const PageCard = props => {

    const goToCard = () => {
        props.history.push('/contacts/' + props.login.toLowerCase())
    }

    return (
        <div className="page-card" onClick={goToCard}>
            <h3>{props.login}</h3>
            <img src={props.avatar_url} alt="USER_PHOTO" className="user-photo center" />
            <p><span className="text">Link: </span>{props.html_url}</p>
        </div>
    )
}

const mapStateToProps = ({ contactsReducer }) => {
    return {
        contactsList: contactsReducer.contactsList
    }
}

export default connect(mapStateToProps)(withRouter(PageCard))