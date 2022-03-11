import React from "react";
import { Outlet, Link } from 'react-router-dom';


const MyAccountNav = () =>{
    return <div> 
        <p>My Account Tabs
        </p>
        <Link to="/MyAccount">My Account Information</Link> <br/>
        <Link to="MyOrders">My Orders</Link>

        <Outlet />
    </div>
   
}

export default MyAccountNav;