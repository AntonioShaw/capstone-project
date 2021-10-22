import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import HomeButton from './homebutton.jsx'
import UserHighScore from './UserHighScore.jsx'
import  Avatar from "react-avatar";
import  NavBar from "./NavBar.js";
import Leaderboard from "./Leaderboard.js";



function Profile(props) {

	  const [myScore, setMyScore] = useState(null)
	  const [leaderboard, setLeaderboard] = useState([])
		const [wizardName, setwizardName] = useState("")



   function getuserscore(wizardName){
		 console.log("debugging")
        fetch(`https://quiz-wiz-server.glitch.me/api/userscore?username=${wizardName}`)
        .then(response => response.json())
        .then(myScore => {
          console.log(myScore.score)
					localStorage.setItem("wizardName",wizardName )
          setMyScore(myScore.score)
        })
    }



  
  useEffect(() => {
       getLeaderboard() 
			 setwizardName(props.match.params.username)
			 getuserscore(props.match.params.username)
    }, [])

  const getLeaderboard = () => {
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
    Hello {wizardName}<br></br>
    Your current high score is {myScore}
    </div>
    <Link to={'/'}><Button variant="primary">Log Out</Button></Link>
    
    </div>
    <div id="top-ten">
    {leaderboardList}
    </div>    
    </div>
    
    
    </div>
    
    
  )
  
}

export default Profile