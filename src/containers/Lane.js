import React, {Component} from 'react';
import Card from '../components/Card';

const laneStyle = {
  gridColumn: '1/3',
  gridRow: '1'
}

class App extends Component {
  render() {
    return (
      <div style={laneStyle}>
        <h1>Lane Title</h1>
        {[1, 2, 3, 4, 5].map((card, i) => {
          return <Card key={i}/>
        })}
      </div>
    );
  }
}

export default App;
