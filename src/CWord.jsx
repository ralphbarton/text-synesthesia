import React from 'react';


//import * as d3 from "d3";
import {select} from "d3-selection";
import "d3-selection-multi";

//import synesColours from './synesColours';


class CWord extends React.PureComponent {

    svgDraw(){

	[...this.props.word].forEach( (char, i)=>{

	    //code below runs once for each letter...
	    
	    select(this.svg_el).append("rect")
		.attrs({
		    width: 20,
		    height: 20,
		    y: 0,
		    x: 23*i,
		    class: char.toUpperCase()
		});	


	});

    }

    /*
    componentDidUpdate(){
	this.svgDraw
    }*/


    componentDidMount(){
	this.svgDraw();
    }
    
    render(){
	const W = 30 * this.props.word.length;
	const H = 30;
	return (
	    <svg
	       className="CWord"
	       width={W}
	       height={H}
	       ref={ (el) => {this.svg_el = el;}}
	       />

	);
    }
}

export default CWord;
