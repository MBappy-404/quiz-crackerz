import React from 'react';
import { Button, Card, Col, } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Quiz.css'

const Quiz = ({ quiz }) => {

     const {id ,total, name, logo } = quiz;
     const navigate = useNavigate()

     const handleQuiz = () =>{
          navigate(`/quiz/${id}`)
     }

     return (
          <div>


               <Col>
                    <Card className='mb-3'>
                         <Card.Img variant="top" src={logo} className='w-100' />
                         <Card.Body className='d-flex  justify-content-between align-items-center m-2'>
                              <Card.Title> {name} </Card.Title>
                              <h6>Total Quiz: {total}</h6>
                              <Button onClick={handleQuiz} variant="outline-primary">Start Quiz</Button>
                         </Card.Body>
                    </Card>
               </Col>



          </div >
     );
};

export default Quiz;