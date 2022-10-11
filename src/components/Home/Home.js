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
               {/* HERO SECTION  */}

               <div className="hero d-flex justify-content-center">
                  <img className='w-50' src="https://img.freepik.com/premium-vector/online-live-test-exam-with-people-study-computer-desk-table-with-modern-isometric-style-illustration_82472-642.jpg" alt="" />
               </div>

               {/* QUIZ SECTION  */}

               <div className='quiz-container m-5'>

                    <div>
                         <Col>
                              <div className='text-danger play m-5'>
                                   <h1>Are You Ready To Play Quiz ! </h1>
                              </div>
                         </Col>
                    </div>

                    <Row className='d-flex align-items-center  justify-content-space-between'>
                         <Col xs={12} md={6}>
                              <div className=''>
                                   <img src='https://www.malwarebytes.com/blog/images/uploads/2018/12/shutterstock_1214717467.jpg' alt="" className='w-100 mb-5' />
                              </div>
                         </Col>

                         <Col xs={12} md={6} >

                              <div className="quiz-item" >
                                   <Row xs={1} md={2} className='d-flex justify-content-center'>
                                        {
                                             quizes.map(quiz => <Quiz
                                                  key={quiz.id}
                                                  quiz={quiz}
                                             ></Quiz>)
                                        }
                                   </Row>
                              </div>
                         </Col>
                    </Row>
               </div>
          </div>
     );
};

export default Home;