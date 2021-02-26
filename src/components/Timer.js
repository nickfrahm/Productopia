import React, {useState, useEffect} from 'react'

function Timer(props) {
    const [seconds, setSeconds] = useState(props.activeTabTime);
    
    /*Use Effect for reset to set to active tab time default*/
    useEffect(() => {
        setSeconds(props.activeTabTime);
    }, [props.resetTime, props.activeTab, props.pomoTimes]);

    /*Use Effect for timer countdown*/
    useEffect(() => {
        let interval = null;
        if (props.timerOn && seconds > 0) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds - 1000);
            }, 1000);
        } else if (seconds < 0) {
            clearInterval(interval)
            props.timerOn = false;
        }
        return () => clearInterval(interval);
    }, [props.timerOn, seconds]);

    function convertToReadableTime(time) {
        let mins = 0;
        let secs = time/1000;

        while (secs - 59 > 0) {
            secs -= 60;
            mins++;
        }

        return (mins < 10 ? '0' + mins : mins) + ":" + (secs < 10 ? '0' + secs : secs);
    }

    return (
      <div className="timer">
        {convertToReadableTime(seconds)}
      </div>
    );
  }
  
  export default Timer;