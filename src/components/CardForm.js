import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../actions';
import {bindActionCreators} from 'redux';
import {Row, Col, Button, FormGroup} from 'react-bootstrap';
import {Field, reduxForm} from 'redux-form';
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
    cancel: PropTypes.func.isRequired,
    laneId: PropTypes.number.isRequired,
    onSubmit: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    let {handleSubmit, onSubmit, pristine, submitting} = this.props;
    return (
      <form className="card-form" onSubmit={handleSubmit(onSubmit)} style={{marginTop: 0}}>
        <Row>
          <Col sm={12}>
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
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <Button className="pull-left"
                    onClick={this.props.cancel}>Cancel</Button>
            <Button className="pull-right"
                    disabled={pristine || submitting}
                    type="submit">Submit</Button>
          </Col>
        </Row>
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

