import React, {useState} from 'react'
import Timer from './Timer'


function Pomodoro() {
  const [activeTab, setActiveTab] = useState("work");
  const [timerOnOff, setTimerOnOff] = useState(false);
  
  function handleWorkBreakClick(e) {
    setActiveTab(e.target.id);
  }

  return (
    <div className="pomodoro">
      <div className="row break-tab-row">
        <p id="work" className={activeTab == "work" ? 'active' : 'inactive'} onClick={handleWorkBreakClick}>Work</p>
        <p id="short" className={activeTab == "short" ? 'active' : 'inactive'} onClick={handleWorkBreakClick}>Short Break</p>
        <p id="long" className={activeTab == "long" ? 'active' : 'inactive'} onClick={handleWorkBreakClick}>Long Break</p>
      </div>
      <div className="row timer-row">
        <Timer activeTab={activeTab} isOn={timerOnOff} />
      </div>
      <div className="row start-stop-row">
        <p style={{backgroundColor: '#81c784'}}>Start</p>
        <p style={{backgroundColor: '#e57373'}}>Stop</p>
        <p style={{backgroundColor: '#fff176'}}>Reset</p>
        <p style={{backgroundColor: '#e0e0e0'}}>Settings</p> 
      </div>
    </div>
  );
}

export default Pomodoro;