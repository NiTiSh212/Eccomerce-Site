import React from "react";
import { NavLink } from "react-router-dom";
import {  useSelector } from "react-redux";
function SideBar() {
  const count= useSelector(state=>state.count)
  console.log(count)
  return (
    <>
      <div className="side-bar-logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmwFZjuXgigR_ohaiOU3a49gnONtgtXlOXEd_2bpibkw&s" className="logo-img" />
       
        <ol className="list-item">
          <li id="list-item-1">
            <NavLink to='/'>HOME</NavLink>
          </li>
          <li id="list-item-1"> PROFILE
            <div className="list-item-1-menu">
              <ol className="list-item-1-menu-list">
                <li id="menu-list-item"> ORDER</li>
                <li id="menu-list-item"> COUPON</li>
                <li id="menu-list-item"> NOTIFICATION</li>
                <li id="menu-list-item"> WISH LIST</li>
                <li id="menu-list-item"> LOGOUT</li>
              </ol>
            </div>
          </li>
          <li id="list-item-1" className="tt"> <NavLink to='./cart'>CART</NavLink> {count} </li>
          <li id="list-item-1"> <NavLink to='./contact'>ABOUT US</NavLink></li>
        </ol>
      </div>
    </>

  )
}
export default SideBar;
