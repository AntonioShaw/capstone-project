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

//
// const handleClick = () => setLoading(true);


function HomePage() {
    return (
        <div className="HomePage">
            <NavBar />
            <div className="container">
                <Row>
                    <Col><button className="ProfileButton">Question Count</button></Col>    
                    <Col><button className="ProfileButton">Your Ranking</button></Col>
                </Row>
                
                <Row className="HomeBlurb">
                    <p className="Instructions">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. 
                    </p>
                </Row>

                <Row>
                    <ButtonGroup className="ButtonGroup" vertical>
                        <Link className="QuizLink" to={{pathname: `/quiz`, query:{category: '9'}}}><Button className="QuizButton">General Information</Button></Link>
                        <Link className="QuizLink" to={{pathname: `/quiz`, query:{category: '9'}}}><Button className="QuizButton">Books</Button></Link>
                        <Link className="QuizLink" to={{pathname: `/quiz`, query:{category: '9'}}}><Button className="QuizButton">Movies</Button></Link>
                        <Link className="QuizLink" to={{pathname: `/quiz`, query:{category: '9'}}}><Button className="QuizButton">TV</Button></Link>
                        <Link className="QuizLink" to={{pathname: `/quiz`, query:{category: '9'}}}><Button className="QuizButton">Music</Button></Link>
                        <Link className="QuizLink" to={{pathname: `/quiz`, query:{category: '9'}}}><Button className="QuizButton">Video Games</Button></Link>
                        <Link className="QuizLink" to={{pathname: `/quiz`, query:{category: '9'}}}><Button className="QuizButton">Math</Button></Link>
                        <Link className="QuizLink" to={{pathname: `/quiz`, query:{category: '9'}}}><Button className="QuizButton">Computers</Button></Link>
                        <Link className="QuizLink" to={{pathname: `/quiz`, query:{category: '9'}}}><Button className="QuizButton">Geography</Button></Link>
                        <Link className="QuizLink" to={{pathname: `/quiz`, query:{category: '9'}}}><Button className="QuizButton">Sports</Button></Link>
                        <Link className="QuizLink" to={{pathname: `/quiz`, query:{category: '9'}}}><Button className="QuizButton">Celebrities</Button></Link>
                        <Link className="QuizLink" to={{pathname: `/quiz`, query:{category: '9'}}}><Button className="QuizButton">Random</Button></Link>
                    </ButtonGroup>     
                </Row>
            </div>   
        </div>
    )
}

export default HomePage