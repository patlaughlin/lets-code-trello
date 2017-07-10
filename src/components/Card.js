import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import moment from 'moment';
import {DragSource} from 'react-dnd';

const cardSource = {
  beginDrag(props) {
    console.log(props);
    return {
      card: props.card
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class Card extends Component {
  static propTypes = {
    card: PropTypes.object.isRequired,
    isDragging: PropTypes.bool.isRequired,
    connectDragSource: PropTypes.func.isRequired
  }

  render() {
    const {card: {title, description, createdAt}, connectDragSource, isDragging} = this.props;
    return connectDragSource(
      <article className="card">
        <time className="card__time">{moment(createdAt).format('MM/DD/YYYY h:mm A')}</time>
        <h1 className="card__title">{title}</h1>
        <p className="card__description">{description}</p>
      </article>
    );
  }
}

export default DragSource('CARD', cardSource, collect)(Card);

