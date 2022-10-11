import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowQuestion from '../ShowQuestion/ShowQuestion';
import { Col, Row } from 'react-bootstrap';

const Question = () => {

     const quizquestion = useLoaderData();
     const questions = quizquestion.data;
     const showQuiz = questions.questions;
     const { name, total } = questions;
     // console.log(questions.questions);
     // console.log(showQuiz);
     return (
          <div>

               <Row>
                    <Col md={8} xs={10} className='d-flex   justify-content-between m-auto mt-4'>
                         <h4>Quiz Topic: {name}</h4>
                         <h5>Total Quiz: {total}</h5>
                    </Col>
               </Row>



               <Row className='d-flex justify-content-center mt-5'>
                    <Col md={8} xs={10}>
                         {
                              showQuiz.map( quiz => <ShowQuestion
                              
                                   key={quiz.id}
                                   quiz={quiz}
                              >

                              </ShowQuestion>)
                         }
                    </Col>
               </Row>
          </div>
     );
};

export default Question;