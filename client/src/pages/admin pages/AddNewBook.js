import React from "react";
import './css/AddNewBook.css';
import '../font.css';


const AddNewBook = () =>{

    function showPreview(event){
        if(event.target.files.length > 0){
          var src = URL.createObjectURL(event.target.files[0]);
          var preview = document.getElementById("bookCoverPreview");
          preview.src = src;
          preview.style.display = "block";
        }
      }

    
    return <div> 
        <div className="newBook">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>

            <div className="bookImg">
                <div className="coverDisplay">
                    <div class="image">
                        <img id="bookCoverPreview" alt=""/>
                    </div>
                    <span class="material-icons addPhoto">photo_library</span>
                </div>
                <label for="imgBtn">Upload Image</label>
                <input type="file" id="imgBtn" accept="image/*" onChange={showPreview} />
            </div>

            <div className="bookInfo">
                <label>Title</label>
                <input type="text" />
                <label>Author</label>
                <input type="text" />
                <label>Description</label>
                <textarea rows="7" />
                <label>ISBN</label>
                <input type="number" />
                <label>Price ($)</label>
                <input type="number" />
                <label>Qty.</label>
                <input type="number" />
                <button className="addBookBtn">Add New Book</button>
            </div>
        </div>
    </div>
}

export default AddNewBook;