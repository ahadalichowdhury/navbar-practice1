import React, {useState} from 'react'
import "./navbar.css"
import {MenuList} from "./MenuList"
import { NavLink } from 'react-router-dom';

function Navbar() {
    const [clicked, setClicked]= useState(false);
    const menuList = MenuList.map(({url, title}, index)=>{
        return (
            
            <li key={index}>
                <NavLink to={url}>{title}</NavLink>
            </li>
        ); 
    });
    const clickhandle=()=>{
        setClicked(!clicked);
    }
    return (
       <div className="navbar">
         <h2 className="logo">  VPN <font>Lab</font></h2>
         <div className="menuIcon" onClick={clickhandle}>
         <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
         </div>
         <ul className={clicked ? "menuList " : "menuList close"}>
             {menuList}
         </ul>
       </div>
      
    )
}

export default Navbar
