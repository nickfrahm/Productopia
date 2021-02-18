import React, {useState, useEffect} from 'react'

function Timer(props) {
    const [seconds, setSeconds] = useState(props.timerLength);

    useEffect(() => {
        setSeconds(props.timerLength);
    },[props.timerLength]);

    useEffect(() => {
        let interval = null;
        if (props.timerOn && seconds > 0) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds - 1000);
            }, 1000);
        } else if (seconds < 0) {
            clearInterval(interval)
        }
        return () => clearInterval(interval);
    }, [props.timerOn, seconds]);

    function convertToReadableTime(time) {
        let minutes = 0;
        let secs = time/1000;

        while (secs - 59 > 0) {
            secs -= 60;
            minutes++;
        }

        return (minutes < 10 ? '0' + minutes : minutes) + ":" + (secs < 10 ? '0' + secs : secs);
    }

    return (
      <div className="timer">
        {convertToReadableTime(seconds)}
      </div>
    );
  }
  
  export default Timer;