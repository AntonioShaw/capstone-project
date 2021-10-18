import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css'
import { ButtonGroup, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';



function Leaderboard() {
    const styling = {
        backgroundColor: 'rgba(255, 255, 255, .15)',
        backdropFilter: 'blur(5px)',
        color: 'silver',
        flexDirection: 'column',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'left',
        opacity: '.85',
        border: '2px solid black',
        width: '35%',
        padding: '10px',
        minWidth: '325px'
    }
    return (
        <>
            <NavBar />
            <div className = 'container'>
                <Row>
                    <Col><Button className="ProfileButton">Question Count</Button></Col>
                    <Col><Button className="ProfileButton">Your Ranking</Button></Col>
                </Row>

                <Row className="HomeBlurb" style={styling}>
                    <p className="Instructions">
                        Welcome to QuizWiz, a fun trivia game where your knowledge of various topics
                        can be put to the test. You can select from any one of twelve different trivia
                        categories ranging from topics across pop culture, entertainment, and academia.
                        <br />
                        <br />
                        Rack up as many correct answers as you can within the time limit to place on
                        the leaderboard and prove to everyone that you are the one, true QuizWiz!
                    </p>
                </Row>
            </div>
        </>
    )
    }

export default Leaderboard