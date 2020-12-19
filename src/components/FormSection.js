import React from "react";
import NumofPeople from "./NumofPeople";
import TipPercentage from "./TipPercentage";
import "./style.css";

const FormSection=(props) => {
    return (
        <div id="inputs">
            <label>Bill: $</label>
            <input 
                type="text" 
                value={props.bill}
                onChange={props.validateAndUpdateBill} 
            />
            <br/>
            <label>Tip Percentage %:</label>
            <TipPercentage 
                validateAndUpdateTipPercentage={props.validateAndUpdateTipPercentage} 
                tipPercentage={props.tipPercentage}
            />
            <input type="checkbox" onChange={props.updateIsSplitTip}/> 
            <label>  Split tip?</label>
            <br/>
            { props.isSplitTip && (
                <NumofPeople 
                    num_of_ppl = {props.num_of_ppl}
                    splitTip = {props.splitTipFunc}
                />
            )}
            <button type="button" className="btn btn-success" alt="demo1" onClick={props.handleSubmit}>Calculate </button>
            <br></br>
            <br></br>
            <button type="button" className="btn btn-success" alt="demo" onClick={props.resetPage}>Clear </button>
        </div>
    );
}
export default FormSection;