
import React from "react";
import '../App.css';
import { useState } from "react";
import Axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const SignIn = () => {

    const navigate = useNavigate();

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState("");

    const displayInfo = () => {
        console.log(email + password);
    };

    const addEmployee = () => {
        // console.log(name)
        Axios.post('https://sql-connect.herokuapp.com/login',
            { email:email, password:password}
        ).then((response) => {
           // console.log(response.data);
            if (response.data.message){
                setLoginStatus(response.data.message)
            }
            else{
               // setLoginStatus(response.data[0]);
                setLoginStatus("You are logged in !");
                ////ALLOW TO LOGIN TO NEXT PAGE
            }
            
        });
    };


    return (

        <div>SIGN IN PAGE
            <div className="App">
                <div className="information">
                    <label> Username:</label>
                    <input type="text" onChange={(event) => { setEmail(event.target.value); }} />
                   
                    <label>Password:</label>
                    <input type="text" onChange={(event) => { setPassword(event.target.value); }} />
                   
                    <button onClick={addEmployee}>Sign In</button> 
                    <button onClick={() => navigate("/pages/CreateAccount")}>New Account</button>
                </div>
            </div>
            <h1>{loginStatus}</h1>
        </div>
    );

};

export default SignIn;