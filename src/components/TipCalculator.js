import React from "react";
import FormSection from "./FormSection";
import ResultSection from "./ResultSection";

class TipCalculator extends React.Component {
    constructor(props){
        super();

        this.state = {
            bill : '0.00',
            tipPercentage : 0,
            tip : '0.00',
            total: '0.00',
            num_of_ppl : 0,
            tip_per_person : '0.00',
            total_per_person: '0.00',
            isSplitTip : false
            
        };
    }

    // validate each time user enters a key
    validateAndUpdateBill = (event) => {
        event.preventDefault();
        
        // not allow non numerical value enter as input
        let bill = parseInt(event.target.value.replace(/[^\d]/, ''));

        if(!bill)    {
            bill = '0.00';
        }
        else{
            bill = (bill / 100).toFixed(2);
        }

        this.setState({bill});
    }

    validateAndUpdateTipPercentage = (event) => {
        event.preventDefault();

        // not allow non numerical value enter as input
        let tipPercentage = parseInt(event.target.value.replace(/[^\d]/, ''));
        console.log(tipPercentage);
        if(!tipPercentage)    {
            tipPercentage = 0;
        }

        this.setState({tipPercentage});
    }

    calcTip = () => {
        let tip = (parseFloat(this.state.bill) * this.state.tipPercentage * 0.01).toFixed(2);
        let total = (parseFloat(tip) + parseFloat(this.state.bill)).toFixed(2);
        this.setState({tip, total}, () => {
            // calculate tip if split is selected
            if(this.state.isSplitTip && this.state.num_of_ppl !== 0){
                let tip_per_person = (parseFloat(this.state.tip) / this.state.num_of_ppl).toFixed(2);
                let total_per_person = (parseFloat(total) / this.state.num_of_ppl).toFixed(2);
                this.setState({tip_per_person, total_per_person});
            }
        });
    }

    updateIsSplitTip = () => {
        if(this.state.isSplitTip) 
            this.setState({isSplitTip: false});
        else this.setState({isSplitTip: true});
    }

    handleSubmit = e => {
        e.preventDefault();

        if (this.state.bill !== "0.0" && this.state.tipPercentage !==0) {
            this.calcTip();
        } 
        else {
            var bill = '0.00';
            var tipPercentage="";
            this.setState({tipPercentage,bill});  
        }
    } 

    splitTip = (event) =>{
        event.preventDefault();

        let num_of_ppl = parseInt(event.target.value.replace(/[^\d]/, ''));

        if(num_of_ppl && num_of_ppl !== 0){
            let tip_per_person = (parseFloat(this.state.tip) / num_of_ppl).toFixed(2);
            let total_per_person = (parseFloat(this.state.total) / num_of_ppl).toFixed(2);

            this.setState({num_of_ppl, tip_per_person, total_per_person});
        }
        else this.setState({num_of_ppl: 0, tip_per_person : '0.00', total_per_person: '0.00'});
    }


    resetPage=() =>{
        this.setState({
            bill : '0.00',
            tipPercentage : 0,
            tip : '0.00',
            total: '0.00',
            num_of_ppl : 0,
            tip_per_person : '0.00',
            total_per_person: '0.00',
            isSplitTip : false
       }); 
    }

    render(){
        return (
            <div id="tip-calculator">
                <h1 className="textedit">Tip Calculator</h1>
                <div className="outer">
                    <FormSection 
                        bill = {this.state.bill}
                        tipPercentage = {this.state.tipPercentage}
                        num_of_ppl = {this.state.num_of_ppl}
                        isSplitTip = {this.state.isSplitTip}
                        handleSubmit={this.handleSubmit}
                        resetPage={this.resetPage}
                        validateAndUpdateBill = {this.validateAndUpdateBill}
                        validateAndUpdateTipPercentage = {this.validateAndUpdateTipPercentage}
                        updateIsSplitTip = {this.updateIsSplitTip}
                        splitTipFunc = {this.splitTip}
                    />
                    <br/>
                    <ResultSection 
                        tip = {this.state.tip}
                        total = {this.state.total}
                        isSplitTip = {this.state.isSplitTip}
                        tip_per_person = {this.state.tip_per_person}
                        total_per_person = {this.state.total_per_person}
                    />
                </div>
            </div>
        );
    }
}

export default TipCalculator;