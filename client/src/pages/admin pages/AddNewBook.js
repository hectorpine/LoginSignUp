import React from "react";
import './css style sheets/AddNewBook.css';


const AddNewBook = () =>{
    
    return <div> 
        <div className="newBook">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
            <div className="bookImg">
                <div className="coverDisplay">
                <span class="material-icons addPhoto">photo_library</span>
                </div>
            </div>

            <div className="bookInfo">
                <label>Title</label>
                <input type="text" />
                <label>Author</label>
                <input type="text" />
                <label>Description</label>
                <textarea rows="7" />
                <label>ISBN</label>
                <input type="text" />
                <label>Price ($)</label>
                <input type="text" />
                <label>Qty.</label>
                <input type="text" />
                <button className="addBookBtn">Add New Book</button>
            </div>
        </div>
    </div>
}

export default AddNewBook;