import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../App.css';
import NavBar from './NavBar';
import { ButtonGroup} from 'react-bootstrap';




function StartQuiz() {
	const params = useParams();

	const [currentquestion, setcurrentquestion] = useState("")
	let [questioncounter, setquestioncounter] = useState(0)
	const [questions, setquestions] = useState([])
	const [correctanswer, setcorrectanswer] = useState(null)
	const [answers, setanswers] = useState([])
	let [quizfinished, setquizfinished] = useState(false)
	let currentanswers = []
	let [currentscore, setcurrentscore] = useState(0)
	
	function getquestions() {
		
		fetch(`https://quiz-wiz-server.glitch.me/quiz/${params['category']}`)
		.then(response => response.json())
		.then(result => {
			setquestions([...result])
			playquiz()
		})
		.catch(error => console.log('error', error))
	}
	
	function gamesOver() {
		console.log("Your score is: ")
		console.log(currentscore)
		//setquizfinished(true)
	}

	
	function playquiz() {
		if(questioncounter === 10){
			setquizfinished(true)
		}else{
			currentanswers = []
			setcurrentquestion((questions[questioncounter].question).replace(/(&quot;)/g,"\"").replace(/(&shy;)/g,"-").replace(/(&#039;)/g,"'").replace(/(&oacute;)/g,"ó").replace(/(&rsquo;)/g,"’").replace(/(&ldquo;)/g,"“").replace(/(&hellip;)/g,"...").replace(/(&rdquo;)/g, "\""))
			setcorrectanswer((questions[questioncounter].correct_answer).replace(/(&quot;)/g,"\"").replace(/(&shy;)/g,"-").replace(/(&#039;)/g,"'").replace(/(&oacute;)/g,"ó").replace(/(&rsquo;)/g,"’").replace(/(&ldquo;)/g,"“").replace(/(&hellip;)/g,"...").replace(/(&rdquo;)/g, "\""))
			
			for(let i=0; i<3; i++){
				currentanswers.push((questions[questioncounter].incorrect_answers[i]).replace(/(&quot;)/g,"\"").replace(/(&shy;)/g,"-").replace(/(&#039;)/g,"'").replace(/(&oacute;)/g,"ó").replace(/(&rsquo;)/g,"’").replace(/(&ldquo;)/g,"“").replace(/(&rdquo;)/g, "\"").replace(/(&hellip;)/g, "..."))
			}
			currentanswers.push((questions[questioncounter].correct_answer).replace(/(&quot;)/g,"\"").replace(/(&shy;)/g,"-").replace(/(&#039;)/g,"'").replace(/(&oacute;)/g,"ó").replace(/(&rsquo;)/g,"’").replace(/(&ldquo;)/g,"“").replace(/(&rdquo;)/g, "\"").replace(/(&hellip;)/g, "..."))
			setanswers(currentanswers.sort(() => Math.random() - 0.5))
		}
	}
	
	function checkAnswer(i) {
		if (answers[i] === correctanswer){
			console.log("right answer!")
			setcurrentscore(currentscore+1)
		}else{
			console.log("you dummy")
			console.log(currentscore)
		}
		console.log(currentscore)
		setquestioncounter(questioncounter+=1)
		playquiz()

	}

	
	useEffect(() => {
		console.log(currentscore)
		if (questions.length === 0){
			getquestions()
		}
		if ( quizfinished === true){
			gamesOver()
		}			
		return (
			<div>
			{currentquestion}
			</div>
		)
	},[quizfinished, currentscore])
	
	return (
		<div>
		<div>
			<NavBar />
		</div>
		{currentquestion}
		{ correctanswer !=null ? null : <Button onClick={() =>  playquiz()}>Start Quiz </Button>}  
		
		<br /><br /><br />
		<ButtonGroup className="ButtonGroup" vertical block style={{display: 'flex', alignItems: 'center', justifyContent: 'center',maxWidth: '100%'}}> 
		<Button onClick={() => checkAnswer(0)}>{answers[0]}</Button>
		<Button onClick={() => checkAnswer(1)}>{answers[1]}</Button>
		<Button onClick={() => checkAnswer(2)}>{answers[2]}</Button>
		<Button onClick={() => checkAnswer(3)}>{answers[3]}</Button>
		</ButtonGroup>
		</div>
	)
}

export default StartQuiz
