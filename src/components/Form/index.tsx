import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import validate from "../../utils/validation";
import { RootState } from "../../reducers";

import "./Form.css";

type loginPropsTypes = {
  input: object;
  label: string;
  type: string;
};

const loginComponent = ({ input, label, type }: loginPropsTypes) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} />
    </div>
  </div>
);

type FormPropsTypes = {
  click?: any;
  pristine: boolean;
  submitting: boolean;
  reset: any;
  valid: boolean;
  anyTouched: boolean;
  error: string;
  handleSubmit: any;
};

let Form = ({
  click,
  pristine,
  submitting,
  reset,
  valid,
  anyTouched,
  error,
  handleSubmit
}: FormPropsTypes) => {
  return (
    <form
      className="form-card-2"
      onSubmit={handleSubmit((data: object) => console.log(data))}
    >
      <i className="far fa-window-close close" onClick={click}></i>
      <div className="form-row">
        <Field
          label="Login"
          name="login"
          component={loginComponent}
          type="text"
          style={{ width: "110%" }}
        />
        {!valid && anyTouched ? (
          <span style={{ color: "red" }}>{error}</span>
        ) : null}
      </div>
      <div className="form-row">
        <label>Name</label>
        <div>
          <Field name="name" component="input" type="text" />
        </div>
      </div>
      <div className="form-row">
        <label>html_url</label>
        <div>
          <Field name="html_url" component="input" type="text" />
        </div>
      </div>
      <div className="form-row">
        <label>Location</label>
        <div className="form-row">
          <label>
            <Field
              name="location"
              component="input"
              type="radio"
              value="In the NW"
            />
            Somewhere
          </label>
          <label>
            <Field
              name="location"
              component="input"
              type="radio"
              value="other"
            />
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
          <Field name="url" component="textarea" style={{ width: "112%" }} />
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
  );
};
const mapStateToProps = ({ contactGit }: RootState) => {
  return {
    initialValues: contactGit.contact
  };
};

export default connect(mapStateToProps)(
  reduxForm({
    form: "form",
    validate
  })(Form)
);
