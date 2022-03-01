import React from "react";
import { useNavigate } from "react-router-dom";
import SignIn from "./pages/SignIn";

const Sample = (props) => {

    const navigate = useNavigate();

    return (
     
        <button onClick={() => navigate("/pages/CreateAccount")}>
            another button
        </button>

    );

};


export default Sample;