import React from 'react'


function Pomodoro() {
  return (
    <div className="pomodoro">
      <div className="row break-tab-row">
        <p>Work</p>
        <p>Short Break</p>
        <p>Long Break</p>
      </div>
      <div className="row timer-row">
        <p>time</p>
      </div>
      <div className="row start-stop-row">
        <p>Start</p>
        <p>Stop</p>
        <p>Reset</p>
        <p>Settings</p>
      </div>
    </div>
  );
}

export default Pomodoro;