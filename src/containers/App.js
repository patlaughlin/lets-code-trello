import React, {Component} from 'react';
import {Grid, Row} from 'react-bootstrap';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Lane from './Lane';
import Toolbar from './Toolbar';
import '../App.css';


class App extends Component {
  render() {
    return (
      <div>
        <Toolbar/>
        <Grid>
          <Row>
            {['To Do', 'In Progress', 'Done'].map((title, i) => {
              return <Lane laneTitle={title} key={i} laneId={i}/>
            })}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
