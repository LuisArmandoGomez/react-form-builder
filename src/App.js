import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Container from './Container';
import logo from './logo.png';
import './App.css';
import './controls/controls.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar
          iconElementLeft={<img alt='Opinion Lab' src={logo} />}
          iconElementRight={<IconButton iconClassName='material-icons md-24' tooltip='Account' tooltipPosition='bottom-left'>account_box</IconButton>}
          iconStyleLeft={{marginTop: '18px'}}
          style={{backgroundColor: '#0277BD'}}/>
        <Container />
      </div>
    );
  }
}

export default App;
