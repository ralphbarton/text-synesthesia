/* eslint-disable jsx-a11y/href-no-hash */
import React from 'react';

import Select from 'react-select';
import 'react-select/dist/react-select.css';

import ScreenSplit from './ScreenSplit';


function ControlsStrip(props) {
    const vSplit = props.mainState.vSplit;
    return (
	<div className="ControlsStrip">

	  {/* 1. Letter Colours Control */}
	  {props.mainState.textHidden &&
	  <div>
	    <a href="#"
	       onClick={()=>{props.setMainState({textHidden: false});}}>
		  Text Entry</a>
	  </div>
	  }
		  
	  {/* 2. SplitScreen Control */}
	  {!props.mainState.textHidden &&
	  <ScreenSplit
	     vSplit={vSplit}
	     onClick={()=>{props.setMainState({vSplit: !vSplit});}}
	    />
	    }

	    {/* 3. Font Control */}		
	    <div className="font-type">
	      <div className="name">Font:</div>
	      <Select
		 name="form-field-name"
		 value={props.mainState.selectedFont && props.mainState.selectedFont.value}
		 onChange={(selectedFont) => {
		     props.setMainState({ selectedFont });
		}}
		options={[
		    { value: 0, label: 'Submarine' },
		    { value: 1, label: 'Simple Boxes' },
		    { value: 2, label: 'Leaf-nodes' },
		    { value: 3, label: 'Arches' },
		    { value: 4, label: 'Caterpillar' },
		    { value: 5, label: 'Hexagonal' },
		    { value: 6, label: 'Learn 1' },
		    { value: 7, label: 'Learn 2' },
		]}
		clearable={false}
		/>
	    </div>

	    {/* 4. Font Size Control */}		
	    <div className="font-size">
	      <div className="name">Size:</div>
	      <Select
		 name="form-field-name"
		 value={props.mainState.selectedFSize && props.mainState.selectedFSize.value}
		 onChange={(selectedFSize) => {
		     props.setMainState({ selectedFSize });
		}}
		options={[
		    { value: 0, label: 'Small' },
		    { value: 1, label: 'Medium' },
		    { value: 2, label: 'Large' },
		    { value: 3, label: 'X-Large' },
		]}
		clearable={false}
		/>
	    </div>

	    {/* 5. Letter Colours Control */}
	    <div>
	      <a href="#"
		 onClick={()=>{props.setMainState({setColours: true});}}		     
		>Letter Colours</a>
	    </div>
	</div>
    );

}

export default ControlsStrip;
