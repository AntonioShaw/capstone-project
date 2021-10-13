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
            <ButtonGroup>
                <button>Question Count</button>
                <button>Your Ranking</button>
            </ButtonGroup>
        <br />
        <ButtonGroup className="ButtonGroup" vertical>
           <Button className="QuizButton">General Information</Button>
           <Button>Books</Button>   
           <Button>Movies</Button>   
           <Button>TV</Button>   
           <Button>Music</Button>   
           <Button>Video Games</Button> 
           <Button>Math</Button> 
           <Button>Computers</Button> 
           <Button>Geography</Button> 
           <Button>Sports</Button> 
           <Button>Celebrities</Button> 
           <Button>Random</Button> 
        </ButtonGroup>     
        </Container>   
        </>
    )
}
