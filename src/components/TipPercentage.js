import React from "react";

 const TipPercentage=(props) =>{
    return (
        <div id="tipPercentage">
            <input type="button" className="btn btn-outline-success" value="10" onClick={props.validateAndUpdateTipPercentage} /> 
            <input type="button" className="btn btn-outline-success" value="12" onClick={props.validateAndUpdateTipPercentage} />
            <input type="button" className="btn btn-outline-success" value="15" onClick={props.validateAndUpdateTipPercentage} />
            <input type="button" className="btn btn-outline-success" value="18" onClick={props.validateAndUpdateTipPercentage} />
            <br></br>
            <label>Or customize tip %: </label>
             <input type="text"
                placeholder="0" value={props.tipPercentage}
                onChange={props.validateAndUpdateTipPercentage}
                onFocus={props.validateAndUpdateTipPercentage}
            />
        </div>
    );
}

export default TipPercentage;