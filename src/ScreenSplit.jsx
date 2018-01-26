import React from 'react';

import imgHsplit   from './asset/splitscreen_H.png';
import imgVsplit   from './asset/splitscreen_V.png';


function ScreenSplit(props) {

    return (
	<div className="ScreenSplit">
	  <img src={props.vSplit ? imgHsplit : imgVsplit}//show the icon of opposite stage to current
	       onClick={props.onClick}
	       alt=""/>
	</div>
    );
}

export default ScreenSplit;
