import React from 'react'
import './App.css';
import { SidebarData } from './SidebarData';

function Sidebar () {
  return (
    
    <div className="Sidebar">
  <span id="to"> p </span>
   <span> reve</span> 
   <span id="too">go </span>
   <div class="footer">
    <p>Create Giveaway</p>
</div>
      <ul className="SidebarList">
      {SidebarData.map((val, key) => {
      return (
      <li 
      key={key}
      className='row'
      > 
      <div id= "icon">{val.icon}</div>
      <div id= "title">{val.title}</div>
        </li>
      );
  
      })}
      </ul>
    </div>
    
  );
}

export default Sidebar;