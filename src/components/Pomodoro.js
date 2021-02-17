import React, {useState} from 'react'


function Pomodoro() {
  const [workTime, setWorkTime] = useState('25:00');
  const [activeTab, setActiveTab] = useState("work");
  
  function handleWorkBreakClick(e) {
    setActiveTab(e.target.id);
  }

  return (
    <div className="pomodoro">
      <div className="row break-tab-row">
        <p id="work" className={activeTab == "work" ? 'active' : ''} onClick={handleWorkBreakClick}>Work</p>
        <p id="short" className={activeTab == "short" ? 'active' : ''} onClick={handleWorkBreakClick}>Short Break</p>
        <p id="long" className={activeTab == "long" ? 'active' : ''} onClick={handleWorkBreakClick}>Long Break</p>
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