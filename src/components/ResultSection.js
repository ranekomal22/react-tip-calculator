import React from "react";

const ResultSection= (props) => {
    return (
        <div id="results">
            Total Tip: {props.tip}
            <br/>
            Total Amount: {props.total}
            <br/>
            { props.isSplitTip && (
                <div id="splitTip">
                    Tip Per Person: {props.tip_per_person}
                    <br/>
                    Total Per Person: {props.total_per_person}
                </div>
            )}
        </div>
    );
}

export default ResultSection;