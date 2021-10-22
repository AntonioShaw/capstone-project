import React from 'react'
// import { Container } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css'
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import { faAnkh, faBolt, faBook, faBrain, faBook, faBrain, faFilm, faFootballBall, faGamepad, faGlobeAmericas, faMouse, faMusic, faQuestion, faTv, } from '@fortawesome/free-solid-svg-icons';





//
// const handleClick = () => setLoading(true);


function HomePage() {
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
        minWidth: '325px',
    }
    return (
        <div>
            <NavBar id='navBar' />
            <div>
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
                <div>
                <Row className="ButtonContainer" style={styling}>
                    <ButtonGroup className="ButtonGroup" vertical block style={{display: 'flex', alignItems: 'center', justifyContent: 'center',maxWidth: '100%'}}> 
                        <Link className="QuizLink" to={{ pathname: `/quiz/9`}}>
                            <Button className="QuizButton"> <div className="QuizButtonContainer"> 
                                <FontAwesomeIcon icon={faBrain}/>
                                <div className="QuizButtonText">General Information</div></div>
                            </Button>
                        </Link>
                        <Link className="QuizLink" to={{ pathname: `/quiz/10`}}>
                            <Button className="QuizButton"> <div className="QuizButtonContainer"> 
                                <FontAwesomeIcon icon={faBook}/>
                                <div className="QuizButtonText">Books</div></div>
                            </Button>
                        </Link>
                        <Link className="QuizLink" to={{ pathname: `/quiz/11`}}>
                            <Button className="QuizButton"> <div className="QuizButtonContainer"> 
                                <FontAwesomeIcon icon={faFilm}/>
                                <div className="QuizButtonText">Movies</div></div>
                            </Button>
                        </Link>
                        <Link className="QuizLink" to={{ pathname: `/quiz/12`}}>
                            <Button className="QuizButton"> <div className="QuizButtonContainer"> 
                                <FontAwesomeIcon icon={faMusic}/>
                                <div className="QuizButtonText">Music</div></div>
                            </Button>
                        </Link>
                        <Link className="QuizLink" to={{ pathname: `/quiz/14`}}>
                            <Button className="QuizButton"> <div className="QuizButtonContainer"> 
                                <FontAwesomeIcon icon={faTv}/>
                                <div className="QuizButtonText">TV</div></div>
                            </Button>
                        </Link>
                        <Link className="QuizLink" to={{ pathname: `/quiz/15`}}>
                            <Button className="QuizButton"> <div className="QuizButtonContainer"> 
                                <FontAwesomeIcon icon={faGamepad}/>
                                <div className="QuizButtonText">Video Games</div></div>
                            </Button>
                        </Link>
                        <Link className="QuizLink" to={{ pathname: `/quiz/18`}}>
                            <Button className="QuizButton"> <div className="QuizButtonContainer"> 
                                <FontAwesomeIcon icon={faMouse}/>
                                <div className="QuizButtonText">Computers</div></div>
                            </Button>
                        </Link>
                        <Link className="QuizLink" to={{ pathname: `/quiz/20`}}>
                            <Button className="QuizButton"> <div className="QuizButtonContainer"> 
                                <FontAwesomeIcon icon={faAnkh}/>
                                <div className="QuizButtonText">Mythology</div></div>
                            </Button>
                        </Link>
                        <Link className="QuizLink" to={{ pathname: `/quiz/21`}}>
                            <Button className="QuizButton"> <div className="QuizButtonContainer"> 
                                <FontAwesomeIcon icon={faFootballBall}/>
                                <div className="QuizButtonText">Sports</div></div>
                            </Button>
                        </Link>
                        <Link className="QuizLink" to={{ pathname: `/quiz/22`}}>
                            <Button className="QuizButton"> <div className="QuizButtonContainer"> 
                                <FontAwesomeIcon icon={faGlobeAmericas}/>
                                <div className="QuizButtonText">Geography</div></div>
                            </Button>
                        </Link>
                        <Link className="QuizLink" to={{ pathname: `/quiz/29`}}>
                            <Button className="QuizButton"> <div className="QuizButtonContainer"> 
                                <FontAwesomeIcon icon={faBolt}/>
                                <div className="QuizButtonText">Comics</div></div>
                            </Button>
                        </Link>
                        <Link className="QuizLink" to={{ pathname: `/quiz/100`}}>
                            <Button className="QuizButton"> <div className="QuizButtonContainer"> 
                                <FontAwesomeIcon icon={faQuestion}/>
                                <div className="QuizButtonText">Random</div></div>
                            </Button>
                        </Link>
                    </ButtonGroup>
                </Row>
                </div>
            </div>
        </div>
    )
}

export default HomePage