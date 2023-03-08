import React from 'react'
import Hamburger from './Hamburger'
import './compCSS/Hamburger.css'
import '../App.css'
import Login from './login'
import SignUp from './signUp'

export default function Navbar() {
    const login = () => {
        console.log("hii");
        return (
            <div className='container'>
                <Login/>
            </div>
    )}

    const signup = () => {
        return (
        <SignUp />
    )}

  return (
    <nav style= {{backgroundColor : "#2C3333"}} className="navbar navbar-expand-lg">
        <div className="container-fluid">
            {/* <a className="navbar-brand" href="#">Navbar</a> */}
            <Hamburger/>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#" style={{color : '#CBE4DE'}}>Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" style={{color : '#CBE4DE'}}>Link</a>
                </li>
    
                <li className="nav-item">
                    <a className="nav-link disabled" style={{color : '#CBE4DE'}}>Disabled</a>
                </li>
            </ul>
            <button type="button" className="btn btn-light" onClick={login}>Log In</button>
            <button type="button" className="btn btn-primary mx-2" onClick={signup}>Sign Up</button>
            </div>
        </div>
    </nav>  
  )
}
