import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import HomeButton from './homebutton.jsx'
import UserHighScore from './UserHighScore.jsx'
function Profile(props) {
	
	
	return(
		<div>
		<HomeButton />
		<br />
		Hello!
		<br />
		Your current high score is <UserHighScore />
		<Link to={'/logout'}><Button variant="primary">Log Out</Button></Link>
		<Link to={'/deleteprofile'}><Button variant="danger">Delete Account</Button></Link>
		</div>
	)

}

export default Profile