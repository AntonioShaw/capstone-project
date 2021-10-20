import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import HomeButton from './homebutton.jsx'
import UserHighScore from './UserHighScore.jsx'
import  Avatar from "react-avatar";
import  NavBar from "./NavBar.js";
import Leaderboard from "./Leaderboard.js";

function Profile(props) {
	
	
	return(
		<div id=" profile-page">
           <div id="top-container">
                <NavBar />
            </div> 
        <div id = 'bottom-container'>
            <div id="profile-container">
                <div id=" avatar-container">
                    <Avatar color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])} size="150"/>
                    

                </div>                    
                <div id='info-container'>
                    USERNAME or YADDA YADDA YADDA
                </div>
            </div>
            <div id="leaderboard-container">
                <Leaderboard />
            </div>    
        </div>
		Your current high score is <UserHighScore />
		<Link to={'/logout'}><Button variant="primary">Log Out</Button></Link>
		<Link to={'/deleteprofile'}><Button variant="danger">Delete Account</Button></Link>
		</div>

        
	)

}

export default Profile