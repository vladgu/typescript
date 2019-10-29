import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

import Loader from '../Loader'
import Form from '../Form'
import { requestContactSuccess, getContact } from '../../actions'

import './contactCard.css'

let Card = props => {
    useEffect(() => {
        if (props.contactsList.length) {
            props.requestContactSuccess(props.contactsList.find(obj => obj.login === props.match.params.name))
        } else {
            props.getContact(props.match.params.name)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [clicked, onClickHandler] = useState(false)

    return (
        <div className='card-box-2'>
            {
                !props.isFetching && props.contact
                    ? <div className="page-card-2">
                        <i className="fas fa-edit edit-styles" onClick={() => onClickHandler(!clicked)} />
                        <h1 className="user-name center">{props.match.params.name}</h1>
                        <img src={props.contact.avatar_url} alt="USER_PHOTO" className="user-photo center" />
                        <p><span className="text">Link: </span>{props.contact.html_url}</p>
                    </div>
                    : <Loader />
            }
            {
                clicked
                    ? ReactDOM.createPortal(
                        <Form click={() => onClickHandler(!clicked)} name={props.match.params.name} />,
                        document.getElementById('portal')
                    )
                    : null
            }
        </div>
    )
}

const mapStateToProps = ({ contactsReducer, contactGit }) => {
    return {
        contactsList: contactsReducer.contactsList,
        contact: contactGit.contact,
        isFetching: contactGit.isFetching
    }
}

const mapDispatchToProps = {
    requestContactSuccess, getContact
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)