import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

import validate from '../../utils/formValidate'

import './Form.css'

const login = ({
    input,
    label,
    type
}) => (
        <div>
            <label>{label}</label>
            <div>
                <input {...input} type={type} />
            </div>
        </div>
    )

let Form = props => {

    const { handleSubmit, pristine, reset, submitting } = props

    return (
        <form className="form-card-2" onSubmit={handleSubmit(data => console.log(data))}>
            <i className="far fa-window-close close" onClick={props.click}></i>
            <div className="form-row">
                <Field
                    label='Login'
                    name="login"
                    component={login}
                    type="text"
                    style={{ width: '110%' }}
                />
                {!props.valid && props.anyTouched
                    ? <span style={{ color: 'red' }}>{props.error}</span>
                    : null}
            </div>
            <div className="form-row">
                <label>Name</label>
                <div>
                    <Field
                        name="name"
                        component="input"
                        type="text"
                    />
                </div>
            </div>
            <div className="form-row">
                <label>html_url</label>
                <div>
                    <Field
                        name="html_url"
                        component="input"
                        type="text"
                    />
                </div>
            </div>
            <div className="form-row">
                <label>Location</label>
                <div className="form-row">
                    <label>
                        <Field name="location" component="input" type="radio" value="In the NW" />
                        Somewhere
                    </label>
                    <label>
                        <Field name="location" component="input" type="radio" value="other" />
                        Other
                    </label>
                </div>
            </div>
            <div className="form-row">
                <label>Type</label>
                <div>
                    <Field name="type" component="select">
                        <option>Admin</option>
                        <option>User</option>
                    </Field>
                </div>
            </div>
            <div className="form-row">
                <label htmlFor="employed">Employed</label>
                <div>
                    <Field
                        name="employed"
                        id="employed"
                        component="input"
                        type="checkbox"
                    />
                </div>
            </div>
            <div className="form-row">
                <label>URL API</label>
                <div>
                    <Field name="url" component="textarea" style={{ width: '112%' }} />
                </div>
            </div>
            <div className="form-row">
                <button type="submit" disabled={pristine || submitting}>
                    Submit
                </button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                    Clear Values
                </button>
            </div>
        </form>
    )
}
const mapStateToProps = ({ contactGit }) => {
    return {
        initialValues: contactGit.contact,
    }
}

Form = reduxForm({
    form: 'form',
    validate
})(Form)


export default connect(mapStateToProps)(Form)