import React from "react";
import { Outlet } from "react-router-dom";


const Admin = () =>{
    
    return <div> 
         <label>This Admin View</label>
         <Outlet />
    </div>
   
}

export default Admin;
 