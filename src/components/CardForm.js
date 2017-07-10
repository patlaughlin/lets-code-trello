import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../actions';
import {bindActionCreators} from 'redux';
import {Button} from 'react-bootstrap';
import {Field, reduxForm, getFormValues} from 'redux-form';
import Input from '../components/Input';

const validate = values => {
  let errors = {};
  if (!values.title) {
    errors.title = 'Required';
  }
  return errors;
}

class CardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    let {handleSubmit, onSubmit} = this.props;
    return (
      <form onSubmit={handleSubmit(onSubmit)} style={{marginTop: 0}}>
        <Field
          type="text"
          component={Input}
          name="title"
          label="Title"
        />

        <Field
          type="textarea"
          component={Input}
          name="description"
          label="Description"
        />
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

