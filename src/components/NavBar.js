import React, { useState } from "react"
import '../App.css'
import { NavLink } from "react-router-dom";
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"



function Navbar() {

    const [navbarOpen, setNavbarOpen] = useState(false)

    //change button from off to on at on click
    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }
    const closeMenu = () => {
        setNavbarOpen(false)
    }


    return (
        <nav className="navBar">
           
            <button id="hamburger"onClick={handleToggle}>{navbarOpen ? (
                <MdClose style={{ color: "#3fffd2", width: "40px", height: "40px" }} />) : (
                <FiMenu style={{ color: "#3fffd2", width: "40px", height: "40px" }} />
            )}</button>
            
            <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
            <NavLink to="/home" className='inactive'id="a">Home</NavLink>
            <NavLink to="/leaderboard" className='noShow'id='a' >Learderboard</NavLink>
            <NavLink to="/profile" className='inactive'id='a' >Profile</NavLink>
       
            </ul>
        </nav>
    )
}

export default Navbar