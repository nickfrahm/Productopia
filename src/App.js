import React from 'react';
import './App.css';
import Nav from './components/Nav.js';
import Pomodoro from './components/Pomodoro.js'

function App() {
  return (
    <div className="App">
      <Nav />
      <Pomodoro />
    </div>
  );
}

export default App;
