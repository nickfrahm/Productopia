import React, {useState} from 'react';

const Settings = (props) => {
    function handleSubmit(e) {
        
    }
    
    return (
        <div className="settings">
            <div className="settingsHeader">
                <h2>Pomodoro Settings</h2>
                <span id="cancelX">X</span>
            </div>
            <div className="settingsForm">
                <form>
                    <input className="txt-timeSetting" 
                        id="work" 
                        placeholder="Work Time" 
                        type="number" 
                        min="1"
                        max="59">

                    </input>
                    <input 
                        className="txt-timeSetting" 
                        id="short" 
                        placeholder="Short Break" 
                        type="number" 
                        min="1"
                        max="59">    
                    </input>
                    <input 
                        className="txt-timeSetting" 
                        id="long" 
                        placeholder="Long Break" 
                        type="number" 
                        min="1"
                        max="59">
                    </input>
                    <button className="btn-saveSettings" type="button">Save</button>
                    <button className="btn-closeSettings" type="button">Close</button>
                </form>
            </div>
            <div className="settingsFooter"></div>
        </div>
    );
}

export default Settings;