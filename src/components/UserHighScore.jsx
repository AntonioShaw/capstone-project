import React, {useState, useEffect} from 'react';
import '../App.css';



function UserHighScore(props) {
	
	let [userhighscore, sethighscore] = useState(null)
	let [wizardName, setwizardName] = useState("");
	
	function gethighscore(id) {
		setwizardName(localStorage.getItem ('wizardName'))
		fetch(`https://quiz-wiz-server.glitch.me/api/userscore?username=${wizardName}`)
		.then(response => response.json())
		.then(result => {
			console.log(result.score)
			sethighscore(result.score)
		})
		.catch(error => console.log('error', error))
	}
	
	useEffect(() => {
			gethighscore()
			
		return (
			<div>
			{userhighscore}<br></br>
		
			</div>
		)
	},[])
	
	return (
		<div>
		{userhighscore}
		</div>
	)
}

export default UserHighScore