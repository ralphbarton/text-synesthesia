import React, { Component } from 'react';

import Select from 'react-select';
import 'react-select/dist/react-select.css';

import ControlsStrip from './ControlsStrip';
import CWord from './CWord';

class CTRA_App extends Component {

    constructor(){
	super();
	this.state = {
	    vSplit: true,
	    selectedFont: {value: 1},
	    selectedFSize: {value: 0},
	    setColours: false,
	    text: "The quick brown fox jumps over the lazy dog."
	};
    }

    render() {
	const vSplit = this.state.vSplit;

	if(this.state.setColours){
	return (
	    <div className="CTRA_App">
	      <a href="#"
		 onClick={()=>{this.setState({setColours: false});}}
		>save and return to Colour Translator</a>
	    </div>
	);
	}

	return (
	    <div className="CTRA_App">

	      {/* 1. Heading Area */}
	      <div className="title">
		The synesthesia text-to-colour translator
		<span>built in React</span>
	      </div>


	      {/* 2. Controls Area */}	      
	      <ControlsStrip
		 mainState={this.state}
		 setMainState={this.setState.bind(this)}
		 />

	      
	      {/* 3. The 2 text panels */}
	      <div className={"text-container" + (vSplit?" vSplit":"")}>	

		<div>
		  <div className="title">
		    English
		  </div>

		  <div className="area-content">
		    <textarea
		       value={this.state.text}
		       onChange={ e => { this.setState({text: e.target.value}); }}
		       />
		  </div>	    
		</div>

		<div>
		  <div className="title">
		    Colour-type
		  </div>

		  <div className="area-content">
		    <div className="colour-type">
		    {this.state.text.split(" ").map( str=> {
			return (
			    <CWord key={str} word={str}/>
			);
		    })}
	    </div>
		</div>	    
		</div>
		


		
	      </div>

	    </div>
	);
    }
}

export default CTRA_App;
