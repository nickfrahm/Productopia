import React, {useState, useEffect} from 'react'
import Timer from './Timer'

function Pomodoro() {
  const [activeTab, setActiveTab] = useState("work");
  const [timerOn, setTimerOn] = useState(false);
  const [timerLength, setTimerLength] = useState(2000);

  function handleWorkBreakClick(e) {
    setActiveTab(e.target.id);
  }

  function handleTimerStart() {
    setTimerOn(true);
  }

  function handleTimerStop() {
    setTimerOn(false);
  }

  function handleReset() {
    setTimerLength(60000);
  }

  function handleTimerChange(newLength) {
    setTimerLength(newLength);
  }
  return (
    <div className="pomodoro">
      <div className="row break-tab-row">
        <p id="work" className={activeTab == "work" ? 'active' : 'inactive'} onClick={handleWorkBreakClick}>Work</p>
        <p id="short" className={activeTab == "short" ? 'active' : 'inactive'} onClick={handleWorkBreakClick}>Short Break</p>
        <p id="long" className={activeTab == "long" ? 'active' : 'inactive'} onClick={handleWorkBreakClick}>Long Break</p>
      </div>
      <div className="row timer-row">
        <Timer timerOn={timerOn} timerLength={timerLength} handleChange={handleTimerChange} />
      </div>
      <div className="row start-stop-row">
        <p style={{backgroundColor: '#81c784'}} onClick={handleTimerStart}>Start</p>
        <p style={{backgroundColor: '#e57373'}} onClick={handleTimerStop}>Stop</p>
        <p style={{backgroundColor: '#fff176'}} onClick={handleReset}>Reset</p>
        <p style={{backgroundColor: '#e0e0e0'}}>Settings</p> 
      </div>
    </div>
  );
}

export default Pomodoro;