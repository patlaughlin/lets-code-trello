import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../actions';
import {bindActionCreators} from 'redux';
import {Button, FormGroup} from 'react-bootstrap';
import {Field, reduxForm, getFormValues} from 'redux-form';
import PropTypes from 'prop-types';
import Input from '../components/Input';

const validate = values => {
  let errors = {};
  if (!values.title) {
    errors.title = 'Required';
  }
  return errors;
}

class CardForm extends Component {
  static propTypes = {
    laneId: PropTypes.number.isRequired,
    onSubmit: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    let {handleSubmit, onSubmit} = this.props;
    return (
      <form onSubmit={handleSubmit(onSubmit)} style={{marginTop: 0}}>
        <FormGroup>
          <Field
            type="text"
            component={Input}
            name="title"
            label="Title"
          />

          <Field
            type="textarea"
            componentClass="textarea"
            component={Input}
            name="description"
            label="Description"
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </form>
    );
  }
}

CardForm = reduxForm({
  form: 'CardForm',
  validate
})(CardForm);

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(null, mapDispatchToProps)(CardForm);

