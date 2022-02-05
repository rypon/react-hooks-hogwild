import React from 'react';

import Hog from './Hog';

// 1.2.0 
// Pass the props into the parenthesis of the function PigPen(props)
// OR use destructuring and just use {hogs} instead of "props" in the PigPen component
// console log props OR hogs(if destructured) to see in the console


// 1.3.0 
// create a new component to show the hogs that will be inside the PigPen
// this will be Hog.js and imported into this file

function PigPen({ hogs }) {

    //1.4.0
    // map each Hog to show all hogs, the return value would be the new Hog component because thats what we want to return, the map is just getting each of them now, need to pass the hog as a prop being {hogInfo}, and a key being {index}
    //there is an error about how there should be a unique key, ideally the data should have an id key to use, but this doesn't. so we can use "index"

    //1.4.1
    //add the props to Hog.js as props, OR destructured as {hog}

    //1.4.2
    //to show "each" of the hogs at this point, refer to note 4.2 in Hogs.js

    const hogComponents = hogs.map((hogInfo, index) =>
        <Hog hog={hogInfo} key={index} />)

    return (
        <div className="ui grid container">
            {hogComponents}
        </div>
    )
}

export default PigPen;
