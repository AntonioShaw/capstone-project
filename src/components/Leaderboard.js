import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css'
import { ButtonGroup, Container, Row, Col, Carousel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';




function Leaderboard(props) {
	const styling = {
		backgroundColor: 'rgba(255, 255, 255, .15)',
		backdropFilter: 'blur(5px)',
		color: 'navy',
		flexDirection: 'row',
		display: 'block',
		marginLeft: 'auto',
		marginRight: 'auto',
		textAlign: 'left',
		opacity: '.85',
		border: '2px solid black',
		width: 'auto',
		height: 'auto',
		padding: '10px',
		minWidth: '325px'
	}
	const [leaderboard, setLeaderboard] = useState([])

	useEffect(() => { getLeaderboard() }, [])
	const getLeaderboard = (props) => {
		fetch('https://quiz-wiz-server.glitch.me/api/highscore')
			.then(response => response.json())
			.then(result => {
				console.log(result)
				setLeaderboard(result)
				console.log(leaderboard)
			}
			)
	}

	const leaderboardList = leaderboard.map((score, index) => {
		return (
			<ul key={index} >
				<h1>Wizard:{score.username}</h1>
				<h3>High Score:{score.score}</h3>
			</ul>
		)
	})
	return (


		<div id="leaderboard-body">
			<NavBar />
			<div id="leaderboard-title">LeaderBoard</div>
			<Row className="HomeBlurb" style={styling}>
				<Carousel fade>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="leaderboardslider1.png" fluid
							alt="First slide"
						/>
						<Carousel.Caption id="carousel-caption">
							<h3>First Place QuizWiz</h3>
							<p>You are the Gandalf of all the quiz wizards, a true Quizard!</p>
							{leaderboardList}
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="leaderboardslider1.png" fluid
							alt="Second slide"
						/>
						<Carousel.Caption id="carousel-caption">
							<h3>Second Place QuizWiz</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							{leaderboardList}
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="leaderboardslider1.png" fluid
							alt="Third slide"
						/>
						<Carousel.Caption id="carousel-caption">
							<h3>Third Place QuizWiz</h3>
							<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
							{leaderboardList}
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</Row>
		</div>
	)
}
export default Leaderboard