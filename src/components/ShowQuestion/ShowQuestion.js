import { Button, Card } from 'react-bootstrap';
import './ShowQuestion.css'

const ShowQuestion = ({ quiz }) => {

     const { correctAnswer, question, options } = quiz;

   console.log(correctAnswer);
    
     
     const handleBreakTime = (event) => {
          const correct =(event.target.innerText);

          if( correct === correctAnswer){
               alert('success')
          
          
          }
          else{
               alert('wrong')
          }
       

     }


   
     return (
          <div>
               <Card className="text-center mb-5">
                    <Card.Header className=''> <h4>Quiz : {question.replace(/(<([^>]+)>)/ig, '')}</h4> </Card.Header>
                    <Card.Body className=''>
                         
                      {
                         options.map( option => <Button onClick={(event) => handleBreakTime(event)} md={6} className='w-75 m-auto p-4  mb-2' variant="primary"> {option}</Button>
                         )
                      }

                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
               </Card>
          </div>
     );
};

export default ShowQuestion;