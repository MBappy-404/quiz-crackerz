
import { Button, Card } from 'react-bootstrap';
import { toast } from 'react-toastify';
import './ShowQuestion.css'
import { EyeFill } from 'react-bootstrap-icons';
const ShowQuestion = ({ quiz }) => {

     const { correctAnswer, question, options } = quiz;
     // console.log(correctAnswer);


     const handleAnswer = (option) => {
          const correct = (option.target.innerText);
          

          if (correct === correctAnswer) {
               // alert('success')
               toast.success('Correct Answer', { autoClose: 1500 })

               
          }
          else {
               toast.error('Wrong Answer', { autoClose: 1500 })
               console.log(correct, correctAnswer);
          }
     };
     const showAnswer = () => {
          const correct = correctAnswer;
          toast.success(<h5>{correct}</h5>, { autoClose: 3500 });
     };
     return (
          <div>
                
                  
                         <Card className="text-center mb-5">
                              <Card.Header className='d-flex justify-content-between'>
                                   <h5> <span className='text-primary'>Quiz Name :</span> {question.replace(/(<([^>]+)>)/ig, '')}</h5>
                                   <Button onClick={showAnswer} variant='light'><EyeFill color="blue" size={20} /></Button>
                              </Card.Header>
                              <Card.Body className='option-btn'>
                                   {
                                        options.map(option => <Button xs={10} sm={10} onClick={(option) => handleAnswer(option)} md={6} className='w-50 m-auto p-3 btn rounded-pill mb-2' variant="primary"> {option}</Button>

                                        )
                                   }
                              </Card.Body>
                              <Card.Footer className="text-muted">2 days ago</Card.Footer>
                         </Card>
                   
             
          </div>
     );
};

export default ShowQuestion;