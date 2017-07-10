import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import moment from 'moment';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const {card: {title, description, createdAt}} = this.props;
    return (
      <div>
        <time>{moment(createdAt).format('MM/DD/YYYY')}</time>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    );
  }
}

export default Card;
