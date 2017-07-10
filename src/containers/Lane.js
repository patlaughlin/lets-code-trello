import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {DropTarget} from 'react-dnd';
import {Col, Row, Button} from 'react-bootstrap';
import {Field} from 'redux-form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../actions';
import moment from 'moment';
import CardForm from '../components/CardForm';
import Card from '../components/Card';

const laneTarget = {
  drop(props) {
    console.log(props)
    return true;
  },
};

function collect(connect, monitor) {
  console.log(connect, monitor);
  return {
    connectDropTarget: connect.dropTarget(),
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
    const {cards, addCard, laneId, laneTitle, connectDropTarget, isOver} = this.props;
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

              {this.state.isEditingNewCard &&
              <CardForm
                onSubmit={this.submitEditNewCard}
                laneId={laneId}/>
              }

              <Col sm={12}>
                {cards.filter(card => {
                  return card.laneId === laneId
                }).map((card, i) => {
                  return <Card key={i} card={card}/>;
                })}
              </Col>
            </Row>
          </div>
        </Col>
      </div>
    );
  }
}

Lane = DropTarget('CARD', laneTarget, collect)(Lane);

const mapStateToProps = state => ({
  cards: state.cardReducer.cards
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Lane);

