import React, { useState } from 'react';


//1.4.1
//add the props as "props", OR destructured as "{hog}"

//1.4.2
//to show "each" of the hogs after adding {hogComponents}, just add sample text inside the empty dic and it will show 12 values "return <div>Im the hog</div>;"

//1.5.0
//Add images to the JSX return, images need their img src tag, "<img src={hog.image} />""

//1.6.0
//pictures should show now, and there are style directions in readme, need to add a class to the parent container (div in PigPen) and a class to the children (div in Hog)

//1.6.1
//there are 2 style sheets imported, if you look in index.js they are just regular CSS (index.css) and semantic-ui-css
//semantics UI is used in this component in the div below. the word "image" after "ui three wide column", just formats the images so they arent overlapping
//pigTile adds the dotted border, from index.css

//-------------------------------------------------------------------------

//2.1.0
//add onClick to the hog cards/ divs, taking a function toggleShowDeets
//then add the function about in which everything will be triggered

//2.1.1
//can test with a console.log to check that each click on each Hog will trigger
//if there is an error about alt name, just assign an alt name of any relevant text "alt="pig pic"" to the img tag

//2.2.0 (props from 2.4.0)
//to show the extra details after a click, we can add 2 new components for "Front" and "Back"
//so when front = true, it will just show the image. when back = true, it will show the extra details
//in the Front component, need to pass the props of hog so it can get the image (2.4.0)
//in the Back component, need to pass the props for the other details needed: name, specialty, weight, greased, and highest medal achieved (2.4.0)

//2.3.0
//import state to trigger the toggle between Front and Back, and create the const variable for it
//useState will be set to false at first, so that it is not showing the details (until clicked making it true)

//2.4.0 (connects to 2.2.0)
//add a ternary operator in the JSX return for showDetails, if true: <Back />, if false: <Front />
//need to assign <Front /> props for hog so that the component function can receive the hog image
//need to assign <Back /> props for the extra details so that the component function can receive the hog's extra details

//2.5.0
//edit the toggleShowDetails function so that setShowDetails will then show the opposite of its current state
//setShowDetails(!showDetails), the bang operator ! tells it to show the opposite of useState(false) 

//-------------------------------------------------------------------------



//-------------------------------------------------------------------------


// function Front({ hog }) {
//     <img src={hog.image} alt="pig pic" />
// }

// function Back() {
//     <h1>details</h1>
// }


const Front = ({ image }) => <img src={image} alt="pig pic" />

//can destructure the hog props here too as ({hog:{name, specialty, greased, "highest medal acheived": medal}}) and in the return div just write {name} or {specialty} etc
const Back = ({ hog }) => {
    return (
        <div>
            <h1>{hog.name}</h1>
            <h3>{hog.specialty}</h3>
            <div>{hog.weight}</div>
            <div>{hog.greased ? <div>true</div> : <div>false</div>}</div>
            <div>{hog["highest medal achieved"]}</div>
        </div>
    )
}

function Hog({ hog }) {

    const [showDetails, setShowDetails] = useState(false)

    function toggleShowDeets() {
        setShowDetails(!showDetails)
    }

    return (
        <div onClick={toggleShowDeets}
            className="ui three wide column image pigTile">

            {showDetails ? <Back hog={hog} /> : <Front image={hog.image} />}

            {/* moved this img tag to the "Front " component above*/}
            {/* <img src={hog.image} alt="pig pic" /> */}
        </div>
    )
}

export default Hog;
