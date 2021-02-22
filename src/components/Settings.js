import React, {useState} from 'react';

const Settings = (props) => {
    function handleSubmit(e) {
        
    }
    
    return (
        <div id='settings'>
            <div className="settingsHeader">
                <h2>Pomodoro Settings</h2>
                <span id="cancelX">X</span>
            </div>
            <div className="settingsForm">
                <input 
                    className="txt-timeSetting" 
                    id="work" 
                >

                </input>
                <input 
                    className="txt-timeSetting" 
                    id="short" 
                >    
                </input>
                <input 
                    className="txt-timeSetting" 
                    id="long" 
                >
                </input>
            </div>
            <div className="settingsFooter">
                <button className="btn-saveSettings" type="button">Save</button>
                <button className="btn-closeSettings" type="button">Close</button>
            </div>
        </div>
    );
}

export default Settings;