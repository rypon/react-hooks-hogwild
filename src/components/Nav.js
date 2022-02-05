import React from "react";
import piggy from "../assets/porco.png";


//3.1.1
//add onClick to the div the img tag is in
//test this but adding an anon function to the onClick onClick={() => console.log('test')}

//3.2.1 (this will get changed to 3.2.2 / 3.2.3)
//now we can give Nav the prop of setOnlyGreased
//now the onClick handler can use setOnlyGreased
//setOnlyGreased needs to access the current value, which would be onlyGreased in the useState, so setOnlyGreased needs a callback function of its own. it will automatically know what the parameter is pointing to the onlyGreased value
//console log onlyGreased in App to see if it works

//3.2.2
//this gets clunky so instead you can write out a seperate function in App and use that as the parameter instead

//----------------------------------------------------------------------------

//4.1.0
//add a dropdown for the used to use so they can sort
//in the navWrapper div, use a select tag with option tags inside
//the option tags need a value id 
//state is needed in App

//4.1.1
//pass the toggleSort as a prop and set it to onChange to the select tag


const Nav = ({ toggleGrease, toggleSort }) => {
	return (
		<div className="navWrapper">

			<select onChange={toggleSort}>
				<option>Select</option>
				<option value="name">Name</option>
				<option value="weight">Weight</option>
			</select>

			<span className="headerText">HogWild</span>
			<div onClick={toggleGrease} className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
		</div >
	);
};

export default Nav;
