import React from 'react';
import logo from './imgAssets/GRF_logo_2.png';
// import logo from './logo.svg';
import './App.css';
import MyNewComponent from './components/MyNewComponent';
import HomeComponent from './components/Home'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyNewComponent />
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
