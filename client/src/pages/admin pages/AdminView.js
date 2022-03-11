import React from "react";
import { Outlet, Link } from 'react-router-dom';


const AdminView = () =>{
    return <div> 
        <p>Admin View
        </p>
        <Link to="/admin">add new book</Link> <br/>
        <Link to="viewinventory">inventory</Link> <br/>
        <Link to="orderhistory">order history</Link> <br/>
        <Link to="discountcodes">discount codes</Link> <br/>
        <Link to="sales">sales</Link> <br/>
        <Link to="users">users</Link> <br/>

        <Outlet />
    </div>
   
}

export default AdminView;