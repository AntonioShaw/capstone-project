import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../App.css';
import NavBar from './NavBar';



function StartQuiz(props) {
	const [currentquestion, setcurrentquestion] = useState("")
	let [questioncounter, setquestioncounter] = useState(0)
	const [questions, setquestions] = useState()
	const [correctanswer, setcorrectanswer] = useState(null)
	let [quizfinished, setquizfinished] = useState(false)
	let score=0
	
	function getquestions(props) {
		console.log(props)
		fetch(`https://quizwiz.glitch.me/quiz?category=9`)
		.then(response => response.json())
		.then(result => {
			console.log(result)
			setquestions([...result])
			console.log(questions)
			playquiz()
		})
		.catch(error => console.log('error', error))
	}
	
	
	
	function playquiz() {
		let currentanswers = []
		setcurrentquestion((questions[questioncounter].question).replace(/(&quot\;)/g,"\"").replace(/(&shy\;)/g,"-").replace(/(&#039\;)/g,"'").replace(/(&oacute\;)/g,"ó").replace(/(&rsquo\;)/g,"’").replace(/(&ldquo\;)/g,"“"))
		setcorrectanswer((questions[questioncounter].correct_answer).replace(/(&quot\;)/g,"\"").replace(/(&shy\;)/g,"-").replace(/(&#039\;)/g,"'").replace(/(&oacute\;)/g,"ó").replace(/(&rsquo\;)/g,"’").replace(/(&ldquo\;)/g,"“"))
		

		for(let i=0; i<3; i++){
			currentanswers.push((questions[questioncounter].incorrect_answers[i]).replace(/(&quot\;)/g,"\"").replace(/(&shy\;)/g,"-").replace(/(&#039\;)/g,"'").replace(/(&oacute\;)/g,"ó").replace(/(&rsquo\;)/g,"’").replace(/(&ldquo\;)/g,"“"))
		}
		currentanswers.push(questions[questioncounter].correct_answer)
		console.log(currentanswers.sort())
		console.log(questioncounter)
		
		if(questioncounter == 9){
			console.log("should be finished!")
			//setquizfinished(true)
		}
		setquestioncounter(questioncounter+=1)


		
	}

	
	useEffect(() => {
			getquestions()
			
		return (
			<div>
			{currentquestion}
			</div>
		)
	},[quizfinished])
	
	return (
		<div>
			<NavBar />
		<div>
		{currentquestion}
		{questions == null ? <Button onClick={() => playquiz()}>Press to start</Button> : <Button onClick={() => playquiz()}>Next question</Button>	}
		</div>
		</div>
	)
}

export default StartQuiz