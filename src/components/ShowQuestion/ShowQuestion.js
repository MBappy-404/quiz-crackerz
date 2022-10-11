import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const ShowQuestion = ({ quiz }) => {

     const { correctAnswer, question, options } = quiz;

     // console.log(quiz);


     for(const option of options){

     
          console.log(option);
         
          

     }

     // const {correctAnswer,} = question;
     return (
          <div>
               <Card className="text-center">
                    <Card.Header> <h3>Quiz : {question}</h3> </Card.Header>
                    <Card.Body className=''>
                         <Button md={6} className='w-75 m-auto p-3 mb-2' variant="primary">
                              
                         </Button>



                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
               </Card>
          </div>
     );
};

export default ShowQuestion;