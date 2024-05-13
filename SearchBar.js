import React from 'react'
import './App.css';

function SearchBar(){
    return (
        <div className='search'>
     <input type="text" placeholder="Search here"></input>
    <button type="submit" class="seaarch-btn"> </button>    
        </div>
         
    );
}

export default SearchBar;