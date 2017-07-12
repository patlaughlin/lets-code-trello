import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {DropTarget} from 'react-dnd';
import {Col, Row, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../actions';
import moment from 'moment';
import CardForm from '../components/CardForm';
import Card from '../components/Card';
import _ from 'lodash';

const laneTarget = {
  drop(props) {
    return {
      laneId: props.laneId
    }
  },
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    card: monitor.getItem(),
    isOver: monitor.isOver()
  };
}

class Lane extends Component {
  static propTypes = {
    laneTitle: PropTypes.string.isRequired,
    laneId: PropTypes.number.isRequired,
    addCard: PropTypes.func,
    cards: PropTypes.array,
  }

  constructor(props) {
    super(props);
    this.state = {
      isEditingNewCard: false
    }
  }

  submitEditNewCard = cardValues => {
    const {addCard, laneId}    = this.props;
    const {title, description} = cardValues;
    addCard({
      laneId,
      createdAt: moment(),
      title,
      description
    })
    this.setState({isEditingNewCard: false});
  }


  render() {
    const {
            cards,
            laneId,
            editCard,
            removeCard,
            laneTitle, card,
            transitionCardToLane,
            connectDropTarget,
            isOver
          } = this.props;

    return connectDropTarget(
      <div>
        <Col sm={4}>
          <div className="lane">
            <Row className="lane__title-bar">
              <Col sm={10}>
                <h1 className="lane__title">{laneTitle}</h1>
              </Col>
              <Col sm={2}>
                <Button className="pull-right glyphicon glyphicon-plus"
                        onClick={_ => this.setState({isEditingNewCard: true})}></Button>
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                {(isOver && _.parseInt(card.laneId) !== _.parseInt(laneId)) &&
                <div className="drag-placeholder">&nbsp;</div>
                }
                {this.state.isEditingNewCard &&
                <CardForm
                  onSubmit={this.submitEditNewCard}
                  cancel={_ => this.setState({isEditingNewCard: false})}
                  laneId={laneId}/>
                }
                {cards.filter(card => {
                  return card.laneId === laneId
                }).map((card, i) => {
                  return <Card editCard={editCard}
                               removeCard={removeCard}
                               key={i}
                               card={card}
                               transitionCardToLane={transitionCardToLane}/>;
                })}
              </Col>
            </Row>
          </div>
        </Col>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  cards: state.cardReducer.cards
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

Lane = DropTarget('CARD', laneTarget, collect)(Lane);

export default connect(mapStateToProps, mapDispatchToProps)(Lane);

