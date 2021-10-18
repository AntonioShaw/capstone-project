import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../App.css';



function StartQuiz(props) {
	const [currentquestion, setcurrentquestion] = useState("")
	let [questioncounter, setquestioncounter] = useState(0)
	const [questions, setquestions] = useState()
	const [correctanswer, setcorrectanswer] = useState(null)
	const [answers, setanswers] = useState([])
	let [quizfinished, setquizfinished] = useState(false)
	let currentanswers = []
	let [score, setcorrectquestions] = useState([])
	
	function getquestions(props) {
		fetch(`https://quizwiz.glitch.me/quiz?category=9`)
		.then(response => response.json())
		.then(result => {
			setquestions([...result])
			playquiz()
		})
		.catch(error => console.log('error', error))
	}
	
	function gamesOver() {
		if(questioncounter == 10){
			console.log("Your score is: ")
			console.log(score.length)
			//setquizfinished(true)
		}
	}

	
	function playquiz() {
		if(questioncounter == 10){
			gamesOver()
		}
		currentanswers = []
		setcurrentquestion((questions[questioncounter].question).replace(/(&quot;)/g,"\"").replace(/(&shy;)/g,"-").replace(/(&#039;)/g,"'").replace(/(&oacute;)/g,"ó").replace(/(&rsquo;)/g,"’").replace(/(&ldquo;)/g,"“").replace(/(&hellip;)/g,"...").replace(/(&rdquo;)/g, "\""))
		setcorrectanswer((questions[questioncounter].correct_answer).replace(/(&quot;)/g,"\"").replace(/(&shy;)/g,"-").replace(/(&#039;)/g,"'").replace(/(&oacute;)/g,"ó").replace(/(&rsquo;)/g,"’").replace(/(&ldquo;)/g,"“").replace(/(&hellip;)/g,"...").replace(/(&rdquo;)/g, "\""))
		
		for(let i=0; i<3; i++){
			currentanswers.push((questions[questioncounter].incorrect_answers[i]).replace(/(&quot;)/g,"\"").replace(/(&shy;)/g,"-").replace(/(&#039;)/g,"'").replace(/(&oacute;)/g,"ó").replace(/(&rsquo;)/g,"’").replace(/(&ldquo;)/g,"“").replace(/(&rdquo;)/g, "\"").replace(/(&hellip;)/g, "..."))
		}
		currentanswers.push((questions[questioncounter].correct_answer).replace(/(&quot;)/g,"\"").replace(/(&shy;)/g,"-").replace(/(&#039;)/g,"'").replace(/(&oacute;)/g,"ó").replace(/(&rsquo;)/g,"’").replace(/(&ldquo;)/g,"“").replace(/(&rdquo;)/g, "\"").replace(/(&hellip;)/g, "..."))
		setanswers(currentanswers.sort(() => Math.random() - 0.5))

		

		setquestioncounter(questioncounter+=1)	
	}
	
	function checkAnswer(i) {
		if (answers[i] == correctanswer){
			console.log("right answer!")
			setcorrectquestions(score => [...score, "correct"])
			console.log(score.length)
			playquiz()
		}else{
			console.log("you dummy")
			console.log(score.length)
			playquiz()
		}
	}

	
	useEffect(() => {
		console.log(score)
			getquestions()
			
		return (
			<div>
			{currentquestion}
			</div>
		)
	},[quizfinished])
	
	return (
		<div>
		{currentquestion}
		<Button onClick={() => playquiz()}>Next question</Button>
		<br /><br /><br />
		<li><Button onClick={() => checkAnswer(0)}>{answers[0]}</Button></li>
		<li><Button onClick={() => checkAnswer(1)}>{answers[1]}</Button></li>
		<li><Button onClick={() => checkAnswer(2)}>{answers[2]}</Button></li>
		<li><Button onClick={() => checkAnswer(3)}>{answers[3]}</Button></li>
		</div>
	)
}

export default StartQuiz