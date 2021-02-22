import React, {useState} from 'react';

const Settings = (props) => {
    
    function handleSave() {
        
    }
    
    function handleClose() {
        props.setShowSettings(false)
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
                >

                </input>
                <input 
                    className="txt-timeSetting" 
                    id="short" 
                    placeholder="Short Break (minutes)"
                >    
                </input>
                <input 
                    className="txt-timeSetting" 
                    id="long"
                    placeholder="Long Break (minutes)" 
                >
                </input>
            </div>
            <div className="settingsFooter">
                <button className="btn-saveSettings" type="button">Save</button>
                <button className="btn-closeSettings" type="button" onClick={handleClose}>Close</button>
            </div>
        </div>
    );
}

export default Settings;