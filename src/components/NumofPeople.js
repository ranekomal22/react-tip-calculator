import React from "react";

 const NumofPeople=(props) => {
    return (
        <div>
            <label>Number of People: </label>
             <input type="text" value={props.num_of_ppl} onChange={props.splitTip}></input>
            <br/><br/>
        </div>
    );
}

export default NumofPeople;