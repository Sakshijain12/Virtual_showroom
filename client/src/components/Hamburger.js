import React from 'react'
import './compCSS/Hamburger.css'
export default function 
() {
  return (
    <div className="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn"  htmlFor="menu__toggle">
        <span></span>
        </label>

        <ul className="menu__box" style={{backgroundColor : "black", color : "white"}}>
            <li><a className="menu__item" style={{color : "#CBE4DE"}} href="#">Home</a></li>
            <li><a className="menu__item" style={{color : "#CBE4DE"}} href="#">Bedroom</a></li>
            <li><a className="menu__item" style={{color : "#CBE4DE"}} href="#">Living Room</a></li>
            <li><a className="menu__item" style={{color : "#CBE4DE"}} href="#">About</a></li>
            <li><a className="menu__item" style={{color : "#CBE4DE"}} href="#">Team</a></li>
        </ul>
    </div>
  )
}

