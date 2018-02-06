import React from 'react';
import synesColours from './synesColours';

import BGrinsColourPick from './BGrinsColourPick';


function CustomColours(props) {

    //could be done more simply with lodash
    const letters = [];
    for (var key in synesColours) {
	letters.push({
	    letter: key,
	    colour: synesColours[key]
	});
    }

    
    return (
	<div className="CustomColours">
	  <div className="big">
	    [<div className="a"
		  onClick={ () => {
		      props.setMainState({setColours: false});
	      }}>back</div>]
	    [<div className="a">reset all</div>]
	  </div>
	  <div className="cards">
	    {
		letters.map( elem => {
		    const LetterColour = props.mainState.overrideColours[elem.letter] || elem.colour;
		    return (
			<div key={elem.letter}>
			  <div className="L" style={{color: LetterColour}}>{elem.letter}</div>
			  <div className="settings-container">
			    <BGrinsColourPick
			       color={LetterColour}
			       onColourChange={ (color) => {
				   const hexCol = color.toHexString();
				   props.setMainState({
				       overrideColours: {
					   ...props.mainState.overrideColours,
					   [elem.letter]: hexCol === elem.colour ? null : hexCol
				       }
				   });
			       }}
			       />
			    <div className="col">{LetterColour}</div>
			    <div className="a"
				 onClick={ () => {
				     props.setMainState({
					 overrideColours: {
					     ...props.mainState.overrideColours,
					     [elem.letter]: null
					 }
				     });
			      }}
				 >reset</div>
			  </div>
			</div>
		    );
		})
	    }
	</div>
      </div>
    );
    
}

export default CustomColours;
