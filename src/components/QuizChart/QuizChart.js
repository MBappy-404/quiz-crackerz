import React from 'react';
import { Col } from 'react-bootstrap';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, } from 'recharts';

const QuizChart = () => {
     const data = [
          {
               topic: 'React',
               id:1,
               quiz: 8,
          },
          {
               topic: 'JavaScript',
               id:2,
               quiz:9,
          },
          {
               topic: 'CSS',
               id:3,
               quiz: 8,
          },
          {
               topic: 'Git',
               id:4,
               quiz: 11,
          },
         
     ];
     return (
          <div className='m-auto'>

               <div>
                    <h2 className='text-primary mb-5'>Quiz Chart</h2>
               </div>

               <Col sm={10} xs={12} >
                   <div className='d-flex justify-content-center mt-3'>
                   <LineChart width={500} height={400} data={data}>
                         <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                         <XAxis dataKey='topic' />
                         <YAxis />
                         <CartesianGrid strokeDasharray="3 3" />
                         <Line type="monotone" dataKey="id" stroke="#8884d8" activeDot={{ r: 8 }} />
                         <Line type="monotone" dataKey="quiz" stroke="#82ca9d" />
                         <Tooltip></Tooltip>
                    </LineChart>

                   </div>
               </Col>
          </div>
     );
};

export default QuizChart;