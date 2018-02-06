import React from 'react';
import synesColours from './synesColours';

//import BGrinsColourPick from './BGrinsColourPick';


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
	  {
	      letters.map( elem => {
		  return (
		      <div key={elem.letter}>
			<div className="L" style={{color: elem.colour}}>{elem.letter}</div>
			<div>
			  {/*<BGrinsColourPick />*/}
			</div>
			<div className="a">reset</div>
		      </div>
		  );
	      })
	  }
	</div>
    );

}

export default CustomColours;
