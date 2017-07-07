import React, {Component} from 'react';
import Lane from './Lane';
import '../App.css';

const appStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '10px',
  gridAutoRows: 'minmax(100px, auto)'
}

class App extends Component {
  render() {
    return (
      <div style={appStyle}>
        {[1, 2, 3].map((el, i) => {
          return <Lane key={i}/>
        })}
      </div>
    );
  }
}

export default App;
