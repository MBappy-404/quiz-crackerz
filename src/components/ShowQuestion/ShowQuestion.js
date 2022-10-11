import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { toast } from 'react-toastify';
import './ShowQuestion.css'
import { EyeFill } from 'react-bootstrap-icons';
const ShowQuestion = ({ quiz }) => {

     const { correctAnswer, question, options } = quiz;
     const [answer, setAnswer] = useState([]);
   

     console.log(correctAnswer);


     const handleBreakTime = (event) => {
          const correct = (event.target.innerText);

          if (correct === correctAnswer) {
               // alert('success')
               toast.success('Correct Answer', { autoClose: 1500 })
                

          }
          else {
               toast.error('Wrong Answer', { autoClose: 1500 })
          }


     }

     const showAnswer = () => {
          const correct = correctAnswer;
          setAnswer(correct);

          toast.success(<h5>{correct}</h5>,{ autoClose: 3500 });


     }



     return (
          <div>
               <Card className="text-center m-3 mb-5">
                    <Card.Header className='d-flex justify-content-between'>
                          <h4>Quiz : {question.replace(/(<([^>]+)>)/ig, '')}</h4>
                          <Button onClick={showAnswer} variant='light'><EyeFill color="blue" size={20} /></Button>
                           </Card.Header>
                    <Card.Body className=''>

                         {
                              options.map(option => <Button onClick={(event) => handleBreakTime(event)} md={6} className='w-75 m-auto p-4  mb-2' variant="primary"> {option}</Button>

                              )
                         }

                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
               </Card>
          </div>
     );
};

export default ShowQuestion;