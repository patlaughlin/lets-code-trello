import React, {Component} from 'react';

const cardStyle = {
  color: 'red',
  outline: '1px solid red'
}

class App extends Component {
  render() {
    return (
      <div style={cardStyle}>
        <h1>Card</h1>
      </div>
    );
  }
}

export default App;
