import React, { Component } from 'react';

import ScreenSplit from './ScreenSplit';
import CWord from './CWord';

class CTRA_App extends Component {

    constructor(){
	super();
	this.state = {
	    vSplit: true,
	    text: "The quick brown fox jumps over the lazy dog."
	};
    }

    render() {
	const vSplit = this.state.vSplit;
	return (
	    <div className="CTRA_App">

	      <div className="title">
		The synesthesia text-to-colour translator
		<span>built in React</span>
	      </div>

	      <div className="controls">
		<ScreenSplit
		   vSplit={vSplit}
		   onClick={()=>{this.setState({vSplit: !vSplit});}}
		   />

		<div>
		  font
		</div>
		<div>
		  size
		</div>
		<div>
		  colours
		</div>
	      </div>

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
