import React, {useState, useEffect} from 'react'
import Timer from './Timer'
import Settings from './Settings'

function Pomodoro() {
  const [activeTab, setActiveTab] = useState("work");
  const [timerOn, setTimerOn] = useState(false);
  const [resetTime, setResetTime] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [pomodoroTimes, setPomodoroTimes] = useState([1500000,300000,1200000])

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
    setTimerOn(false);
    setResetTime(!resetTime);
  }

  function handleSettingsClick() {
    setShowSettings(!showSettings);
  }

  function changeTimeSettings(newSettings) {
    setPomodoroTimes(newSettings);
  }

  return (
    <div className="pomodoro">
      <div className="row break-tab-row">
        <p id="work" className={activeTab == "work" ? 'active' : 'inactive'} onClick={handleWorkBreakClick}>Work</p>
        <p id="short" className={activeTab == "short" ? 'active' : 'inactive'} onClick={handleWorkBreakClick}>Short Break</p>
        <p id="long" className={activeTab == "long" ? 'active' : 'inactive'} onClick={handleWorkBreakClick}>Long Break</p>
      </div>
      <div className="row timer-row">
        <Timer 
          timerOn={timerOn} 
          resetTime={resetTime} 
          onReset={setResetTime}
          activeTab={activeTab} 
          activeTabTime={activeTab === "work" ? pomodoroTimes[0] : activeTab === "short" ? pomodoroTimes[1] : pomodoroTimes[2]} 
          pomoTimes={pomodoroTimes}
        />
      </div>
      <div className="row start-stop-row">
        <p style={{backgroundColor: '#81c784'}} onClick={handleTimerStart}>Start</p>
        <p style={{backgroundColor: '#e57373'}} onClick={handleTimerStop}>Stop</p>
        <p style={{backgroundColor: '#fff176'}} onClick={handleReset}>Reset</p>
        <p style={{backgroundColor: '#e0e0e0'}} onClick={handleSettingsClick}>Settings</p> 
      </div>
      
      <div className={showSettings == true ? 'showMask' : 'hideMask'}
           onClick={handleSettingsClick}>
      </div>
      <div  className={showSettings == true ? "settings showSettings" : "settings hideSettings"}>
        <Settings 
          setShowSettings={setShowSettings}
          changeTimeSettings={changeTimeSettings}
          pomodoroTimes={pomodoroTimes}
        />
      </div>
      
    </div>
  );
}

export default Pomodoro;