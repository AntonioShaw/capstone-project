import React from 'react'
// import { Container } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css'
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';



// const handleClick = () => setLoading(true);


function HomePage() {
    return (
        <div className="HomePage">
            <div class="container">
                <Row>
                    <Col><button className="ProfileButton">Question Count</button></Col>    
                    <Col><button className="ProfileButton">Your Ranking</button></Col>
                </Row>

                <Row className="HomeBlurb">
                    <p className="Instructions">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. 
                    </p>
                </Row>

                <Row>
                    <ButtonGroup className="ButtonGroup" vertical>
                        <Button className="QuizButton">General Information</Button>
                        <Button className="QuizButton">Books</Button>   
                        <Button className="QuizButton">Movies</Button>   
                        <Button className="QuizButton">TV</Button>   
                        <Button className="QuizButton">Music</Button>   
                        <Button className="QuizButton">Video Games</Button> 
                        <Button className="QuizButton">Math</Button> 
                        <Button className="QuizButton">Computers</Button> 
                        <Button className="QuizButton">Geography</Button> 
                        <Button className="QuizButton">Sports</Button> 
                        <Button className="QuizButton">Celebrities</Button> 
                        <Button className="QuizButton">Random</Button> 
                    </ButtonGroup>     
                </Row>
            </div>   
        </div>
    )
}

export default HomePage