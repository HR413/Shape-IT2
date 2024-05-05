import React, { useState } from "react";
import "../bmi.css";

export default function BMI() {
    const [age, setAge] = useState();
    const [weight, setWeight] = useState('');
    const [Height, setHeight] = useState('');
    const [bmi, setbmi] = useState();
    const [msg, setmsg] = useState('');


    const reload = () => {
        window.location.reload();
    }

    const handleCalculation = (e) => {
        e.preventDefault();
        let bmiValue; 

        if (weight === 0 || Height === 0 ) {
            alert('Hello please enter a valid number');
        }
        else {
            bmiValue = (weight / ((Height * Height)/10000)).toFixed(2);
            setbmi(bmiValue);
        }

        if (bmiValue < 20) {
            setmsg("You are underweight")
        }
        else if (bmiValue >= 20 || bmiValue <= 25) {
            setmsg("You are healthy")
        }
        else {
            setmsg("You are unhealthy please hit the gym")
        }
    }

    return(
        <div className="bmi-calculator-container">
            <div className="container">
            <h1 className="title">BMI Calculator</h1>

            <form onSubmit={handleCalculation}>
                <div className="bmi-field">
                    <label className="labels">Age:</label><br/>
                    <input className="bmi-input" type="number" placeholder="" value={age} onChange={(e)=>setAge(e.target.value)}/>
                </div>

                <div className="bmi-field">
                    <label className="labels">Weight:</label><br/>
                    <input  className="bmi-input" type="number" placeholder="" value={weight} onChange={(e)=>setWeight(e.target.value)}/>
                </div>


                <div className="bmi-field">
                    <label className="labels">Height:</label><br/>
                    <input  className="bmi-input" type="number" placeholder="" value={Height} onChange={(e)=>setHeight(e.target.value)}/>
                </div>

                <div className="bmi-buttons">
                   <button className="btn bmi" type="submit">Calculate</button>
                   <button className="btn bmi btn-reload" type="submit" onClick={reload}>Reload</button>
                </div>

                <div className="bmi-result">
                    <div>
                        <h3>Age: {age}</h3>
                        <h3>Your BMI is: {bmi}</h3>
                        <p className="p-msg">{msg}</p>
                    </div>
                </div>
            </form>
        </div>
        </div>
    )
};