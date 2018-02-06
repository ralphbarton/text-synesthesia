import React from 'react';


//import * as d3 from "d3";
import {select} from "d3-selection";
import "d3-selection-multi";

//import synesColours from './synesColours';


class CWord extends React.PureComponent {

    charType(char){
	const symbcode = char.charCodeAt(0);

	// A capital
	if((symbcode>=65)&&(symbcode<=90)){return 'A';}

	// lower case letter
	if((symbcode>=97)&&(symbcode<=122)){return 'c';}

	return 'x';
	
    }


    svgDraw(){


//	const font = this.props.mainState.selectedFont.value;  // [0 - 5]

	const SVG = select(this.svg_el);
	SVG.selectAll("*").remove();// clear the SVG of any previous stuff...
	
	// Calculate dimentions used to draw words
	const M = 1; //margin, in pixels. Also, stroke-width.
	const rat_LU = 1.5; // upper-to-lower case size ratio
	const rat_WH = 1.3; // width-to-height ratio
	const Wl = 16;
	const Hl = Wl * rat_WH;
	const Wu = Wl * rat_LU;
	const Hu = Hl * rat_LU;

	//code below runs once for each letter...
	var x_cum = M;
	[...this.props.word].forEach( (char, i)=>{

	    // what type of character is this one?
	    const type = this.charType(char);
	    if(type === 'x'){return;}
	    const U = type === 'A';

	    // determine lower or upper case width
	    const w = U?Wu:Wl;
	    const h = U?Hu:Hl;
	    
	    SVG.append("rect")
		.attrs({
		    y: M + (Hu-h),
		    x: x_cum,
		    width: w,
		    height: h,
		    class: char.toUpperCase()
		})
		.styles({
		    "stroke-width": M
		});

	    // increment the width-counter
	    x_cum += w;

	});


	//dimentions of the main SVG - set last
	const size = this.props.mainState.selectedFSize.value; // [0 - 3]
	const scale = [1, 1.5, 2.25, 3.75][size];
	
	const width  = x_cum + M;
	const height = Hu + 2*M;
	const viewBox= `0 0 ${width} ${height}`;//this represents the coordate limits WITHIN the svg
	
	SVG.attrs({width: width*scale, height: height*scale, viewBox});

	
    }


    componentDidUpdate(){
	this.svgDraw();
    }


    componentDidMount(){
	this.svgDraw();
    }
    
    render(){

	return (
	    <svg
	       className="CWord"
	       ref={ (el) => {this.svg_el = el;}}
	       />

	);
    }
}

export default CWord;
