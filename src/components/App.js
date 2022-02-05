import React, { useState } from "react";
import Nav from "./Nav";
import PigPen from "./PigPen";

import hogsData from "../porkers_data";
//-----------------------------------------------------------------------
//NOTES = deliverable/step/substep
// 1.1.0 = deliverable 1 / step 1 / substep 0
// 2.1.0 = deliverable 2 / step 2 / substep 0
//-----------------------------------------------------------------------

//1.1.0
//Figure out where to but all of the hogs from the import about from "../porkers_data"
//add a new component/tile for that, being <PigPen />, then import it above

//1.2.0
//pass PigPen data with a prop. "hogs={hogsData}". now the PigPen component can take "hogs" as a prop/data using "props" in the parenthesis
//OR use destructuring and just use {hogs} instead of "props" in the PigPen component

//1.2.1
//you can give as many props as you like, example: add "potato="This is a prop" "" inside the <PigPen /> in addition to the hogs. Then in PigPen, when you console.log(props), you will see 2 props. the array of hogs from "hogs" and a string "this is a prop", from "potato"
//<PigPen potato="This is a prop" hogs={hogsData} />

//-------------------------------------------------------------------------

//3.1.0
//for the new filter on greases hogs, need to import useState and then create the const for useState
// will be using the spinning pig that is the logo in <Nav /> as our click filter

//3.2.0
// pass <Nav /> a prop of setOnlyGreased so it can use it

//3.2.3
//create the toggleGrease function that does everything from 3.2.1 which was just taking the set value and making it !value
//use toggleGrease as the prop and give it to Nav

//3.3.0
//add the const for the filter that = a ternary operation
//if its false, its just going to be all of the hogsData, because its not filtered
//if true, it will take hogsData and use .filter that takes a hog and returns hog.greased ===true

//3.3.1
//now the filteredHogs can be passed as a prop to PigPen
//it can just replace the {hogsData} prop because the filteredHogs is also usinging that data

//-------------------------------------------------------------------------

//4.1.0
//add useState for sort, set state to nothing, ""

//4.1.1
//create a function that will toggle the sort that takes an event (e)
//need to pass this as a prop to Nav so it can be used there

//4.2.0
//create a new const for sortedHogs that will sort through filteredHogs
//filteredHogs because that variable has all hogs, plus sorted hogs

//4.2.1
//sort takes a function as an argument, that callback function takes 2 arguments because its being sorted by wither name or weight. it needs to figure out what will be returned first
//the callback to sort needs to return a positive or negative number
//sort will take a switch here




function App() {

	const [onlyGreased, setOnlyGreased] = useState(false)

	const [sortValue, setSortValue] = useState("")


	const toggleGrease = () => {
		setOnlyGreased(!onlyGreased)
	}

	const filteredHogs = onlyGreased ?
		hogsData.filter(hog => hog.greased === true) :
		hogsData

	//const sortedHogs = filteredHogs.sort((hogObjA, hogObjB) => { })

	const toggleSort = (e) => {
		//console.log("sort?", e.target.value)
		setSortValue(e.target.value)
	}

	// console.log(onlyGreased)
	return (
		<div className="App">
			<Nav toggleGrease={toggleGrease} toggleSort={toggleSort} />

			<PigPen hogs={filteredHogs} />

		</div>
	);
}

export default App;
