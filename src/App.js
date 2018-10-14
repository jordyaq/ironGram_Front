import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';
import NavBar from './components/NavBar/nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Routes/>
      </div>
    );
  }
}

export default App;
