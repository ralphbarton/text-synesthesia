import React from 'react';

import * as spectrum from 'spectrum-colorpicker';// eslint-disable-line
import '../node_modules/spectrum-colorpicker/spectrum.css'; // why is this necessary?

import $ from "jquery";

class BGrinsColourPick extends React.PureComponent {

    constructor(props) {
	super(props);
	this.state = {
	    startColor: this.props.color
	};
    }

    componentDidMount() {
	this.$el = $(this.pickerDiv);
	this.$el.spectrum({
	    appendTo: this.$el,
	    flat: true, // always show full-size, inline block...

	    color: this.props.color,
	    showInput: true, // allow text entry to specify colour
	    showAlpha: true, // allow transparency selection
	    //palette based options...
	    localStorageKey: "spectrum.PGT", // Any Spectrum with the same string will share selection
	    showPalette: true, // "palette" is a fixed provision of colours for the picker to offer
	    palette: [],
	    showSelectionPalette: true, // "selectionPalette" retains some history of user's colour choices.
	    showInitial: true, // show the original (starting) colour alongside the new one
	    showButtons: false, //do not require OK and Cancel buttons
//	    preferredFormat: this.props.UI.ColStrFormat, // for the input box...

	    move: this.props.onChange
	});
    }

    componentWillUnmount() {
	this.$el.spectrum("destroy");
    }

    
    componentDidUpdate(){
	const $bgrins = this.$el;

	//change pref format
	//	$bgrins.spectrum("option", "preferredFormat", this.props.UI.ColStrFormat ); // for the input box...

	const col = $bgrins.spectrum("get");
	$bgrins.spectrum("set", col);
    }
    
    render(){
	return (
	    <div className="BGrinsColourPick">
	      <div className="BGrins-target-div" ref={ el => {this.pickerDiv = el;}}/>
	      </div>
	);
    }
}


export default BGrinsColourPick;
