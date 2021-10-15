import React from 'react'
// import { Container } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css'
import { ButtonGroup, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

//
// const handleClick = () => setLoading(true);


function HomePage() {
    const styling = {
        backgroundColor: 'rgba(255, 255, 255, .15)',
        backdropFilter: 'blur(5px)',
        color: 'black',
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
        <div className="HomePage">
            <NavBar />
            <div className="container">
                <Row>
                    <Col><button className="ProfileButton">Question Count</button></Col>
                    <Col><button className="ProfileButton">Your Ranking</button></Col>
                </Row>

                <Row className="HomeBlurb" style={styling}>
                    <p className="Instructions">
                        Welcome to QuizWiz, a fun trivia game where your knowledge of various topics 
                        can be put to the test. You can select from any one of twelve different trivia
                        categories ranging from topics across pop culture, entertainment, and academia.
                        <br/>
                        <br/>
                        Rack up as many correct answers as you can within the time limit to place on
                        the leaderboard and prove to everyone that you are the one, true QuizWiz!
                    </p>
                </Row>
                <div style={styling}>
                <Row>
                    <ButtonGroup className="ButtonGroup" vertical block style={{display: 'flex', alignItems: 'center', justifyContent: 'center',maxWidth: '100%'}}> 
                        <Link className="QuizLink" to={{ pathname: `/quiz`, query: { category: '9' } }}><Button className="QuizButton">General Information</Button></Link>
                        <Link className="QuizLink" to={{ pathname: `/quiz`, query: { category: '9' } }}><Button className="QuizButton">Books</Button></Link>
                        <Link className="QuizLink" to={{ pathname: `/quiz`, query: { category: '9' } }}><Button className="QuizButton">Movies</Button></Link>
                        <Link className="QuizLink" to={{ pathname: `/quiz`, query: { category: '9' } }}><Button className="QuizButton">TV</Button></Link>
                        <Link className="QuizLink" to={{ pathname: `/quiz`, query: { category: '9' } }}><Button className="QuizButton">Music</Button></Link>
                        <Link className="QuizLink" to={{ pathname: `/quiz`, query: { category: '9' } }}><Button className="QuizButton">Video Games</Button></Link>
                        <Link className="QuizLink" to={{ pathname: `/quiz`, query: { category: '9' } }}><Button className="QuizButton">Math</Button></Link>
                        <Link className="QuizLink" to={{ pathname: `/quiz`, query: { category: '9' } }}><Button className="QuizButton">Computers</Button></Link>
                        <Link className="QuizLink" to={{ pathname: `/quiz`, query: { category: '9' } }}><Button className="QuizButton">Geography</Button></Link>
                        <Link className="QuizLink" to={{ pathname: `/quiz`, query: { category: '9' } }}><Button className="QuizButton">Sports</Button></Link>
                        <Link className="QuizLink" to={{ pathname: `/quiz`, query: { category: '9' } }}><Button className="QuizButton">Celebrities</Button></Link>
                        <Link className="QuizLink" to={{ pathname: `/quiz`, query: { category: '9' } }}><Button className="QuizButton">Random</Button></Link>
                    </ButtonGroup>
                </Row>
                </div>
            </div>
        </div>
    )
}

export default HomePage