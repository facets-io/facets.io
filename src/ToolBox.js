import React from 'react';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';

function ToolBox() {
    return <div>
        <div><b>Selected DOM Element: </b><label id="ToolBoxLabel"></label></div>
        <div><b>Audience:</b> <select name="cars" id="cars">
            <option value="volvo">Age</option>
            <option value="saab">Activity</option>
        </select> </div>
        <div>Target Audience:</div>
        <br></br>
        <div><BootstrapSwitchButton
            onlabel='Display'
            offlabel='Hide'
            onstyle='danger'
            offstyle='success'
            width={100}
        ></BootstrapSwitchButton></div>
    </div>
}

export default ToolBox;