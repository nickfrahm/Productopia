import React, {useState, useEffect} from 'react';

const Settings = (props) => {
    const [workTime, setWorkTime] = useState(5);
    const [shortTime, setShortTime] = useState(5);
    const [longTime, setLongTime] = useState(5);
    const [error, setError] = useState(true);

    function handleSave() {
        if (error == false) {
            props.changeTimeSettings([workTime, shortTime, longTime]);
            handleClose();
        } else {
            alert("Please make sure you entered whole numbers.");
        }
        return (setError(true));
    }
    
    function handleClose() {
        props.setShowSettings(false);
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
                    onChange={e => setWorkTime(e.target.value)}
                >

                </input>
                <input 
                    className="txt-timeSetting" 
                    id="short" 
                    placeholder="Short Break (minutes)"
                    onChange={e => setShortTime(e.target.value)}
                >    
                </input>
                <input 
                    className="txt-timeSetting" 
                    id="long"
                    placeholder="Long Break (minutes)"
                    onChange={e => setLongTime(e.target.value)} 
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