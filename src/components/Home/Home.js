import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quize/Quiz';
import './Home.css'
const Home = () => {
     const quizeData = useLoaderData();
     const quizes = quizeData.data;
     // console.log(qize);
     return (
          <div>

               <div className="hero">
                    <Carousel>
                         <img src="https://www.kindpng.com/picc/m/285-2850846_quiz-tiles-letters-red-game-test-scrabble-prepare.png"
                              className='w-100'
                              alt="" />
                    </Carousel>
               </div>

               <div className='quiz-container'>

                    <Row  className='d-flex   justify-content-space-between'>
                         <Col xs={12} md={6}>
                              <div className="quiz-item" >
                                  <Row xs={1} md={2} className='m-3'>
                                  {
                                        quizes.map(quiz => <Quiz
                                             key={quiz.id}
                                             quiz={quiz}
                                        ></Quiz>)
                                   }
                                  </Row>
                              </div>
                         </Col>

                         <Col xs={12} md={6}>
                         
                         <div>
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmaKuvf2kYPI6N_sRTNyxhIU39m4PJrD2JZQ&usqp=CAU" alt="" className='w-100' />
                         </div></Col>
                    </Row>



               </div>


          </div>
     );
};

export default Home;