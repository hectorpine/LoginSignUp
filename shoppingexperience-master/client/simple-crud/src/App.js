
import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import CreateAccount from "./pages/CreateAccount";
import SignIn from "./pages/SignIn";
import Sample from "./sample";


const App = () => {
  return (
 
    <Router>
     <Routes>
       <Route path="/" element={<SignIn />} />
       <Route path="/pages/CreateAccount" element={<CreateAccount />} />
        <Route path="/pages/SignIn" element={<SignIn />} />
      </Routes>
    </Router>

  );
}

export default App;
