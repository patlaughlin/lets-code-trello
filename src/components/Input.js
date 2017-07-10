import React, {Component} from 'react';
import {FormControl} from 'react-bootstrap';
import ErrorLabel from '../components/ErrorLabel';

export default class Input extends Component {

  render() {
    let {type, required, input, componentClass, label, styles, classes, meta: {touched, error, warning}} = this.props;
    return (
      <div className={`form-group ${classes}`}>
        <FormControl
          {...input}
          required={required}
          placeholder={label}
          type={type}
          componentClass={componentClass}
          className={`form-control ${touched && error && 'warning'}`}
          style={styles}/>

        <ErrorLabel
          touched={touched}
          error={error}
          warning={warning}
        />
      </div>
    );
  }
}

