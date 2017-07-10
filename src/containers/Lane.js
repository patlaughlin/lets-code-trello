import React, {Component} from 'react';
import {Col, Row, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../actions';
import Card from '../components/Card';

class Lane extends Component {
  render() {
    const {cards, addCard, laneId} = this.props;
    return (
      <Col sm={4}>
        <div className="lane">
          <Row>
            <Col sm={10}>
              <h1 className="lane__title">Lane Title</h1>
            </Col>
            <Col sm={2}>
              <Button className="pull-right glyphicon glyphicon-plus"
                      onClick={_ => addCard({laneId})}></Button>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              {cards.filter(card => {
                return card.laneId === laneId
              }).map((card, i) => {
                return <Card key={i}/>;
              })}
            </Col>
          </Row>
        </div>
      </Col>
    );
  }
}

const mapStateToProps = state => ({
  cards: state.cardReducer.cards
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Lane);

