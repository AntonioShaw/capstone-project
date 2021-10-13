import React from 'react'
import { Container } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css'
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';



// const handleClick = () => setLoading(true);


export default function HomePage() {
    return (
        <>
        <Container className="HomePage">
            <ButtonGroup className="ProfileBar">
                <button className="ProfileButton">Question Count</button>
                <button className="ProfileButton">Your Ranking</button>
            </ButtonGroup>
        <br />
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
        </Container>   
        </>
    )
}
