import React, { Component } from 'react';
import Navigator from './components/Navbar'

class App extends Component {
  render() {
    return (
      <div>
        <Navigator/>
          {this.props.children}
      </div>
    );
  }
}

export default App;
