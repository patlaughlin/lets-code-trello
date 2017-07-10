import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import moment from 'moment';

class Card extends Component {
  static propTypes = {
    card: PropTypes.object.isRequired
  }

  render() {
    const {card: {title, description, createdAt}} = this.props;
    return (
      <article className="card">
        <time className="card__time">{moment(createdAt).format('MM/DD/YYYY h:mm A')}</time>
        <h1 className="card__title">{title}</h1>
        <p className="card__description">{description}</p>
      </article>
    );
  }
}

export default Card;
