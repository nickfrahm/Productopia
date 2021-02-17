import React, {useState} from 'react'

function Timer(activeTab, isOn) {
    const [time, setTime] = useState()

    return (
      <div className="timer">
        25:00
      </div>
    );
  }
  
  export default Timer;