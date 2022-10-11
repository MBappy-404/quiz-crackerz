import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
const ErrorPage = () => {
     return (
          <div className=''>

               <div className='bg-light p-5'>
                    <img src="https://www.kindpng.com/picc/m/164-1647170_404-page-04-404-error-page-png-transparent.png" alt="" />
               </div>
               
          <Link
            to='/'
            className='px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-900 mt-5'>
          <Button variant='success mt-5'> Back to homepage</Button>
           
          </Link>

          </div>
     );
};

export default ErrorPage;