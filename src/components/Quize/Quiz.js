import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Quiz = ({ quiz }) => {

     const { total, name, logo } = quiz;

     return (
          <div>
         
      
        <Col>
          <Card>
            <Card.Img variant="top" src={logo} className='w-100' />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      
   
     
          </div >
     );
};

export default Quiz;