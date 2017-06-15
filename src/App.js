import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar
          iconElementLeft={<img alt='Opinion Lab' src={logo} />}
          iconElementRight={<IconButton iconClassName='material-icons md-24' tooltip='Account' tooltipPosition='bottom-left'>account_box</IconButton>}
          iconStyleLeft={{marginTop: '18px'}}
          style={{backgroundColor: '#1A1A1A'}} />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <RaisedButton label='Default' />
      </div>
    );
  }
}

export default App;
