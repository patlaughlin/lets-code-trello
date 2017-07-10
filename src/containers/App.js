import React, {Component} from 'react';
import {Grid, Row} from 'react-bootstrap';
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
            {[1, 2, 3].map((el, i) => {
              return <Lane key={i} laneId={i}/>
            })}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
