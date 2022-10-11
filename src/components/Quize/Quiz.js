import React from 'react';
import { Button, Card, Col, } from 'react-bootstrap';
import './Quiz.css'

const Quiz = ({ quiz }) => {

     const { total, name, logo } = quiz;

     return (
          <div>


               <Col>
                    <Card className='mb-3'>
                         <Card.Img variant="top" src={logo} className='w-100' />
                         <Card.Body className='d-flex justify-content-between align-items-center m-2'>
                              <Card.Title>{name}</Card.Title>
                              <Button variant="outline-primary">Start Quiz</Button>
                         </Card.Body>
                    </Card>
               </Col>



          </div >
     );
};

export default Quiz;