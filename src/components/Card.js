import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import CardForm from './CardForm';
import PropTypes from 'prop-types';
import moment from 'moment';
import {DragSource} from 'react-dnd';

const cardSource = {
  beginDrag(props) {
    const {card} = props;
    return {
      id: card.id,
      laneId: card.laneId
    }
  },

  isDragging(props, monitor) {
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
    editCard: PropTypes.func.isRequired,
    removeCard: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      isHovering: false
    }
  }

  submitEditCard = values => {
    const {editCard, card: {id}} = this.props;
    const {title, description}   = values;
    editCard({
      id,
      title,
      description
    })
    this.setState({isEditing: false});
  }


  render() {
    const {
            card: {id, title, laneId, description, transitionedAt},
            removeCard,
            connectDragSource,
            isDragging
          }                       = this.props;
    const {isEditing, isHovering} = this.state;

    return connectDragSource(
      <article className={`card ${isDragging && 'card--is-dragging'} ${isHovering && 'card--is-hovering'}`}
               onMouseEnter={_ => this.setState({isHovering: true})}
               onMouseLeave={_ => this.setState({isHovering: false})}>
        {(!isEditing && isHovering) &&
        <Button className="pull-right glyphicon glyphicon-pencil"
                onClick={_ => this.setState({isEditing: true})}></Button>
        }

        {!isEditing &&
        <div>
          <h1 className="card__title">{title}</h1>
          <p className="card__description">{description}</p>
          {transitionedAt &&
          <p className="card__time">moved at:&nbsp;
            <time>{moment(transitionedAt).format('MM/DD/YYYY h:mm A')}</time>
          </p>
          }
        </div>
        }

        {isEditing &&
        <Button className="remove-card pull-right glyphicon glyphicon-remove"
                onClick={_ => removeCard({id})}></Button>
        }

        {isEditing &&
        <CardForm
          onSubmit={this.submitEditCard}
          cancel={_ => this.setState({isEditing: false})}
          laneId={laneId}/>
        }
      </article>
    );
  }
}

export default DragSource('CARD', cardSource, collect)(Card);

