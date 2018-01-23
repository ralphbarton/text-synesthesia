import React, { Component } from 'react';

class CTRA_App extends Component {
  render() {
    return (
      <div className="CTRA_App">

	<div className="title">
	  The synesthesia text-to-colour translator
	  <span>built in React</span>
	</div>

	<div className="controls">
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

	<div className="text-container">	

	  <div>
	    <div className="title">
	      English
	    </div>

	    <div className="area-content">
	      <textarea/>
	    </div>	    
	  </div>

	  <div>
	    <div className="title">
	      Colour-type
	    </div>

	    <div className="area-content">
	      content here
	    </div>	    
	  </div>
	  


	  
	</div>

      </div>
    );
  }
}

export default CTRA_App;
