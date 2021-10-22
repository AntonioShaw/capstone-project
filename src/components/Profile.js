import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import HomeButton from './homebutton.jsx'
import UserHighScore from './UserHighScore.jsx'
import  Avatar from "react-avatar";
import  NavBar from "./NavBar.js";
import Leaderboard from "./Leaderboard.js";



function Profile(props) {
	
//     const [myScore, setMyScore] = useState([])

  
//  useEffect(() => { getMyScore() }, [])
//  const name = localStorage.getItem('name')
//   const getMyScore = () => {
    
//    const username = name
//     console.log(name)
//     fetch(`https://quiz-wiz-server.glitch.me/api/userscore/${username}`)
//       .then(response => response.json())
//       .then(myScore => {
//         console.log(myScore)

//         setMyScore(myScore)
//       })
//   }

  const [leaderboard, setLeaderboard] = useState([])

  
  useEffect(() => { getLeaderboard() }, [])

  const getLeaderboard = (props) => {
    fetch('https://quiz-wiz-server.glitch.me/api/highscore')
      .then(response => response.json())
      .then(result => {
        console.log(result[0])
        setLeaderboard(result)
        console.log(leaderboard)
      }
      )
  }
  
  const leaderboardList = leaderboard.map((score,index) => {
      return(
      <ul key={index} >
      <h1>Wizard:{score.username}</h1>
      <h3>High Score:{score.score}</h3>
      </ul>
      )

})

	
	return(
		<div id=" profile-page">
           <div id="top-container">
                <NavBar />
            </div> 
        <div id = 'bottom-container'>
            <div id="profile-container">
                <div id=" avatar-container">
                <a  href="https://quizwiz.me">
                <a href="https://quizwiz.me">
                    <img id="avatar" src="/1myavatar.jpg" alt=""  style={{ backgroundColor: "blue" }}></img>
                </a>
                
                </a>
                </div>                    
                <div id='info-container'>
                   Hello "Wizard"<br></br>
                   Your current high score is "myScore"
                </div>
                <Link to={'/logout'}><Button variant="primary">Log Out</Button></Link>
		<Link to={'/deleteprofile'}><Button variant="danger">Delete Account</Button></Link>
            </div>
            <div id="top-ten">
              {leaderboardList}
            </div>    
        </div>
		
		
		</div>

        
	)

}

export default Profile