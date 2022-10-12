import React from 'react';
import { Col, Row } from 'react-bootstrap';
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

               <div className='title text-danger m-3 text-center'>
                    <h2>Welcome Quiz Hunter</h2>
                    <h5> Test Your Knowledge of Learning and Development Your Skill</h5>

               </div>

               <div className="hero d-flex container justify-content-center">
                    <img className='w-75 hero-img' src="https://img.freepik.com/premium-vector/online-live-test-exam-with-people-study-computer-desk-table-with-modern-isometric-style-illustration_82472-642.jpg" alt="" />
               </div>

               {/* QUIZ SECTION  */}

               <div className='quiz-container m-5'>


                    <Col>
                         <div className='text-danger play m-5'>
                              <h1> GET START QUIZ ! </h1>
                         </div>
                    </Col>

                    <Col>

                         <div className="quiz-item container" >
                              <Row xs={1} md={2} className=''>
                                   {
                                        quizes.map(quiz => <Quiz
                                             key={quiz.id}
                                             quiz={quiz}
                                        ></Quiz>)
                                   }
                              </Row>
                         </div>
                    </Col>

               </div>
          </div>
     );
};

export default Home;