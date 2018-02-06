import React from 'react';

import * as spectrum from 'spectrum-colorpicker';// eslint-disable-line
import '../node_modules/spectrum-colorpicker/spectrum.css'; // why is this necessary?

import $ from "jquery";

class BGrinsColourPick extends React.PureComponent {

    /*
    constructor(props) {
	super(props);
	this.state = {
	    startColor: this.props.color
	};
    }*/

    componentDidMount() {
	this.$el.spectrum({
	    showInput: true, // allow text entry to specify colour
	    preferredFormat: "hex",
	    showInitial: true, // show the original (starting) colour alongside the new one
	    change: this.props.onColourChange
	});
	
/*
	this.$el.spectrum({
	    appendTo: this.$el,
	    color: this.props.color,
	    showInput: true, // allow text entry to specify colour
	    //palette based options...
	    localStorageKey: "spectrum.PGT", // Any Spectrum with the same string will share selection
	    showButtons: true, //OK and Cancel buttons
//	    preferredFormat: this.props.UI.ColStrFormat, // for the input box...

	    move: null/*this.props.onChange
	});

 */
    }

    componentDidUpdate(){
	this.$el.spectrum("set", this.props.color);
    }

    componentWillUnmount() {
	this.$el.spectrum("destroy");
    }
    
    render(){
	return (
	    <input type='text'
		   className='basic BGrins-target-div'
		   defaultValue={this.props.color}
		   ref={ el => {this.$el = $(el);}}
	      />
	);
    }
}


export default BGrinsColourPick;
