import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {DragSource} from 'react-dnd';
import _ from 'lodash';

const cardSource = {
  beginDrag(props) {
    console.log(props)
    return {
      id: props.card.id,
    }
  },

  isDragging(props, monitor) {
    console.log(monitor.getItem().id, _.parseInt(props.card.id));
    return monitor.getItem().id === props.card.id;
  },

  endDrag(props, monitor) {
    const {transitionCardToLane} = props;
    const {id}                   = monitor.getItem();
    const dropResult             = monitor.getDropResult();

    if (dropResult && dropResult.hasOwnProperty('laneId')) {
      return transitionCardToLane({laneId: dropResult.laneId, cardId: id})
    }

  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    foobar: monitor.getItem(),
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
      <article className={`card ${isDragging ? 'card--is-dragging' : ''}`}>
        <time className="card__time">{moment(createdAt).format('MM/DD/YYYY h:mm A')}</time>
        <h1 className="card__title">{title}</h1>
        <p className="card__description">{description}</p>
      </article>
    );
  }
}

export default DragSource('CARD', cardSource, collect)(Card);

