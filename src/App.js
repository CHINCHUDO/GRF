import React from 'react';
import logo from './imgAssets/GRF_logo_2.png';
// import logo from './logo.svg';
import './App.css';
import HomeComponent from './components/HomeComponent';
import GRFTitle from './components/GRFTitleComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GRFTitle />
        <img src={logo} className="App-logo" alt="logo" />
        <HomeComponent />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
