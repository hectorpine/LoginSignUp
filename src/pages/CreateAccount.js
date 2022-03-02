
import React from "react";
import '../App.css';
import { useState } from "react";
import Axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const CreateAccount = () => {


    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password,setPassword] = useState("");

    const displayInfo = () => {
        console.log(firstName+ lastName + email + phone+password);


    };

    const addUser = () => {
        // console.log(name)
        Axios.post('https://sql-connect.herokuapp.com/create',
            { firstName: firstName, lastName: lastName, email:email, phone:phone,password:password }
        ).then(() => {
            console.log("success");
        })
    }


    return(
      
                    <div>CREATE PAGE
            <div className="App">
                <div className="information">
                    <label> First Name:</label>
                    <input type="text" onChange={(event) => { setFirstName(event.target.value); }} />
                    <label> Last Name:</label>
                    <input type="text" onChange={(event) => { setLastName(event.target.value); }} />
                    <label>Email Address:</label>
                    <input type="text" onChange={(event) => { setEmail(event.target.value); }} />
                    <label>Phone Number:</label>
                    <input type="text" onChange={(event) => { setPhone(event.target.value); }} />
                    <label>Password:</label>
                    <input type="text" onChange={(event) => { setPassword(event.target.value); }} />
                    <button onClick={addUser}>Create Account</button>
                   
                </div>
            </div>
            </div>
    );

};

export default CreateAccount;