import React, {useState, useEffect} from 'react';

const Settings = (props) => {
    const [workTime, setWorkTime] = useState();
    const [shortTime, setShortTime] = useState();
    const [longTime, setLongTime] = useState();
    const [error, setError] = useState(true);

    useEffect(() => {
        if (isNaN(workTime) || isNaN(shortTime) || isNaN(longTime) || workTime == "" || shortTime == "" || longTime == "") {
            setError(true);
        } else {
            setError(false);
        }
    }, [shortTime, workTime, longTime]);

    function handleSave() {
        if (error == false) {
            props.changeTimeSettings([workTime, shortTime, longTime]);
            handleClose();
        } else {
            alert("Please make sure you entered whole numbers in each box.");
        }
        /*return (setError(true)); removed because it was giving a false positive*/
    }
    
    function handleClose() {
        if (!error) props.setShowSettings(false);
        else alert("Please make sure you entered whole numbers in each box.");
    }

    return (
        <div id='settings'>
            <div className="settingsHeader">
                <h2 className="header-text">Pomodoro Settings</h2>
                <span className="header-text" id="cancelX">X</span>
            </div>
            <div className="settingsForm">
                <input 
                    className="txt-timeSetting" 
                    id="work" 
                    placeholder="Work Time (minutes)"
                    onChange={e => setWorkTime(parseInt(e.target.value)*60000)}
                >

                </input>
                <input 
                    className="txt-timeSetting" 
                    id="short" 
                    placeholder="Short Break (minutes)"
                    onChange={e => setShortTime(parseInt(e.target.value)*60000)}
                >    
                </input>
                <input 
                    className="txt-timeSetting" 
                    id="long"
                    placeholder="Long Break (minutes)"
                    onChange={e => setLongTime(parseInt(e.target.value)*60000)} 
                >
                </input>
            </div>
            <div className="settingsFooter">
                <button className="btn-saveSettings" type="button" onClick={handleSave}>Save</button>
                <button className="btn-closeSettings" type="button" onClick={handleClose}>Close</button>
            </div>
        </div>
    );
}

export default Settings;