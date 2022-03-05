
import React from "react";
import '../App.css';
import { useState } from "react";
import Axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const CreateAccount = () => {


    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [country, setCountry] = useState("");
    const [position, setPosition] = useState("");
    const [wage, setWage] = useState(0);

    const displayInfo = () => {
        console.log(name + age + country + position + wage);


    };

    const addEmployee = () => {
        // console.log(name)
        Axios.post('http://localhost:3001/create',
            { name: name, age: age, country: country, position: position, wage: wage }
        ).then(() => {
            console.log("success");
        })
    }


    return (

        <div>CREATE PAGE
            <div className="App">
                <div className="information">
                    <label> Name:</label>
                    <input type="text" onChange={(event) => { setName(event.target.value); }} />
                    <label> Age:</label>
                    <input type="number" onChange={(event) => { setAge(event.target.value); }} />
                    <label>Country</label>
                    <input type="text" onChange={(event) => { setCountry(event.target.value); }} />
                    <label>Position</label>
                    <input type="text" onChange={(event) => { setPosition(event.target.value); }} />
                    <label>Wage (year):</label>
                    <input type="number" onChange={(event) => { setWage(event.target.value); }} />
                    <button onClick={addEmployee}>Add Employee</button>
                    <button type="button">New Account</button>
                </div>
            </div>
        </div>
    );

};

export default CreateAccount;